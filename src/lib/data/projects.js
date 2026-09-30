export const projects = [
    {
        slug: 'unity-vortex-shield-prototype',
        title: 'Vortex Shield Prototype',
        subtitle: 'Redirection Combat in Unity',
        summary: `A focused <span class="highlight">Unity</span> mechanics prototype built over four agile sprints, centred on a <i>Titanfall 2</i>-inspired vortex shield that catches enemy projectiles and fires them back.`,
        overview: [
            `A scope-limited <span class="highlight">Unity</span> prototype developed over <span class="highlight">four agile sprints</span>, focused on a single combat fantasy: redirect enemy power instead of generating your own.`,
            `Gameplay research led to a <i>Titanfall 2</i>-style vortex shield as the core mechanic: projectiles stick to the shield via physics joints, then can be returned with spread and elemental interactions. The vertical slice includes WASD movement with mouse aim, multiple enemy types, health and damage systems, input hints, dialogue triggers, and an opening cutscene built with <span class="highlight">Timeline</span> and <span class="highlight">Cinemachine</span>.`,
            `Narratively, the protagonist is treated as a fraud for only being able to <span class="highlight">redirect</span> magic; story beats are delivered through retroactive first-person interjections, inspired by <i>Final Fantasy VII Rebirth</i> flashbacks and <i>Max Payne</i>-style monologue.`
        ],
        features: [
            ['Vortex shield', 'Block, capture, and counter-fire enemy projectiles'],
            ['Elemental combat', 'Damage types and environmental puzzles'],
            ['Tutorial flow', 'Dedicated rooms teaching redirection and enemy variety'],
            ['Cinematic intro', 'Timeline signals for dialogue and damage']
        ],
        media: { type: 'video', src: '/media/MayProto/proto2.mp4' },
        technologies: [
            { name: 'Unity', icon: 'devicon-unity-plain' },
            { name: 'C#', icon: 'devicon-csharp-plain' },
            { name: 'GitHub', icon: 'devicon-github-plain' },
            { name: 'JetBrains Rider', icon: 'rider' }
        ],
        tags: ['Gameplay', 'User Interface', 'Writing', 'Level Design'],
        links: []
    },
    {
        slug: 'one-button-survival-horror',
        title: 'Survival Horror Puzzle Prototype',
        subtitle: 'One Axis, One Button',
        summary: `An <i>Resident Evil</i>-inspired survival horror puzzle game built around a one-axis, one-button input brief.`,
        overview: [
            `This <i>Resident Evil</i>-inspired survival horror puzzle game was built around a one-axis, one-button input brief.`,
            `I built an <span class="highlight">Unreal Engine-style player controller</span> singleton to centralise input handling and distinguish taps from holds, supporting item use, inventory access, and contextual interactions.`,
            `I also built a world interactable system inspired by Unity's Canvas UI, allowing objects to communicate their state clearly while keeping the control scheme intentionally limited.`
        ],
        features: [
            ['Input system', 'Tap-and-hold interactions on a one-axis controller'],
            ['Inventory', 'Contextual item use and access'],
            ['World interactions', 'Clear feedback for interactable objects']
        ],
        media: { type: 'video', src: '/media/MayProto/proto1.mp4' },
        technologies: [
            { name: 'Unity', icon: 'devicon-unity-plain' },
            { name: 'C#', icon: 'devicon-csharp-plain' },
            { name: 'GitHub', icon: 'devicon-github-plain' },
            { name: 'JetBrains Rider', icon: 'rider' }
        ],
        tags: ['Gameplay', 'Input Systems', 'Puzzle Design', 'Level Design'],
        links: []
    },
    {
        slug: 'modular-survival-shooter',
        title: 'Modular Survival Shooter Prototype',
        subtitle: 'Weapons, Loot, and Dynamic Difficulty',
        summary: `A <span class="highlight">Unity</span> survival shooter prototype focused on modular weapons, loot, and a <i>Risk of Rain 2</i>-inspired enemy-spawning system.`,
        overview: [
            `This <span class="highlight">Unity</span> survival shooter prototype explores reusable gameplay systems for weapons, loot, and enemy encounters.`,
            `Weapon components store their data while a central <span class="highlight">Weapon Holder</span> coordinates equipped weapons and shared behaviour. I built a reusable <span class="highlight">Interactable</span> system for loot chests, item pickups, and other world interactions.`,
            `After reading the <i>Risk of Rain 2</i> wiki, I implemented a simplified linked time-of-day and difficulty system with presets for enemy spawning.`
        ],
        features: [
            ['Modular weapons', 'Reusable weapon components and shared holder logic'],
            ['Loot and interactions', 'Interactable system for chests and pickups'],
            ['Dynamic difficulty', 'Preset-driven spawning linked to time of day'],
            ['Enemy encounters', 'Configurable enemy spawning and encounter pressure']
        ],
        media: { type: 'video', src: '/media/CSharpScripting.mp4' },
        technologies: [
            { name: 'Unity', icon: 'devicon-unity-plain' },
            { name: 'C#', icon: 'devicon-csharp-plain' },
            { name: 'GitHub', icon: 'devicon-github-plain' },
            { name: 'JetBrains Rider', icon: 'rider' }
        ],
        tags: ['Gameplay Systems', 'Weapons', 'Enemy AI', 'Scriptable Objects', 'Level Design'],
        links: []
    },
    {
        slug: 'unity-exploration-game',
        title: 'Unity Exploration Game',
        subtitle: 'Interactive Narrative Adventure',
        summary: `An exploration-focused game built in <span class="highlight">Unity</span>, with a branching narrative system using <span class="highlight">Ink</span>.`,
        overview: [
            `A first-person, dialogue-driven exploration game built in Unity, featuring a branching narrative system using Ink.`,
            `The game features a fully functioning quest system, where players are tasked with retrieving items for NPCs, changing the available choices in dialogue and opening new paths.`
        ],
        features: [
            ['Branching narrative system', 'Choice-driven storytelling implemented with Ink'],
            ['Inventory and item system', 'Items can be picked up, used, and read by Ink'],
            ['Unity Editor tools', 'Tools for importing <i>Quake 3</i> levels built in TrenchBroom'],
            ['Save/load system', 'Persistence for dialogue, inventory, and quest state']
        ],
        media: { type: 'video', src: '/media/inkgame.mp4' },
        technologies: [
            { name: 'Unity', icon: 'devicon-unity-plain' },
            { name: 'C#', icon: 'devicon-csharp-plain' },
            { name: 'GitHub', icon: 'devicon-github-plain' },
            { name: 'VS Code', icon: 'devicon-vscode-plain' }
        ],
        tags: ['Gameplay', 'User Interface', 'Tools', 'Level Design', 'Writing'],
        links: [{ label: 'View Code', href: 'https://github.com/btarg/UnityInkGame', icon: 'fa-brands fa-github' }]
    },
    {
        slug: 'unity-puzzle-game',
        title: 'Unity Puzzle Game',
        subtitle: 'Time Manipulation Mechanics',
        summary: `A <i>Portal</i>-inspired first-person puzzle game built in <span class="highlight">Unity</span> using <span class="highlight">C#</span>.`,
        overview: [
            `A <i>Portal</i>-inspired first-person puzzle game built in <span class="highlight">Unity</span> using <span class="highlight">C#</span>.`,
            `The game's puzzles revolve around freezing objects and rewinding them in time, similar to mechanics later seen in Nintendo's <i>The Legend of Zelda: Tears of the Kingdom</i>.`,
            `This project was developed as a personal learning project and later used as my final assignment for my <span class="highlight">Computer Science A-Level</span> course in May 2022.`
        ],
        features: [
            ['Time manipulation', 'Freeze objects and rewind them to previous positions'],
            ['Progressive difficulty', 'Three levels with increasing complexity'],
            ['Save/load system', 'Persistence between sessions'],
            ['Physics integration', 'Interaction between time mechanics and Unity physics']
        ],
        media: { type: 'video', src: '/media/puzzlegame.mp4' },
        technologies: [
            { name: 'Unity', icon: 'devicon-unity-plain' },
            { name: 'C#', icon: 'devicon-csharp-plain' },
            { name: 'GitHub', icon: 'devicon-github-plain' },
            { name: 'VS Code', icon: 'devicon-vscode-plain' }
        ],
        tags: ['Gameplay', 'Level Design'],
        links: [{ label: 'View Code', href: 'https://github.com/btarg/PuzzleGame', icon: 'fa-brands fa-github' }]
    },
    {
        slug: 'godot-rpg-prototype',
        title: 'Godot Turn-based RPG',
        subtitle: 'Custom Combat & UI Systems',
        summary: `A turn-based RPG prototype built in <span class="highlight">Godot 4</span> with <span class="highlight">GDScript</span>.`,
        overview: [
            `A tactical turn-based RPG prototype built in <span class="highlight">Godot 4</span> using <span class="highlight">GDScript</span>, with gameplay mechanics based on Paizo's <i>Pathfinder</i> tabletop system.`,
            `All systems shown in the demonstration video were implemented from scratch, with the goal of testing my understanding of game architecture and design patterns.`,
            `I drew inspiration from <i>Baldur's Gate 3</i> while addressing its complicated controller UX, taking cues from the efficient UX design of <i>Persona 5</i>. The Pathfinder ruleset was simplified to reduce cognitive load on players.`,
            `I prototyped the UI design in Photoshop first, then implemented it using Godot's Control Nodes to ensure the interface felt responsive across different input methods.`
        ],
        features: [
            ['Movement and actions', 'Players and enemies spend Actions to move and act'],
            ['Spells and items', 'Area-of-effect and direct targeting options'],
            ['Stats and modifiers', 'Base stats plus buffs and debuffs'],
            ['Controller-first', 'Gamepad support with input glyphs for the current device'],
            ['User interface', 'Quick shortcuts for common combat actions']
        ],
        media: { type: 'video', src: '/media/requiem-jan28.mp4' },
        technologies: [
            { name: 'Godot Engine 4', icon: 'devicon-godot-plain' },
            { name: 'GDScript', icon: 'code' },
            { name: 'Photoshop / Photopea', icon: 'devicon-photoshop-plain' },
            { name: 'GitHub', icon: 'devicon-github-plain' },
            { name: 'VS Code', icon: 'devicon-vscode-plain' }
        ],
        tags: ['Gameplay', 'User Interface', 'Tools'],
        links: [{ label: 'View Code', href: 'https://github.com/btarg/third-person-controller', icon: 'fa-brands fa-github' }]
    },
    {
        slug: 'twitch-minecraft-mod',
        title: 'Twitch Vs Minecraft Mod',
        subtitle: 'Interactive Streaming Experience',
        summary: `A popular <span class="highlight">Minecraft Forge mod</span> that allows Twitch chat to control the streamer's game experience.`,
        overview: [
            `A popular <span class="highlight">Minecraft Forge mod</span> that allows Twitch chat to directly control the streamer's game experience, built with <span class="highlight">Java</span> and the <span class="highlight">Twitch API</span>.`,
            `The mod has over <span class="highlight">21,000 downloads</span> across CurseForge and Modrinth platforms, and has been played by several popular streamers.`,
            `The initial goal was to provide an easy-to-use mod with minimal setup for streamers, with preset commands designed to be fun and intuitive for viewers.`,
            `I started building <i>Twitch Vs Minecraft</i> in 2019 and maintained it through 2022 with consistent updates, new content, and support for later versions of Minecraft.`
        ],
        features: [
            ['Custom command system', 'Framework for creating and managing chat commands'],
            ['Developer-friendly API', 'Extensible system for other mod developers'],
            ['Configurable controls', 'Streamers can choose commands and tune cooldowns']
        ],
        media: { type: 'youtube', src: 'https://www.youtube.com/embed/thuyjV7FJx4?mute=1&controls=0&loop=1&playlist=thuyjV7FJx4&playsinline=1' },
        technologies: [
            { name: 'IntelliJ IDEA', icon: 'devicon-intellij-plain' },
            { name: 'Java', icon: 'devicon-java-plain' },
            { name: 'Twitch API', icon: 'fa-brands fa-twitch' }
        ],
        tags: ['Game Modding', 'API Integration', 'User Interface'],
        links: [{ label: 'Homepage', href: 'https://www.curseforge.com/minecraft/mc-mods/twitch-vs-minecraft', icon: 'fa-solid fa-arrow-up-right-from-square' }]
    }
];

export const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));
