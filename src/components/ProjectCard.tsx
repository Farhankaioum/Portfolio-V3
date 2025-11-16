import { useState } from 'react';
import { Project } from '../types/project';

interface ProjectCardProps {
    project: Project;
    onEdit?: (project: Project) => void;
    onDelete?: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onEdit, onDelete }) => {
    const [imageError, setImageError] = useState<boolean>(false);

    const handleImageError = (): void => {
        setImageError(true);
    };

    const handleEditClick = (): void => {
        onEdit?.(project);
    };

    const handleDeleteClick = (): void => {
        if (project.id) {
            onDelete?.(project.id);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 bg-gray-200">
                {!imageError ? (
                    <img
                        src={`/images/projects/${project.thumbnailFileName}`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <span className="text-gray-400">No Image</span>
                    </div>
                )}

                {project.featured && (
                    <span className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Featured
                    </span>
                )}

                <span className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-semibold ${project.status === 'completed' ? 'bg-green-500 text-white' :
                        project.status === 'in-progress' ? 'bg-blue-500 text-white' :
                            'bg-gray-500 text-white'
                    }`}>
                    {project.status}
                </span>
            </div>

            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs capitalize">
                        {project.category}
                    </span>
                    {project.technologies?.slice(0, 3).map((tech, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                        Visit Project →
                    </a>

                    <div className="flex space-x-2">
                        {onEdit && (
                            <button
                                onClick={handleEditClick}
                                className="text-gray-500 hover:text-gray-700 text-sm"
                            >
                                Edit
                            </button>
                        )}
                        {onDelete && (
                            <button
                                onClick={handleDeleteClick}
                                className="text-red-500 hover:text-red-700 text-sm"
                            >
                                Delete
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;