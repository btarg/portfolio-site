<script>
    import Contact from '$components/Contact.svelte';
    import ProjectMedia from '$components/ProjectMedia.svelte';
    import SkillTags from '$components/SkillTags.svelte';
    import SiteFooter from '$components/SiteFooter.svelte';
    import SiteHeader from '$components/SiteHeader.svelte';

    export let data;
    $: project = data.project;
</script>

<svelte:head>
    <title>{project.title} | Ben Targett</title>
    <meta name="description" content={project.summary.replace(/<[^>]*>/g, '')} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={`${project.title} | Ben Targett`} />
    <meta property="og:description" content={project.summary.replace(/<[^>]*>/g, '')} />
    <meta property="og:url" content={`https://bentargett.com/projects/${project.slug}/`} />
    <meta property="og:image" content="https://bentargett.com/media/ben-cropped.png" />
    <link rel="canonical" href={`https://bentargett.com/projects/${project.slug}/`} />
</svelte:head>

<div class="main">
    <SiteHeader activeSlug={project.slug} pageTitle={project.title} pageSubtitle={project.subtitle} showBrand={false} />
    <main>
        <section class="showcase" aria-labelledby="project-heading">
            <div class="box videobox" id="project-box">
                <h1 id="project-heading" class="project-title">{project.title}</h1>
                <div class="media">
                    <ProjectMedia media={project.media} controls />
                    <SkillTags technologies={project.technologies} tags={project.tags} />
                    {#each project.links as link}
                        <a href={link.href} class="link-button" target="_blank" rel="noreferrer">
                            <i class={link.icon} aria-hidden="true"></i><span>{link.label}</span>
                        </a>
                    {/each}
                    <a href="/" class="detail-back link-button">
                        <i class="fa-solid fa-arrow-left" aria-hidden="true"></i><span>Back to Portfolio</span>
                    </a>
                </div>
            </div>
        </section>

        <section class="description project-description" aria-labelledby="overview-heading">
            <div class="description-text">
                <h2 id="overview-heading">Project Overview</h2>
                {#each project.overview as paragraph}
                    <p>{@html paragraph}</p>
                {/each}
            </div>
            <div class="description-text">
                <h2>Key Features</h2>
                <ul>
                    {#each project.features as feature}
                        <li><span class="highlight">{feature[0]}:</span> {feature[1]}</li>
                    {/each}
                </ul>
            </div>
        </section>
    </main>
    <Contact />
    <SiteFooter />
</div>
