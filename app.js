// Project data structure
const projects = [
    {
        id: 1,
        title: "Challenge 1: Custom Scoping GPT",
        description: "ChatGPT",
        image: "assets/project1.jpg",
        link: "#"
    },
    {
        id: 2,
        title: "Challenge 2: AI Presentation",
        description: "Gamma, ChatGPT",
        image: "assets/project2.jpg",
        link: "#"
    },
    {
        id: 3,
        title: "Challenge 3: AI Visual Concept Exploration",
        description: "Krea",
        image: "assets/project3.jpg",
        link: "#"
    },
    {
        id: 4,
        title: "Challenge 4: AI Visual Iteration",
        description: "Krea",
        image: "assets/project4.jpg",
        link: "#"
    },
    {
        id: 5,
        title: "Challenge 5: AI Image Model",
        description: "Krea",
        image: "assets/project5.jpg",
        link: "#"
    },
    {
        id: 6,
        title: "Challenge 6: AI Video Generation",
        description: "UI, Art direction",
        image: "assets/project6.jpg",
        link: "#"
    }
];

// Function to create project cards
function createProjectCard(project, isReverse = false) {
    const article = document.createElement('article');
    article.className = `project-card ${isReverse ? 'reverse' : ''}`;

    article.innerHTML = `
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="btn">View Project</a>
        </div>
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
    `;

    return article;
}

// Function to initialize the project grid
function initializeProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    projectGrid.innerHTML = '';

    projects.forEach((project, index) => {
        const card = createProjectCard(project, index % 2 !== 0);
        projectGrid.appendChild(card);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
});