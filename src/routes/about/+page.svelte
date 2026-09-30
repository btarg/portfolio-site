<script>
    import Contact from '$components/Contact.svelte';
    import SiteFooter from '$components/SiteFooter.svelte';
    import SiteHeader from '$components/SiteHeader.svelte';
</script>

<svelte:head>
    <title>About Ben Targett | Game Programmer</title>
    <meta name="description" content="Learn more about Ben Targett's background, game programming experience, and creative-technical approach." />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="About Ben Targett | Game Programmer" />
    <meta property="og:description" content="Learn more about Ben Targett's background, game programming experience, and creative-technical approach." />
    <meta property="og:url" content="https://bentargett.com/about/" />
    <meta property="og:image" content="/media/ben-cropped.png" />
    <link rel="canonical" href="https://bentargett.com/about/" />
</svelte:head>

<div class="main">
    <SiteHeader pageTitle="About Me" pageSubtitle="Game Programmer, Writer, and Designer" />
    <main>
        <section class="about-intro" aria-labelledby="about-heading">
            <img src="/media/ben-cropped.png" alt="Ben Targett" class="profile-image" />
            <div class="description-text">
                <h2 id="about-heading">About Me</h2>
                <p>I am a game programmer with over six years of experience in game development and a strong foundation in both technical and creative disciplines. I am currently studying Game Design and Programming at the University of Staffordshire.</p>
                <p>Leading the Creative Writing Society at university has honed my ability to thrive in collaborative environments, provide and implement constructive feedback, and manage creative projects effectively.</p>
                <p>Starting with <i><a href="https://scratch.mit.edu/">Scratch</a></i>, <i>Garry's Mod</i>, and <i>Portal 2</i>'s level editor, I have always loved making my own gaming experiences. I am currently learning Unreal Engine 5 with C++ and building an RPG in Godot.</p>
            </div>
            <a href="/media/Ben%20Targett%20CV.pdf" class="about-cv-button">
                <span><i class="fa-solid fa-file-pdf" aria-hidden="true"></i>View my CV</span>
            </a>
        </section>
    </main>
    <Contact />
    <SiteFooter />
</div>
