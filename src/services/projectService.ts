import {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    getDoc,
    DocumentData,
    QueryConstraint
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import {
    Project,
    ProjectCreateInput,
    ProjectUpdateInput,
    ProjectQueryOptions,
    ProjectServiceResponse,
    ProjectCategory,
    ProjectStatus
} from '../types/project';

export class ProjectService {
    private static readonly collectionName = 'projects';

    // Create new project
    static async createProject(projectData: ProjectCreateInput): Promise<ProjectServiceResponse<Project>> {
        try {
            const projectWithTimestamps: Omit<Project, 'id'> = {
                ...projectData,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            const docRef = await addDoc(collection(db, this.collectionName), projectWithTimestamps);

            return {
                data: { id: docRef.id, ...projectWithTimestamps },
                error: null,
                success: true
            };
        } catch (error) {
            return {
                data: null,
                error: error instanceof Error ? error.message : 'Failed to create project',
                success: false
            };
        }
    }

    // Get all projects with optional filtering
    static async getProjects(options: ProjectQueryOptions = {}): Promise<ProjectServiceResponse<Project[]>> {
        try {
            const {
                category = null,
                featured = null,
                status = null,
                limit: queryLimit = null,
                orderBy: orderField = 'sortOrder',
                orderDirection = 'asc'
            } = options;

            let q = collection(db, this.collectionName);
            const conditions: QueryConstraint[] = [];

            // Build query conditions
            if (category) conditions.push(where('category', '==', category));
            if (featured !== null) conditions.push(where('featured', '==', featured));
            if (status) conditions.push(where('status', '==', status));

            // Apply ordering and limiting
            conditions.push(orderBy(orderField, orderDirection));
            if (queryLimit) conditions.push(limit(queryLimit));

            let qa = query(q, ...conditions);

            const querySnapshot = await getDocs(q);
            const projects: Project[] = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Project));

            return {
                data: projects,
                error: null,
                success: true
            };
        } catch (error) {
            return {
                data: null,
                error: error instanceof Error ? error.message : 'Failed to fetch projects',
                success: false
            };
        }
    }

    // Get single project by ID
    static async getProjectById(id: string): Promise<ProjectServiceResponse<Project>> {
        try {
            const docRef = doc(db, this.collectionName, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const projectData = docSnap.data();
                const project: Project = {
                    id: docSnap.id,
                    title: projectData.title,
                    description: projectData.description,
                    thumbnailFileName: projectData.thumbnailFileName,
                    link: projectData.link,
                    category: projectData.category,
                    technologies: projectData.technologies || [],
                    status: projectData.status,
                    featured: projectData.featured || false,
                    sortOrder: projectData.sortOrder || 0,
                    createdAt: projectData.createdAt?.toDate() || new Date(),
                    updatedAt: projectData.updatedAt?.toDate() || new Date()
                };

                return {
                    data: project,
                    error: null,
                    success: true
                };
            }

            return {
                data: null,
                error: 'Project not found',
                success: false
            };
        } catch (error) {
            return {
                data: null,
                error: error instanceof Error ? error.message : 'Failed to fetch project',
                success: false
            };
        }
    }

    // Update project
    static async updateProject(id: string, updates: Partial<ProjectUpdateInput>): Promise<ProjectServiceResponse<Project>> {
        try {
            const docRef = doc(db, this.collectionName, id);
            const updateData = {
                ...updates,
                updatedAt: new Date()
            };

            await updateDoc(docRef, updateData);

            // Return updated project
            return this.getProjectById(id);
        } catch (error) {
            return {
                data: null,
                error: error instanceof Error ? error.message : 'Failed to update project',
                success: false
            };
        }
    }

    // Delete project
    static async deleteProject(id: string): Promise<ProjectServiceResponse<boolean>> {
        try {
            await deleteDoc(doc(db, this.collectionName, id));

            return {
                data: true,
                error: null,
                success: true
            };
        } catch (error) {
            return {
                data: false,
                error: error instanceof Error ? error.message : 'Failed to delete project',
                success: false
            };
        }
    }

    // Get featured projects
    static async getFeaturedProjects(): Promise<ProjectServiceResponse<Project[]>> {
        return this.getProjects({
            featured: true,
            orderBy: 'sortOrder',
            orderDirection: 'asc'
        });
    }

    // Get projects by category
    static async getProjectsByCategory(category: ProjectCategory): Promise<ProjectServiceResponse<Project[]>> {
        return this.getProjects({
            category,
            orderBy: 'sortOrder',
            orderDirection: 'asc'
        });
    }

    // Create sample project (for testing/demo)
    static createSampleProject(): ProjectCreateInput {
        return {
            title: 'Transcom Digital Mobile app',
            description: 'Transcomdigital.com is #1 online shopping platform in Bangladesh offering premium quality and best online experience to purchase Original Electronic Appliances. You can find almost all kind of electronics solution for your home.',
            thumbnailFileName: 'transcomdigital.jpg',
            link: 'https://transcomdigital.com',
            category: 'mobile',
            technologies: ['React Native', 'TypeScript', 'Firebase'],
            status: 'completed',
            featured: true,
            sortOrder: 1
        };
    }
}