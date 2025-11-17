export interface Experience {
    id?: string;
    period: string;
    company: string;
    logo: string;
    role: string;
    companyUrl: string;
    description: string[];
    technologies: string[];
    startDate: Date;
    endDate?: Date;
    current: boolean;
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface ExperienceCreateInput extends Omit<Experience, 'id' | 'createdAt' | 'updatedAt'> { }
export interface ExperienceUpdateInput extends Partial<Omit<Experience, 'id' | 'createdAt'>> { }

export interface ExperienceQueryOptions {
    featured?: boolean;
    current?: boolean;
    limit?: number;
    orderBy?: keyof Experience;
    orderDirection?: 'asc' | 'desc';
}