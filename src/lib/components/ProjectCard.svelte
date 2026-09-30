<script>
    import ProjectMedia from '$components/ProjectMedia.svelte';
    import SkillTags from '$components/SkillTags.svelte';

    export let project;
</script>

<article class="project" id={project.slug}>
    <h2>{project.title}</h2>
    <ProjectMedia media={project.media} preview />
    <SkillTags technologies={project.technologies} tags={project.tags} showRiderLabel />
    <p class="description">
        <span>{@html project.summary}</span>
        <a href={`/projects/${project.slug}/`} class="tag button-container read-more">
            <span><i class="fa-solid fa-book-open" aria-hidden="true"></i>Read More</span>
        </a>
    </p>
</article>
