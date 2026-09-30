<script>
    export let technologies = [];
    export let tags = [];
    export let links = [];
    export let showRiderLabel = false;

    const iconSources = {
        rider: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/rider.svg'
    };
</script>

<div class="skills-links-bar">
    <div class="skills-section" aria-label="Technologies used">
        {#each technologies as technology}
            {#if technology.icon === 'rider'}
                <span class="skill-icon" title={technology.name}>
                    <img src={iconSources.rider} alt={technology.name} />
                    {#if showRiderLabel}
                        {technology.name}
                    {/if}
                </span>
            {:else}
                <i class={technology.icon === 'code' ? 'fa-solid fa-code' : technology.icon} title={technology.name} aria-hidden="true"></i>
            {/if}
        {/each}
    </div>

    <div class="video-tags center-tags" aria-label="Project tags">
        {#each tags as tag}
            <div class="tag"><span>{tag}</span></div>
        {/each}
    </div>

    <div class="project-links" aria-label="Project links">
        {#each links as link}
            <a href={link.href} class="link-button" target="_blank" rel="noreferrer">
                <i class={link.icon} aria-hidden="true"></i><span>{link.label}</span>
            </a>
        {/each}
    </div>
</div>
