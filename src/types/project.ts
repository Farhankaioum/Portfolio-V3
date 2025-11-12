export type ProjectCategory = 'mobile' | 'web' | 'desktop' | 'other';
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface Project {
    id?: string;
    title: string;
    description: string;
    thumbnailFileName: string;
    link: string;
    category: ProjectCategory;
    technologies: string[];
    status: ProjectStatus;
    featured: boolean;
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProjectCreateInput extends Omit<Project, 'id' | 'createdAt' | 'updatedAt'> { }
export interface ProjectUpdateInput extends Partial<Omit<Project, 'id' | 'createdAt'>> {
    updatedAt: Date;
}

export interface ProjectQueryOptions {
    category?: ProjectCategory | null;
    featured?: boolean | null;
    status?: ProjectStatus | null;
    limit?: number | null;
    orderBy?: keyof Project;
    orderDirection?: 'asc' | 'desc';
}

export interface ProjectServiceResponse<T> {
    data: T | null;
    error: string | null;
    success: boolean;
}