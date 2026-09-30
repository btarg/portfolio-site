<script>
    import Contact from '$components/Contact.svelte';
    import ProjectCard from '$components/ProjectCard.svelte';
    import SiteFooter from '$components/SiteFooter.svelte';
    import SiteHeader from '$components/SiteHeader.svelte';
    import { projects } from '$data/projects.js';
</script>

<svelte:head>
    <title>Ben Targett | Game Programming Portfolio</title>
    <meta name="description" content="Game programming portfolio featuring gameplay systems, tools, UI, narrative systems, and interactive prototypes by Ben Targett." />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Ben Targett | Game Programming Portfolio" />
    <meta property="og:description" content="Game programming portfolio featuring gameplay systems, tools, UI, narrative systems, and interactive prototypes by Ben Targett." />
    <meta property="og:url" content="https://bentargett.com/" />
    <meta property="og:image" content="/media/ben-cropped.png" />
    <link rel="canonical" href="https://bentargett.com/" />
</svelte:head>

<div class="main">
    <SiteHeader />
    <main>
        <section id="videos" aria-labelledby="projects-heading">
            <h2 id="projects-heading" class="sr-only">Selected projects</h2>
            <div class="media portfolio-grid">
                {#each projects as project}
                    <ProjectCard {project} />
                {/each}
            </div>
        </section>

        <section class="description smalldesc portfolio-summary" aria-labelledby="summary-heading">
            <img src="/media/ben-cropped.png" alt="Ben Targett" class="profile-image" />
            <div class="description-text">
                <h2 id="summary-heading">About me</h2>
                <div>
                    I am an experienced <span class="highlight">game programmer</span> with a strong background in gameplay design and systems programming.
                    I'm currently learning Unreal Engine 5 with C++ and exploring <span class="highlight">game AI</span>.
                </div>
                <a href="/media/Ben%20Targett%20CV.pdf" class="tag button-container cv-button">
                    <span><i class="fa-solid fa-file-pdf" aria-hidden="true"></i>View my CV</span>
                </a>
            </div>
        </section>
    </main>
    <Contact />
    <SiteFooter />
</div>
