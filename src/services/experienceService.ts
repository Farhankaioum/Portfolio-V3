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
    QueryConstraint
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import {
    Experience,
    ExperienceCreateInput,
    ExperienceUpdateInput,
    ExperienceQueryOptions
} from '../types/experience';

export class ExperienceService {
    private static readonly collectionName = 'experiences';

    static async createExperience(experienceData: ExperienceCreateInput): Promise<Experience> {
        try {
            const experienceWithTimestamps = {
                ...experienceData,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            const docRef = await addDoc(collection(db, this.collectionName), experienceWithTimestamps);
            return { id: docRef.id, ...experienceWithTimestamps };
        } catch (error) {
            throw new Error(`Failed to create experience: ${error.message}`);
        }
    }

    static async getExperiences(options: ExperienceQueryOptions = {}): Promise<Experience[]> {
        try {
            const {
                featured,
                current,
                limit: queryLimit,
                orderBy: orderField = 'startDate',
                orderDirection = 'desc'
            } = options;

            let q = collection(db, this.collectionName);
            const conditions: QueryConstraint[] = [];

            if (featured !== undefined) {
                conditions.push(where('featured', '==', featured));
            }

            if (current !== undefined) {
                conditions.push(where('current', '==', current));
            }

            conditions.push(orderBy(orderField, orderDirection));

            if (queryLimit) {
                conditions.push(limit(queryLimit));
            }

            let qa = query(q, ...conditions);

            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Experience));
        } catch (error) {
            //throw new Error(`Failed to fetch experiences: ${error.message}`);
        }
    }

    static async getExperienceById(id: string): Promise<Experience | null> {
        try {
            const docRef = doc(db, this.collectionName, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() } as Experience;
            }
            return null;
        } catch (error) {
            //throw new Error(`Failed to fetch experience: ${error.message}`);
        }
    }

    static async updateExperience(id: string, updates: ExperienceUpdateInput): Promise<Experience> {
        try {
            const docRef = doc(db, this.collectionName, id);
            await updateDoc(docRef, {
                ...updates,
                updatedAt: new Date()
            });

            const updatedExperience = await this.getExperienceById(id);
            if (!updatedExperience) {
                throw new Error('Experience not found after update');
            }
            return updatedExperience;
        } catch (error) {
            //throw new Error(`Failed to update experience: ${error.message}`);
        }
    }

    static async deleteExperience(id: string): Promise<void> {
        try {
            await deleteDoc(doc(db, this.collectionName, id));
        } catch (error) {
            //throw new Error(`Failed to delete experience: ${error.message}`);
        }
    }

    // Helper to create your sample experience
    static createSampleExperience(): ExperienceCreateInput {
        return {
            period: "December 2024 — Aug 2025",
            company: "Ausis Accommodation Services",
            logo: "/images/experiences/ausis.png",
            role: "Freelance Full Stack Software Engineer (Contractual)",
            companyUrl: "https://www.airpaz.com/en/hotel/ausis-accommodation-services.5377238",
            description: [
                "I was responsible for understanding business requirements, estimating tasks, and implementing features for their new website and automating manual task. I also deal with their existing products to support clients."
            ],
            technologies: ["Python", "PHP", "Laravel", "Vue.js", "Mysql", "AWS"],
            startDate: new Date('2024-12-01'),
            endDate: new Date('2025-08-31'),
            current: false,
            featured: true,
            //createdAt: new Date(),
            //updatedAt: new Date()
        };
    }

    // Get featured experiences
    static async getFeaturedExperiences(): Promise<Experience[]> {
        return this.getExperiences({ featured: true, limit: 5 });
    }

    // Get current experiences
    static async getCurrentExperiences(): Promise<Experience[]> {
        return this.getExperiences({ current: true });
    }

    // Get all experiences sorted by date (most recent first)
    static async getAllExperiences(): Promise<Experience[]> {
        return this.getExperiences({ orderBy: 'startDate', orderDirection: 'desc' });
    }
}