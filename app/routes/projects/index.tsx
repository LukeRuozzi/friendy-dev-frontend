import React, {useState} from 'react';

import type {Route} from "./+types/index";
import type {Project, StrapiProject, StrapiResponse} from "~/types";
import ProjectCard from "~/components/ProjectCard";
import Pagination from "~/components/Pagination";
import {AnimatePresence, motion} from "framer-motion";

export async function loader({request}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?populate=*`);
    const json: StrapiResponse<StrapiProject> = await res.json();

    const projects = json.data.map(item => ({
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        description: item.description,
        image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
        url: item.url,
        date: item.date,
        category: item.category,
        featured: item.featured,
    }));

    return {projects};
}

const ProjectsPage = ({loaderData}: Route.ComponentProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const {projects} = loaderData as { projects: Project[] };

    const categories = [
        'All', ...new Set(projects.map((project) => project.category)),
    ];

    const filteredProjects = selectedCategory === 'All' ? projects : projects.filter((p: Project) => p.category === selectedCategory);

    const projectsPerPage = 8;

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const lastIndex = projectsPerPage * currentPage;
    const currentProjects = filteredProjects.slice(lastIndex - projectsPerPage, lastIndex);

    return (
        <section>
            <h2 className="text-3xl text-white font-bold mb-8">
                Projects
            </h2>

            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                    <button key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setCurrentPage(1);
                            }}
                            className={`cursor-pointer px-3 py-1 rounded text-sm ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <AnimatePresence mode='wait'>
                <motion.div layout className="grid gap-6 sm:grid-cols-2 mt-6">
                    {currentProjects.map(project => (
                        <motion.div key={project.id} layout>
                            <ProjectCard
                                project={project}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

        </section>
    );
};

export default ProjectsPage;