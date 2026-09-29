document.addEventListener('DOMContentLoaded', () => {
    const mediaElements = document.querySelectorAll('video, iframe[src*="youtube.com/embed"]');

    if (!mediaElements.length || !('IntersectionObserver' in window)) {
        return;
    }

    const pauseMedia = element => {
        if (element.tagName === 'VIDEO') {
            element.pause();
            return;
        }

        element.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
            'https://www.youtube.com'
        );
    };

    const playMedia = element => {
        if (element.tagName === 'VIDEO') {
            element.play().catch(() => {});
            return;
        }

        element.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
            'https://www.youtube.com'
        );
    };

    mediaElements.forEach(element => {
        if (element.tagName === 'IFRAME') {
            const source = new URL(element.src);
            source.searchParams.set('enablejsapi', '1');
            source.searchParams.set('start', '0');

            element.addEventListener('load', () => {
                window.setTimeout(() => {
                    element.contentWindow.postMessage(
                        JSON.stringify({ event: 'command', func: 'seekTo', args: [0, true] }),
                        'https://www.youtube.com'
                    );
                }, 300);
            }, { once: true });

            element.src = source.toString();
        }
    });

    const pausedByScroll = new WeakSet();
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                pauseMedia(entry.target);
                pausedByScroll.add(entry.target);
            } else if (pausedByScroll.has(entry.target)) {
                playMedia(entry.target);
                pausedByScroll.delete(entry.target);
            }
        });
    }, { threshold: 0.1 });

    mediaElements.forEach(element => observer.observe(element));
});
