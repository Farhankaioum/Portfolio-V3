import { useState, useEffect } from 'react';
import { ProjectService } from '@/services/projectService';

export const useProjects = (options = {}) =>
{
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
        const fetchProjects = async () =>
        {
            try
            {
                setLoading(true);
                const projectsData = await ProjectService.getProjects(options);
                setProjects(projectsData);
                setError(null);
            } catch (err)
            {
                setError(err.message);
            } finally
            {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [JSON.stringify(options)]);

    return { projects, loading, error };
};

export const useProject = (id) =>
{
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
        const fetchProject = async () =>
        {
            if (!id) return;

            try
            {
                setLoading(true);
                const projectData = await ProjectService.getProjectById(id);
                setProject(projectData);
                setError(null);
            } catch (err)
            {
                setError(err.message);
            } finally
            {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    return { project, loading, error };
};