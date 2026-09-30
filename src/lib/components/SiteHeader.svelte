<script>
    import { projects } from '$data/projects.js';

    export let activeSlug = '';
    export let pageTitle = 'Ben Targett';
    export let pageSubtitle = 'Game Programming Portfolio';
    export let showBrand = true;
</script>

<header>
    <nav class="main-nav" aria-label="Main navigation">
        <a href="/" class:active={pageTitle === 'Ben Targett'} class="nav-link">Portfolio</a>
        <a href="/about/" class:active={pageTitle === 'About Me'} class="nav-link">About</a>
    </nav>

    {#if showBrand}
        <h1>{pageTitle}</h1>
    {/if}
    <h2>{pageSubtitle}</h2>

    {#if activeSlug || pageTitle === 'Ben Targett'}
        <nav class="carousel-dots" aria-label="Project navigation">
            {#each projects as project, index}
                <a
                    class="dot"
                    class:active={project.slug === activeSlug}
                    href={`/projects/${project.slug}/`}
                    aria-label={`Project ${index + 1}: ${project.title}`}
                    aria-current={project.slug === activeSlug ? 'page' : undefined}
                    title={`Project ${index + 1}: ${project.title}`}
                ></a>
            {/each}
        </nav>
    {/if}
</header>
