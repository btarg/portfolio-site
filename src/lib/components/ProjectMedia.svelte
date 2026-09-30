<script>
    export let media;
    export let controls = false;
    export let preview = false;
    export let autoplay = false;

    $: embedSrc = autoplay && !media.src.includes('autoplay=1')
        ? `${media.src}${media.src.includes('?') ? '&' : '?'}autoplay=1`
        : media.src;
</script>

{#if media.type === 'youtube'}
    <div class:video-embed={preview} class="media-frame">
        <iframe
            class:youtube-player={preview}
            src={embedSrc}
            title="Project demonstration video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    </div>
{:else}
    <div class:video-embed={preview} class="media-frame">
        <video {controls} autoplay={autoplay || preview} muted loop={preview} playsinline preload="metadata">
            <source src={media.src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
{/if}
