import { useState, useEffect } from 'react';
import { ExperienceService } from '@/services/experienceService';
import { Experience, ExperienceQueryOptions } from '@/types/experience';

interface UseExperiencesReturn {
    experiences: Experience[];
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const useExperiences = (options: ExperienceQueryOptions = {}): UseExperiencesReturn => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchExperiences = async (): Promise<void> => {
        try {
            setLoading(true);
            const data = await ExperienceService.getExperiences(options);
            setExperiences(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExperiences();
    }, [JSON.stringify(options)]);

    return { experiences, loading, error, refetch: fetchExperiences };
};