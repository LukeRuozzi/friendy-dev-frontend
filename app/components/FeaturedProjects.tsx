import React from 'react';
import type {Project} from "~/types";
import ProjectCard from "~/components/ProjectCard";

type ComponentProps = {
    count: number,
    projects: Project[],
}

const FeaturedProjects: React.FC<ComponentProps> = ({
    count,
    projects,
                                                    }) => {

    if (projects.length === 0) {
        return null;
    }

    return (
        <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-200">
                Featured Projects
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

        </section>
    );
};

export default FeaturedProjects;