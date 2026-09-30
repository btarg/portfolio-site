import { error } from '@sveltejs/kit';
import { projects, projectsBySlug } from '$data/projects.js';

export const prerender = true;

export function entries() {
    return projects.map((project) => ({ slug: project.slug }));
}

export function load({ params }) {
    const project = projectsBySlug.get(params.slug);

    if (!project) {
        error(404, 'Project not found');
    }

    return { project };
}
