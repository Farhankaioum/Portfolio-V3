import { useState, useEffect } from 'react';
import { ProjectService } from '../services/projectService';
import { Project, ProjectQueryOptions } from '../types/project';

interface UseProjectsReturn {
    projects: Project[];
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

interface UseProjectReturn {
    project: Project | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export const useProjects = (options: ProjectQueryOptions = {}): UseProjectsReturn => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = async (): Promise<void> => {
        try {
            setLoading(true);
            const result = await ProjectService.getProjects(options);

            if (result.success && result.data) {
                setProjects(result.data);
                setError(null);
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, [JSON.stringify(options)]);

    return { projects, loading, error, refetch: fetchProjects };
};

export const useProject = (id: string | undefined): UseProjectReturn => {
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProject = async (): Promise<void> => {
        if (!id) {
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            const result = await ProjectService.getProjectById(id);

            if (result.success && result.data) {
                setProject(result.data);
                setError(null);
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProject();
    }, [id]);

    return { project, loading, error, refetch: fetchProject };
};