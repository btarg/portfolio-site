document.addEventListener('DOMContentLoaded', () => {
    const mediaElements = Array.from(document.querySelectorAll('video, iframe[src*="youtube.com/embed"]'))
        .filter(element => {
            const hasControls = element.hasAttribute('controls') || element.src.includes('controls=1');
            return !hasControls;
        });

    if (!mediaElements.length) {
        return;
    }

    const sendYouTubeCommand = (element, func) => {
        element.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func, args: [] }),
            'https://www.youtube.com'
        );
    };

    const playMedia = element => {
        if (element.tagName === 'VIDEO') {
            element.play().catch(() => {});
            return;
        }

        sendYouTubeCommand(element, 'playVideo');
    };

    const hoveredMedia = new WeakSet();
    const visibleMedia = new WeakSet();
    const readyFrames = new WeakSet();
    const playInFrame = window.matchMedia('(hover: none), (pointer: coarse)').matches;

    const playWhenReady = element => {
        if (!(hoveredMedia.has(element) || visibleMedia.has(element))) {
            return;
        }

        window.setTimeout(() => {
            if (hoveredMedia.has(element) || visibleMedia.has(element)) {
                playMedia(element);
            }
        }, 150);
    };

    const observer = playInFrame && 'IntersectionObserver' in window
        ? new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }

                visibleMedia.add(entry.target);

                if (entry.target.tagName === 'VIDEO' || readyFrames.has(entry.target)) {
                    playMedia(entry.target);
                }
            });
        }, { threshold: 0.35 })
        : null;

    mediaElements.forEach(element => {
        if (element.tagName === 'IFRAME') {
            element.addEventListener('load', () => {
                readyFrames.add(element);
                playWhenReady(element);
            });

            const source = new URL(element.src);
            source.searchParams.set('enablejsapi', '1');
            source.searchParams.set('start', '0');
            element.src = source.toString();
        }

        if (playInFrame) {
            observer?.observe(element);
        } else {
            element.addEventListener('mouseenter', () => {
                hoveredMedia.add(element);

                if (element.tagName === 'VIDEO' || readyFrames.has(element)) {
                    playMedia(element);
                }
            });
            element.addEventListener('mouseleave', () => {
                hoveredMedia.delete(element);
            });
        }
    });
});
