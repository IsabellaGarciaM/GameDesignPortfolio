/**
 * BASE DE DATOS DE PROYECTOS
 * Para agregar un juego nuevo, solo añade un objeto nuevo al final de esta lista [].
 */
const projects = [
    {
        id: 'ultimoaliento',
        title: 'El último aliento',
        description: 'El último aliento is a mobile narrative-driven game, with an endless runner mechanic, developed in 48 hours for the Global Game Jam 2025. The story follows an explorer embarking on a maritime expedition, hoping to return soon to confess their love to a special someone. However, the journey takes an unexpected turn, and now the player must navigate the oceans depths to retrieve the explorers final breath, which contains their heartfelt message. This game explores themes of love, loss, and the connection between life and death in a poignant and atmospheric setting.',
        detailsHtml: `
            <p><strong>Project Type:</strong> Narrative-driven Adventure (Game Jam)<br>
            <strong>Game Jam:</strong> Global Game Jam 2025<br>
            <strong>Team size:</strong> 6<br>
            &emsp;➥Isabella Garcia Merlano<br>
            &emsp;➥Alejandra Urueña<br>
            &emsp;➥Ana María Contreras<br>
            &emsp;➥Santiago Gallo Beltran<br>
            &emsp;➥Daniel Florez<br>
            &emsp;➥Haruyoshie Ecima<br>
            &emsp;➥Julian González<br>
            <strong>Roles:</strong> Project Manager, Artist, Game and narrative designer<br>
            <strong>Software Used:</strong> Unity 3D<br>
            <strong>Duration:</strong> January 24th - 26th 2025</p>
        `,
        contributionsHtml: `
            <ul>
                <li><strong>Project Management</strong>: Oversaw the organization of the team, establishing clear planning to ensure that all tasks were completed within the allotted time. I fostered collaboration and maintained team motivation, ensuring that all members could work efficiently and together to meet project objectives.</li>
                <li><strong>Art Direction and design</strong>: Led the creation of the visual style, defining the aesthetic approach to reflect the melancholic and atmospheric theme of the game. Designed key art assets, including characters and environments, ensuring that the visuals aligned with the emotional narrative.</li>
                <li><strong>Narrative design</strong>: Developed the core storyline, focusing on the emotional depth of the protagonist’s journey. Crafted the story beats and the protagonist's inner conflict, intertwining it with the gameplay to deliver a meaningful emotional experience for the player.</li>
                <li><strong>Game design</strong>: Designed the game mechanics that support the narrative, such as the exploration of the ocean depths and the retrieval of the explorer’s final breath. Focused on creating a compelling gameplay loop that enhanced the player's emotional connection to the story.</li>
            </ul>
        `,
        gameplayHtml: `
            <ul>
                <li><strong>Bubble Journey Mechanic</strong>: ThThe game features a unique "endless runner" mechanic, where the player controls a bubble representing the protagonist's desire to deliver their message of love. The bubble continuously moves upwards, guided by the player’s taps that shift its direction in response to a moving arrow. The player must navigate through marine creatures and avoid shrinking the bubble, while also managing its gravity to prevent it from falling. If the bubble collides with obstacles or loses control, the player loses.</li>
                <li><strong>Story Mode and Replayable Endless Mode</strong>: In the story mode, the player experiences the narrative through a series of events, where the story progresses with each level and key moments are revealed as the player advances. The game culminates in an emotional ending, tying the gameplay to the protagonist's final message. And in the record mode, the goal is to achieve the highest score possible by navigating the bubble as long as possible. The score is based on distance and the player's ability to avoid obstacles, encouraging replayability and skill improvement.</li>
            </ul>
        `,
        reflectionHtml: `
            <p>El ultimo aliento allowed me to explore how to combine engaging gameplay mechanics with an emotional narrative in a limited time frame. The bubble mechanic, which directly ties into the protagonist’s desire to deliver a message of love, helped me deepen my understanding of how gameplay can reflect story themes. I also gained valuable experience in balancing narrative progression with interactive gameplay, ensuring the player’s actions felt meaningful while still advancing the story. The collaboration with a talented team of artists, developers, and sound designers further enhanced my skills in coordinating multiple aspects of game development under time constraints. This project reinforced the importance of creating immersive experiences that evoke strong emotional connections with players.</p>
        `,
        media: [
            { type: 'video', src: 'https://www.youtube.com/embed/cpNldK0s_Zo', thumb: 'ultimoalientoarch/uavidthumb.png' },
            { type: 'image', src: 'ultimoalientoarch/ua1.png', thumb: 'ultimoalientoarch/ua1.png' },
            { type: 'image', src: 'ultimoalientoarch/ua2.png', thumb: 'ultimoalientoarch/ua2.png' },
            { type: 'image', src: 'ultimoalientoarch/ua3.gif', thumb: 'ultimoalientoarch/ua3.gif' },
            { type: 'image', src: 'ultimoalientoarch/ua4.png', thumb: 'ultimoalientoarch/ua4.png' },
            { type: 'image', src: 'ultimoalientoarch/ua5.gif', thumb: 'ultimoalientoarch/ua5.gif' },
            { type: 'image', src: 'ultimoalientoarch/ua6.png', thumb: 'ultimoalientoarch/ua6.png' },
            { type: 'image', src: 'ultimoalientoarch/ua7.gif', thumb: 'ultimoalientoarch/ua7.gif' }
        ],
        buttons: [
            { label: 'Itch.io Page', href: 'https://mayvisan.itch.io/el-ultimo-aliento' }
        ]
    },



    



    {
    id: 'moebius',
    title: 'Möbius',
    description: 'Möbius is a surreal horror RPG developed in 48 hours for the Unisabana Gamejam, where it earned first place. The story follows an astronaut who wakes up in a broken spaceship, trapped in a fragmented reality filled with analog horror elements. The player decisions shape the course of the story, leading to one of several possible endings. Inspired by psychological and analog horror, Möbius immerses players in a disconcerting, atmospheric world where every choice matters.',
    detailsHtml: `
        <p><strong>Project Type:</strong>  An RPG Demo with Decision Making (Game Jam)<br>
            <strong>Game Jam:</strong> Unisabana Gamejam 2023<br>
            <strong>Team size:</strong> 4<br>
            &emsp;➥Isabella Garcia Merlano<br>
            &emsp;➥Shantal Ramirez Cubillos<br>
            &emsp;➥Julian Ayala<br>
            &emsp;➥Santiago Peña Beltran<br>
            <strong>Roles:</strong> Project Manager, Artistic Director, Story and Mechanics Director, Programmer<br>
            <strong>Software Used:</strong> RPG Maker MV<br>
            <strong>Duration:</strong> June 3rd - 5th 2023</p>
            <strong>Awards & Recognition: </strong> First place award2023</p>
    `,
    contributionsHtml: `
        <ul>
            <li><strong>Project Management: </strong> Coordinated the team and ensured the integration of all parts of the development, maintaining the workflow and meeting delivery times.</li>
            <li><strong>Art Direction: </strong> Defined the visual aesthetics of the game, focusing on an analog horror style to intensify the feeling of disorientation and threat in the player.</li>
            <li><strong>Narrative and Story Direction: </strong> Developed the core story and surreal horror themes, designing a world where the player's decisions affect the outcome. The narrative focuses on the atmosphere of loneliness and the tension of the unknown, using influences from analog horror.</li>
            <li><strong>Decision Mechanics Design and Programming: </strong> Designed and implemented a decision-making system in RPG Maker MV that allows the player to choose between different options, each leading to a different ending. These decisions are designed to increase the immersion and emotional impact of the story.</li>
     </ul>
    `,
    gameplayHtml: `
        <p><strong>Decision Making and Multiple Endings: </strong> The player must make critical decisions that influence the course of the story, leading to different endings and creating a personalized horror experience.<br><br>
        <strong>Surreal Horror Aesthetics and Narrative: </strong> Spatial setting inspired by analog horror, combining visual and sound elements that create an atmosphere of unease and mystery.</p>
    `,
    reflectionHtml: `
    <p>As my first project as a Lead Developer, this game was a masterclass in pivoting and scope management. The most critical decision was switching from Unity to RPG Maker mid-jam; while risky, this technical pivot allowed us to prioritize our narrative goals and deliver a polished experience with three distinct endings. This experience highlighted the vital importance of early time management and clear role definition. I learned that without internal deadlines, even the best creative ideas can suffer from bottlenecks. Moving forward, I have integrated agile tools like Trello and more robust GDD documentation into my workflow to ensure that art, sound, and code remain synchronized from the beginning.</p>
    `,
        media: [
            { type: 'video', src: 'https://www.youtube.com/embed/U7DRRBGznNQ', thumb: 'mobiusarch/mob8thumb.png' },
            { type: 'image', src: 'mobiusarch/mob1.png', thumb: 'mobiusarch/mob1.png' },
            { type: 'image', src: 'mobiusarch/mob2.gif', thumb: 'mobiusarch/mob2.gif' },
            { type: 'image', src: 'mobiusarch/mob3.png', thumb: 'mobiusarch/mob3.png' },
            { type: 'image', src: 'mobiusarch/mob4.gif', thumb: 'mobiusarch/mob4.gif' },
            { type: 'image', src: 'mobiusarch/mob5.gif', thumb: 'mobiusarch/mob5.gif' },
            { type: 'image', src: 'mobiusarch/mob6.png', thumb: 'mobiusarch/mob6.png' },
            { type: 'image', src: 'mobiusarch/mob7.gif', thumb: 'mobiusarch/mob7.gif' },
        ],
        buttons: [
            { label: 'Game Design Document', href: 'mobiusarch/Game Design Document Moebius.pdf' },
            { label: 'Itch.io Page', href: 'https://mayvisan.itch.io/moebius' }
        ]
    },





    {
        id: 'master',
        title: 'Master',
        description: 'Master is a strategic card game developed as an academic project for the course Design I. Inspired by the mechanics of a popular card game (reference), Master adapts the dynamics of skill collection and direct confrontation between players, where each competes to accumulate the greatest amount of experience in various areas of life. Players must form sets of cards to advance, block the progress of their opponents, and challenge others to obtain additional cards.',
        detailsHtml: `
        <p><strong>Project Type:</strong>  A board game prototype.<br>
            <strong>Team size:</strong> 4<br>
            &emsp;➥Isabella Garcia Merlano<br>
            &emsp;➥Natalia Fúquene Arias<br>
            &emsp;➥Mateo Montaño Gaona<br>
            &emsp;➥Luz Aydee Madrigal Diaz<br>
            <strong>Roles:</strong> Game Designer and Concept Artist<br>
            <strong>Duration:</strong> March 8th - May 30th 2021</p>
    `,
         contributionsHtml: `
        <ul>
            <li><strong>Rules Design Collaboration: </strong> Worked alongside the team to develop the game's rules, balancing collection strategy and player challenge mechanics.</li>
            <li><strong>Card Art Sketches: </strong> Created concept sketches for the cards, defining the visual style of each skill category (Knowledge, Arts, Life, Sport) and establishing a consistent aesthetic for the game.</li>
            <li><strong>Game Mechanics Development: </strong> Contributed to the creation of interaction and card draw mechanics, which add an element of direct competition and keep the game dynamic.</li>
        </ul>
        `,
        gameplayHtml: `
        <p><strong>Skill Cards: </strong> 120 cards divided into skill and wildcard categories, providing strategic options for progression and interaction between players.<br><br>
        <strong>Objective of the Game: </strong> Accumulate the most experience at the end of the game by building skill sets and facing other players to increase your score.</p>
        `,
        reflectionHtml: `<p>This project taught me the power of Rapid Iteration in a Design class. Designing for physical media meant that every change required a new "build" (printing and cutting). I learned to value Playtesting as the ultimate design tool; seeing players find loopholes in my rules taught me to write clearer technical documentation and to anticipate edge-case player behaviors.</p>`,
        media: [
            { type: 'image', src: 'mastersarch/master1.jpg', thumb: 'mastersarch/master1.jpg' },
            { type: 'image', src: 'mastersarch/master2.gif', thumb: 'mastersarch/master2.gif' },
            { type: 'image', src: 'mastersarch/master3.jpg', thumb: 'mastersarch/master3.jpg' },
            { type: 'image', src: 'mastersarch/master4.gif', thumb: 'mastersarch/master4.gif' },
            { type: 'image', src: 'mastersarch/master5.gif', thumb: 'mastersarch/master5.gif' },
            { type: 'image', src: 'mastersarch/master6.jpg', thumb: 'mastersarch/master6.jpg' },
            { type: 'image', src: 'mastersarch/master7.jpg', thumb: 'mastersarch/master7.jpg' },
        ],
        buttons: [
            { label: 'Rules and more', href: 'mastersarch/Master Rules.pdf' }
        ]
    },




    {
        id: 'spell',
        title: 'The Tale of the Broken Spell',
        description: 'The Tale of the Broken Spell is a puzzle-platformer prototype developed during the Women Game Jam 2024. In the game, a young mage casts an incomplete spell to go back in time, transporting her to different versions of the same reality. Trapped in a time-space loop, the mage must explore three alternate environments of an ancient temple and collect fragments of a lost grimoire to complete the spell and return to her original world. Each reality offers unique clues and challenges that guide the player toward their ultimate goal.',
        detailsHtml: `
        <p><strong>Project Type:</strong> Prototype of a Puzzle and Platform Video Game with Reality-Changing Mechanics (Game Jam)<br>
            <strong>Game Jam: </strong> Women Game Jam 2024 <br>
            <strong>Team size:</strong> 7<br>
            &emsp;➥Isabella Garcia Merlano<br>
            &emsp;➥Danna Milena Quimbay Galindo<br>
            &emsp;➥María Alejandra Jiménez Jiménez<br>
            &emsp;➥Jesus David Ruiz<br>
            &emsp;➥Gustavo Alejandro León Pulido<br>
            &emsp;➥David Santiago Frade<br>
            &emsp;➥vladizgg (Discord)<br>
            &emsp;➥vae_l (Discord)<br>
            <strong>Roles:</strong> Project Manager, Artistic Director, Scriptwriter and Mechanics Designer<br>
            <strong>Software Used:</strong> Unity 3D<br>
            <strong>Duration:</strong> August 9th - 11th 2024</p>
    `,
         contributionsHtml: `
        <ul>
            <li><strong>Project Management and Direction: </strong>  I coordinated the team to ensure a smooth integration between narrative, visual design, and game mechanics, meeting Game Jam deadlines.</li>
            <li><strong>Art Direction: </strong> I developed the visual aesthetics of the game, designing different environments and creating animations for the protagonist's sprites, with the aim of differentiating each reality.</li>
            <li><strong>Narrative and Scriptwriting: </strong> I helped writing the story of the sorceress trapped in the time loop and created dialogues that guide the player in their search for the grimoire fragments.</li>
            <li><strong>Contribution to Mechanics Design: </strong> I proposed ideas for the reality-shifting mechanic, which allows the player to alternate between three versions of the temple: a well-preserved temple, ruins overrun by nature, and a dark castle. I also designed the structure of the puzzles in each environment so that the player progressively unlocks the spell.</li>
        </ul>
        `,
        gameplayHtml: `
        <p><strong>Three Different Realities: </strong> The incomplete spell transports the protagonist between the Temple of Time, the Ancient Ruins, and the Dark Castle, each with specific challenges and grimoire fragments to collect.<br><br>
        <strong>Progression Puzzles: </strong> The player solves puzzles in each environment to advance the story and unlock new areas in the other realities.</p>
        `,
        reflectionHtml: `<p>Despite being an early-stage prototype, this project was a an experience in pre-production and world-building. As the Art Director and PM, I focused on creating a robust Game Design Document (GDD) and a cohesive visual language that allowed a team of seven to stay aligned with the narrative vision. This experience taught me that a strong conceptual foundation is vital for consistency, especially when core mechanics are still in flux. However, it also highlighted the importance of rapid prototyping in Unity: I learned that validating the reality-shifting mechanic earlier would have allowed us to refine the interaction loop sooner. Moving forward, I aim to balance high-level documentation and aesthetic development with early mechanic validation to ensure the creative vision and technical implementation evolve in parallel.</p>`
        ,

        media: [
            { type: 'video', src: 'https://www.youtube.com/embed/0QLZ0aeJYfM?si=iRAXAgzEyY-baiDs', thumb: 'ttobs/spell1.png' },
            { type: 'image', src: 'ttobs/spell1.png', thumb: 'ttobs/spell1.png' },
            { type: 'image', src: 'ttobs/spell2.gif', thumb: 'ttobs/spell2.gif' },
            { type: 'image', src: 'ttobs/spell3.png', thumb: 'ttobs/spell3.png' },
            { type: 'image', src: 'ttobs/spell4.gif', thumb: 'ttobs/spell4.gif' },
            { type: 'image', src: 'ttobs/spell5.png', thumb: 'ttobs/spell5.png' },
            { type: 'image', src: 'ttobs/spell6.png', thumb: 'ttobs/spell6.png' },
            { type: 'image', src: 'ttobs/spell7.png', thumb: 'ttobs/spell7.png' },
            { type: 'image', src: 'ttobs/spell8.png', thumb: 'ttobs/spell8.png' }
        ],
        buttons: [
            { label: 'Game Design Document', href: 'ttobs/Game Design Document The Tale Of The Broken Spell.pdf' },
            { label: 'Itch.io page', href: 'https://mayvisan.itch.io/the-tale-of-the-broken-spell' }
        ]
    }
];

/**
 * FUNCIONES DE LÓGICA
 */

// 1. Función para colapsar/expandir secciones
function toggleContent(header) {
    const arrow = header.querySelector('.arrow');
    const content = header.nextElementSibling;
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        arrow.classList.remove('expanded');
    } else {
        content.classList.add('open');
        arrow.classList.add('expanded');
    }
}

// 2. Función genérica para carruseles
function setupCarousel(containerId) {
    const mainContainer = document.querySelector(`#carousel-main-${containerId}`);
    const thumbContainer = document.querySelector(`#thumbnails-${containerId}`);
    const prevBtn = document.querySelector(`#prev-${containerId}`);
    const nextBtn = document.querySelector(`#next-${containerId}`);

    if (!mainContainer || !thumbContainer) return;

    const items = mainContainer.querySelectorAll('img, iframe');
    const thumbs = thumbContainer.querySelectorAll('img');
    let currentIndex = 0;

    function update(index) {
        items.forEach((item, i) => item.classList.toggle('active', i === index));
        thumbs.forEach((thumb, i) => thumb.classList.toggle('active', i === index));
        currentIndex = index;
    }

    thumbs.forEach((thumb, i) => {
        thumb.addEventListener('click', () => update(i));
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
        let idx = (currentIndex - 1 + items.length) % items.length;
        update(idx);
    });

    if (nextBtn) nextBtn.addEventListener('click', () => {
        let idx = (currentIndex + 1) % items.length;
        update(idx);
    });
}

// 3. Función para renderizar todos los proyectos en el HTML
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    projects.forEach(p => {
        const html = `
            <div class="content">
                <div class="project-info">
                    <h1>${p.title}</h1>
                    <p>${p.description}</p>
                    <div class="toggle-section">
                        ${createToggle('Project Details', p.detailsHtml)}
                        ${createToggle('Key Contributions and Responsibilities', p.contributionsHtml)}
                        ${createToggle('Gameplay Components', p.gameplayHtml)}
                        ${createToggle('Reflection and Learning', p.reflectionHtml)}
                    </div>
                </div>
                <div>
                    <div class="carousel-container">
                        <div class="carousel-main" id="carousel-main-${p.id}">
                            <button class="arrow arrow-left" id="prev-${p.id}">&#8249;</button>
                            
                            ${p.media.map((m, i) => m.type === 'video' 
                                ? `<iframe 
                                    src="${m.src}?enablejsapi=1&origin=${window.location.origin}" 
                                    class="carousel-item ${i === 0 ? 'active' : ''}" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowfullscreen 
                                    style="width:100%; height:500px;">
                                </iframe>`
                                : `<img src="${m.src}" class="${i === 0 ? 'active' : ''}">`
                            ).join('')}
                            <button class="arrow arrow-right" id="next-${p.id}">&#8250;</button>
                        </div>
                        <div class="carousel-thumbnails" id="thumbnails-${p.id}">
                            ${p.media.map((m, i) => `<img src="${m.thumb}" class="${i===0?'active':''}">`).join('')}
                        </div>
                    </div>
                    <div class="buttons">
                        ${p.buttons.map(b => `<a href="${b.href}" target="_blank">${b.label}</a>`).join('')}
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
        setupCarousel(p.id);
    });
}

function createToggle(title, content) {
    if (!content) return '';
    return `
        <div class="header-toggle" onclick="toggleContent(this)">
            <h2>${title}</h2>
            <span class="arrow">&#9660;</span>
        </div>
        <div class="content-toggle">
            ${content}
        </div>
        <hr class="divider">
    `;
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', renderProjects);

