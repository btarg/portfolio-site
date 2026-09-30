<script>
    export let technologies = [];
    export let tags = [];

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
</div>
