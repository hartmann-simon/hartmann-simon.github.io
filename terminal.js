// ===========================
// TERMINAL STATE & CONFIGURATION
// ===========================

let currentDirectory = '~';

// File system structure - everything is a file!
const FILES = {
    '~': ['about.txt', 'experience.txt', 'skills.txt', 'projects.txt', 'research.txt', 'education.txt']
};

// For backwards compatibility with directory checks
const DIRECTORIES = {
    '~': []
};

// ===========================
// CONTENT VIEWER HELPER
// ===========================

function displayInViewer(htmlContent, title = 'Content Viewer') {
    const viewer = document.getElementById('contentViewer');
    const viewerTitle = document.querySelector('.content-viewer-title');

    viewer.innerHTML = htmlContent;
    viewerTitle.textContent = title;

    return `[[;#98c379;]✓ Content displayed in viewer →]`;
}

// ===========================
// POWERLEVEL10K PROMPT
// ===========================

function getPrompt() {
    const dir = currentDirectory === '~' ? '~' : currentDirectory.split('/').pop();
    // Powerlevel10k style: user@host  directory  ❯
    return `[[;#61afef;]simon][[;#8a8a8a;]@][[;#c678dd;]portfolio] [[;#98c379;]${dir}] [[;#bd93f9;]❯] `;
}

// ===========================
// COWSAY / FORTUNE
// ===========================

const FORTUNES = [
    "Talk is cheap. Show me the code. - Linus Torvalds",
    "The best error message is the one that never shows up.",
    "Code never lies, comments sometimes do.",
    "It's not a bug – it's an undocumented feature.",
    "Programming is like humor. When you have to explain it, it's bad.",
    "First, solve the problem. Then, write the code.",
    "The most dangerous phrase: 'We've always done it this way.'",
    "A good programmer looks both ways before crossing a one-way street.",
    "Debugging: Being the detective in a crime movie where you're also the murderer.",
    "Real programmers count from 0.",
    "There are only two hard problems in CS: cache invalidation, naming things, and off-by-one errors.",
    "AI won't replace programmers... but programmers who use AI will replace those who don't."
];

function cowsay(message) {
    const lines = message.match(/.{1,55}/g) || [message];
    const maxLen = Math.max(...lines.map(l => l.length));
    const topBorder = ' ' + '_'.repeat(maxLen + 2);
    const bottomBorder = ' ' + '-'.repeat(maxLen + 2);

    let output = `[[;#bd93f9;]${topBorder}]\n`;
    lines.forEach((line, i) => {
        const padding = ' '.repeat(maxLen - line.length);
        if (lines.length === 1) {
            output += `[[;#bd93f9;]<] ${line}${padding} [[;#bd93f9;]>]\n`;
        } else if (i === 0) {
            output += `[[;#bd93f9;]/] ${line}${padding} \\]\n`;
        } else if (i === lines.length - 1) {
            output += `[[;#bd93f9;]\\] ${line}${padding} [[;#bd93f9;]/]\n`;
        } else {
            output += `[[;#bd93f9;]|] ${line}${padding} [[;#bd93f9;]|]\n`;
        }
    });
    output += `[[;#bd93f9;]${bottomBorder}]\n`;
    output += `[[;#bd93f9;]    \\   ^__^\n`;
    output += `[[;#bd93f9;]     \\  (oo)\\_______ \n`;
    output += `[[;#bd93f9;]        (__)\\       )\\/\\ \n`;
    output += `[[;#bd93f9;]            ||----w |\n`;
    output += `[[;#bd93f9;]            ||     ||]\n`;

    return output;
}

function fortune() {
    return FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
}

// ===========================
// CONTENT DATA (Simon's CV)
// ===========================

const CONTENT = {
    about: `
[[;#bd93f9;]┌───────────────────────────────────────────────────────────┐]
[[;#bd93f9;]│]  [[;#c678dd;]SIMON HARTMANN]                                        [[;#bd93f9;]│]
[[;#bd93f9;]│]  [[;#8a8a8a;]Computer Science • AI Research • Innovation]          [[;#bd93f9;]│]
[[;#bd93f9;]└───────────────────────────────────────────────────────────┘]

[[;#e4e4e4;]Hey there! 👋]

I'm Simon - a Computer Science graduate student at TUM specializing in
Data Engineering & Analytics. My journey spans from industrial automation
to cutting-edge AI research.

[[;#bd93f9;]What I do:] Currently working as a Research Engineer at SAP, building
scalable AI systems and exploring the frontier of agentic frameworks and MLOps.

[[;#bd93f9;]What I love:] Innovation, emerging tech, and making machines smarter.
When I'm not coding, you'll find me doing calisthenics, gravel biking, or
obsessing over custom mechanical keyboards.

[[;#bd93f9;]Philosophy:] "Talk is cheap. Show me the code."

[[;#8a8a8a;]Based in Munich, Germany | Open to research opportunities and collaborations]
`,

    experience: [
        {
            role: "Research Engineer",
            company: "SAP SE",
            department: "CTO Research & Innovation",
            location: "Garching, Germany",
            period: "Feb 2026 - Present",
            description: "Engineered scalable Proof-of-Concepts for complex business requirements, managing the full lifecycle from problem discovery to product integration."
        },
        {
            role: "AI Engineer",
            company: "SAP SE",
            department: "AI Center of Excellence",
            location: "Garching, Germany",
            period: "Aug 2025 - Feb 2026",
            description: "Contributed to scalable internal AI framework implementing MLOps and CI/CD features. Developed Agentic proofs-of-concept and conducted comparative research on emerging agent frameworks.",
            // Detailed tasks (commented - uncomment if you want to show)
            details: [
                "Implemented MLOps pipeline for model deployment and monitoring",
                "Built CI/CD automation for AI model testing and validation",
                "Researched and compared LangGraph, CrewAI, and AutoGen frameworks",
                "Developed multi-agent systems for business process automation"
            ]
        },
        {
            role: "Research Engineer Intern",
            company: "Porsche AG",
            department: "PhD Innovation Campus - Automated Driving",
            location: "Weissach, Germany",
            period: "Apr 2024 - Aug 2024",
            description: "Designed and developed simulation application to generate synthetic driving data and validate algorithms. Developed automatic iterative method for generating personalized target speeds for assisted longitudinal driving based on active driver interventions.",
            details: [
                "Built driving simulation framework for ADAS validation",
                "Implemented personalization algorithm for adaptive cruise control",
                "Analyzed naturalistic driving data for behavior patterns",
                "Published research at IEEE ITSC conference"
            ]
        },
        {
            role: "Research Engineer Intern",
            company: "Porsche AG",
            department: "PhD Innovation Campus - Automated Driving",
            location: "Weissach, Germany",
            period: "Jun 2023 - Aug 2023",
            description: "Designed and developed interactive data analysis and annotation application. Preprocessed and analyzed real vehicle bus data.",
            details: [
                "Built interactive dashboard for CAN bus data visualization",
                "Implemented data preprocessing pipeline for vehicle telemetry",
                "Created annotation tools for driving scenario labeling"
            ]
        },
        {
            role: "Software Engineer Intern",
            company: "KARL STORZ SE & Co. KG",
            department: "AI & Software Development OR1",
            location: "Tuttlingen, Germany",
            period: "Jul 2022 - Dec 2022",
            description: "Implemented video classification using OCR to extract relevant class information. Developed video sampling method based on optical flow.",
            details: [
                "Built OCR pipeline for surgical video analysis",
                "Implemented optical flow-based video sampling algorithm",
                "Integrated ML models for surgical procedure classification"
            ]
        }
    ],

    education: [
        {
            degree: "M.Sc. Computer Science",
            major: "Data Engineering & Analytics",
            school: "Technical University of Munich",
            location: "Munich, Germany",
            period: "Oct 2024 - Present",
            gpa: null
        },
        {
            degree: "Study Abroad Semester",
            major: "DAAD PROMOS Scholarship",
            school: "Queen's University",
            location: "Kingston, Canada",
            period: "Jan 2023 - Apr 2023",
            gpa: "4.0/4.0"
        },
        {
            degree: "B.Sc. Computer Science",
            major: "Autonomous Systems & Robotics",
            school: "Furtwangen University",
            location: "Furtwangen, Germany",
            period: "Oct 2020 - Feb 2024",
            gpa: "3.7/4.0"
        },
        {
            degree: "Industrial Clerk Apprenticeship",
            major: "International Business & English",
            school: "CHIRON Group SE",
            location: "Tuttlingen, Germany",
            period: "Sep 2017 - Jul 2020",
            gpa: null
        }
    ],

    projects: [
        {
            name: "Adaptive Multi-Agent Governance System",
            organization: "TUM x SAP Seminar",
            period: "Apr 2025 - Aug 2025",
            description: "Developed Multi-Agent System for financial processes with central orchestration layer to translate corporate KPIs into synchronized agent instructions, utilizing iterative feedback loops for autonomous strategy refinement.",
            tech: "Python, LangGraph, FastAPI, Multi-Agent Systems",
            github: "https://github.com/hartmann-simon/agentic-finance",
            paper: null
        },
        {
            name: "Smart Search Gallery",
            organization: "TUM Practical Course → Personal Project",
            period: "Apr 2025 - Jul 2025",
            description: "Developed two-stage multimodal semantic search engine for local media, balancing retrieval speed and accuracy using embedding models and vector databases.",
            tech: "Python, CLIP, FAISS, React, TypeScript",
            github: "https://github.com/hartmann-simon/smart-search-gallery",
            paper: null
        },
        {
            name: "Bachelor Thesis: Grid-based Trajectory Prediction",
            organization: "Furtwangen University x Porsche AG",
            period: "Sep 2023 - Feb 2024",
            description: "Engineered modular grid-based spatial scenario representation for vehicle motion forecasting. Developed robust data pipeline transforming real-world vehicle telemetry into structured representation. Architected hybrid CNN-LSTM neural network for trajectory prediction.",
            tech: "Python, PyTorch, CNN, LSTM, Data Engineering",
            github: null,
            paper: null
        }
    ],

    research: [
        {
            type: "Publication",
            title: "Adjustment of an Assisted Driving Function based on Driver-Initiated Takeovers",
            venue: "IEEE ITSC 2024",
            organization: "Porsche AG",
            date: "Sep 2024",
            doi: "10.1109/ITSC58415.2024.10919556",
            description: "Developed methodology to derive optimization potentials by analyzing human intervention behavior during ADAS operation. Evaluated adaptation strategies demonstrating drivers require location-specific behavioral adjustments.",
            link: "https://ieeexplore.ieee.org/abstract/document/10919556"
        }
    ],

    skills: {
        languages: ["Python", "C++", "Java", "SQL", "Bash/Shell", "JavaScript/TypeScript"],
        frameworks: ["PyTorch", "LangGraph", "FastAPI", "Spark", "React", "Next.js"],
        tools: ["Linux", "Docker", "Git", "CI/CD", "Kubernetes"],
        domains: ["Machine Learning", "MLOps", "Multi-Agent Systems", "Computer Vision", "NLP", "Data Engineering"],
        interests: ["AI Research", "Innovation & Emerging Tech", "ADAS", "Autonomous Systems"]
    },

    patents: [
        "DE102024135042A1",
        "DE102024137879A1",
        "DE102025100751A1"
    ]
};

// ===========================
// HTML FORMATTING FUNCTIONS (for Content Viewer)
// ===========================

function formatAboutHTML() {
    return `
        <h1>About Simon Hartmann</h1>
        <p><strong>Computer Science • AI Research • Innovation</strong></p>

        <p>Hey there! 👋</p>

        <p>I'm Simon - a Computer Science graduate student at TUM specializing in
        Data Engineering & Analytics. My journey spans from industrial automation
        to cutting-edge AI research.</p>

        <p><strong>What I do:</strong> Currently working as a Research Engineer at SAP, building
        scalable AI systems and exploring the frontier of agentic frameworks and MLOps.</p>

        <p><strong>What I love:</strong> Innovation, emerging tech, and making machines smarter.</p>
    `;
}

function formatExperienceHTML() {
    let html = '<h1>Work Experience</h1>';

    CONTENT.experience.forEach(job => {
        html += `
            <div class="job-card">
                <div class="card-title">${job.role}</div>
                <div class="card-subtitle">${job.company} • ${job.department}</div>
                <div class="card-date">${job.period} | ${job.location}</div>
                <p>${job.description}</p>
            </div>
        `;
    });

    return html;
}

function formatEducationHTML() {
    let html = '<h1>Education</h1>';

    CONTENT.education.forEach(edu => {
        html += `
            <div class="edu-card">
                <div class="card-title">${edu.degree}</div>
                <div class="card-subtitle">${edu.institution}</div>
                <div class="card-date">${edu.period} | ${edu.location}</div>
                ${edu.focus ? `<p><strong>Focus:</strong> ${edu.focus}</p>` : ''}
                ${edu.thesis ? `<p><strong>Thesis:</strong> ${edu.thesis}</p>` : ''}
            </div>
        `;
    });

    return html;
}

function formatSkillsHTML() {
    let html = '<h1>Technical Skills</h1>';

    html += '<h2>Programming Languages</h2><ul>';
    CONTENT.skills.languages.forEach(lang => html += `<li>${lang}</li>`);
    html += '</ul>';

    html += '<h2>AI/ML & Data</h2><ul>';
    CONTENT.skills.aiml.forEach(skill => html += `<li>${skill}</li>`);
    html += '</ul>';

    html += '<h2>Cloud & DevOps</h2><ul>';
    CONTENT.skills.cloud.forEach(skill => html += `<li>${skill}</li>`);
    html += '</ul>';

    html += '<h2>Tools & Frameworks</h2><ul>';
    CONTENT.skills.tools.forEach(tool => html += `<li>${tool}</li>`);
    html += '</ul>';

    return html;
}

function formatProjectsHTML() {
    let html = '<h1>Academic Projects</h1>';

    CONTENT.projects.forEach(project => {
        html += `
            <div class="project-card">
                <div class="card-title">${project.name}</div>
                <div class="card-subtitle">${project.course}</div>
                <p>${project.description}</p>
                ${project.tech ? `<p><em>Technologies: ${project.tech}</em></p>` : ''}
            </div>
        `;
    });

    return html;
}

function formatResearchHTML() {
    let html = '<h1>Research & Publications</h1>';

    if (CONTENT.publications && CONTENT.publications.length > 0) {
        html += '<h2>Publications</h2><ul>';
        CONTENT.publications.forEach(pub => html += `<li>${pub}</li>`);
        html += '</ul>';
    }

    if (CONTENT.patents && CONTENT.patents.length > 0) {
        html += '<h2>Patents</h2><ul>';
        CONTENT.patents.forEach(patent => html += `<li>${patent}</li>`);
        html += '</ul>';
    }

    return html;
}

// ===========================
// FORMATTING FUNCTIONS (for Terminal)
// ===========================

function formatAbout() {
    return CONTENT.about;
}

function formatExperience(showDetails = false) {
    let output = `\n[[;#bd93f9;]━━━ WORK EXPERIENCE ━━━]\n\n`;

    CONTENT.experience.forEach((job, index) => {
        output += `[[;#c678dd;]▸] [[;#61afef;]${job.role}]\n`;
        output += `  [[;#98c379;]${job.company}] [[;#8a8a8a;]• ${job.department}]\n`;
        output += `  [[;#8a8a8a;]${job.period} | ${job.location}]\n\n`;
        output += `  ${job.description}\n`;

        // Uncomment to show detailed tasks
        // if (showDetails && job.details) {
        //     output += `\n  [[;#8a8a8a;]Key contributions:]\n`;
        //     job.details.forEach(detail => {
        //         output += `  [[;#bd93f9;]•] ${detail}\n`;
        //     });
        // }

        output += `\n`;
    });

    output += `[[;#8a8a8a;]💡 Tip: Type 'experience --details' to see detailed tasks (if enabled)]\n`;
    return output;
}

function formatEducation() {
    let output = `\n[[;#bd93f9;]━━━ EDUCATION ━━━]\n\n`;

    CONTENT.education.forEach((edu, index) => {
        output += `[[;#c678dd;]▸] [[;#61afef;]${edu.degree}]\n`;
        if (edu.major) {
            output += `  [[;#8a8a8a;]${edu.major}]\n`;
        }
        output += `  [[;#98c379;]${edu.school}]\n`;
        output += `  [[;#8a8a8a;]${edu.period} | ${edu.location}]\n`;
        if (edu.gpa) {
            output += `  [[;#bd93f9;]GPA:] ${edu.gpa}\n`;
        }
        output += `\n`;
    });

    return output;
}

function formatSkills() {
    let output = `\n[[;#bd93f9;]━━━ TECHNICAL SKILLS ━━━]\n\n`;

    output += `[[;#c678dd;]Languages:]\n`;
    CONTENT.skills.languages.forEach(lang => {
        output += `  [[;#bd93f9;]▸] ${lang}\n`;
    });

    output += `\n[[;#c678dd;]Frameworks & Libraries:]\n`;
    CONTENT.skills.frameworks.forEach(fw => {
        output += `  [[;#bd93f9;]▸] ${fw}\n`;
    });

    output += `\n[[;#c678dd;]Tools & Technologies:]\n`;
    CONTENT.skills.tools.forEach(tool => {
        output += `  [[;#bd93f9;]▸] ${tool}\n`;
    });

    output += `\n[[;#c678dd;]Domains & Specializations:]\n`;
    CONTENT.skills.domains.forEach(domain => {
        output += `  [[;#bd93f9;]▸] ${domain}\n`;
    });

    output += `\n[[;#c678dd;]Research Interests:]\n`;
    CONTENT.skills.interests.forEach(interest => {
        output += `  [[;#bd93f9;]▸] ${interest}\n`;
    });

    output += `\n[[;#8a8a8a;]Languages: German (Native), English (C1)]\n`;

    return output;
}

function formatProjects() {
    let output = `\n[[;#bd93f9;]━━━ ACADEMIC PROJECTS & RESEARCH ━━━]\n\n`;

    CONTENT.projects.forEach((project, index) => {
        output += `[[;#c678dd;]${index + 1}.] [[;#61afef;]${project.name}]\n`;
        output += `   [[;#8a8a8a;]${project.organization} • ${project.period}]\n\n`;
        output += `   ${project.description}\n\n`;
        output += `   [[;#8a8a8a;]Tech:] ${project.tech}\n`;

        if (project.github) {
            output += `   [[;#56b6c2;]GitHub:] [[!;;;;]${project.github}]\n`;
        }
        output += `\n`;
    });

    return output;
}

function formatResearch() {
    let output = `\n[[;#bd93f9;]━━━ PUBLICATIONS ━━━]\n\n`;

    CONTENT.research.forEach((item, index) => {
        output += `[[;#c678dd;]▸] [[;#61afef;]${item.title}]\n`;
        output += `  [[;#98c379;]${item.venue}] [[;#8a8a8a;]• ${item.date}]\n`;
        output += `  [[;#8a8a8a;]${item.organization}]\n\n`;
        output += `  ${item.description}\n\n`;
        output += `  [[;#8a8a8a;]DOI:] [[!;;;;]${item.link}]\n\n`;
    });

    output += `\n[[;#bd93f9;]━━━ PATENTS ━━━]\n\n`;
    CONTENT.patents.forEach(patent => {
        output += `[[;#bd93f9;]▸] ${patent}\n`;
    });
    output += `\n`;

    return output;
}

function formatHelp() {
    const helpText = `
[[;#bd93f9;]━━━ AVAILABLE COMMANDS ━━━]

[[;#c678dd;]Navigation:]
  [[;#61afef;]cd <dir>]   Change directory (e.g., cd projects/)
  [[;#61afef;]ls]         List directory contents (horizontal)
  [[;#61afef;]l]          Detailed list with hidden files (ls -la)
  [[;#61afef;]ll]         Detailed list without hidden files (ls -l)
  [[;#61afef;]pwd]        Print working directory
  [[;#61afef;]cat <dir>]  Display content of directory

[[;#c678dd;]Content:]
  [[;#61afef;]about]      Learn about Simon
  [[;#61afef;]experience] View work experience
  [[;#61afef;]education]  View education background
  [[;#61afef;]skills]     See technical skills
  [[;#61afef;]projects]   Browse academic projects
  [[;#61afef;]research]   View publications & patents

[[;#c678dd;]Actions:]
  [[;#61afef;]clear]      Clear terminal screen
  [[;#61afef;]help]       Show this help message

[[;#c678dd;]Easter Eggs:]
  [[;#61afef;]coffee]     Brew some virtual coffee
  [[;#61afef;]fortune]    Get a random tech quote
  [[;#61afef;]cowsay]     Make the cow speak
  [[;#61afef;]whoami]     Identity check
  [[;#61afef;]sudo]       Try to get root access
  [[;#61afef;]hack]       Initiate "hacking" sequence
  [[;#61afef;]vim]        Just kidding...

[[;#8a8a8a;]💡 Pro tips:]
  • Use TAB for autocomplete
  • Use ↑/↓ for command history
  • Navigate like a real terminal with cd, ls, pwd
  • Connect with Simon on LinkedIn (link in footer)
`;

    return cowsay(fortune()) + '\n' + helpText;
}

// ===========================
// DIRECTORY NAVIGATION
// ===========================

function changeDirectory(path, term) {
    if (!path) {
        currentDirectory = '~';
        term.set_prompt(getPrompt());
        return '';
    }

    if (path === '..' || path === '../') {
        if (currentDirectory === '~') {
            return '[[;#e06c75;]Already at home directory]';
        }
        const parts = currentDirectory.split('/');
        parts.pop();
        currentDirectory = parts.join('/') || '~';
        term.set_prompt(getPrompt());
        return '';
    }

    // Normalize path
    let targetPath = path.startsWith('~/') ? path : `${currentDirectory}/${path}`.replace('//', '/');
    targetPath = targetPath.replace(/\/$/, ''); // Remove trailing slash

    if (!DIRECTORIES[targetPath]) {
        return `[[;#e06c75;]cd: no such directory:] ${path}\n[[;#8a8a8a;]Hint: Use 'ls' to see available directories]`;
    }

    currentDirectory = targetPath;
    term.set_prompt(getPrompt());
    return '';
}

function listDirectory(format = 'simple') {
    const files = FILES[currentDirectory];
    const contents = files || [];

    if (!contents || contents.length === 0) {
        return '\n[[;#8a8a8a;]Empty directory]\n';
    }

    // ls - simple horizontal list (like real Unix)
    if (format === 'simple') {
        let output = '';
        contents.forEach((item, i) => {
            output += `[[;#e4e4e4;]${item}]`;
            if (i < contents.length - 1) output += '    '; // 4 spaces between items
        });
        return output + '\n';
    }

    // l (la) - detailed list with hidden files (ls -la)
    if (format === 'all') {
        let output = 'total ' + (contents.length * 8) + '\n';
        output += `[[;#56b6c2;]drwxr-xr-x  ${contents.length + 2} simon  staff  ${(contents.length + 2) * 32}B  ./]\n`;
        output += `[[;#56b6c2;]drwxr-xr-x  7 simon  staff  224B  ../]\n`;
        output += `[[;#8a8a8a;]drwxr-xr-x  3 simon  staff   96B  .git/]\n`;
        contents.forEach(item => {
            const size = Math.floor(Math.random() * 50) + 10; // Random size 10-60KB
            output += `[[;#8a8a8a;]-rw-r--r--  1 simon  staff]  [[;#e4e4e4;]${size}K  ${item}]\n`;
        });
        return output + '\n';
    }

    // ll - long format WITHOUT hidden files (ls -l)
    if (format === 'long') {
        let output = 'total ' + (contents.length * 8) + '\n';
        contents.forEach(item => {
            const size = Math.floor(Math.random() * 50) + 10;
            output += `[[;#8a8a8a;]-rw-r--r--  1 simon  staff]  [[;#e4e4e4;]${size}K  ${item}]\n`;
        });
        return output + '\n';
    }

    // Default
    return listDirectory('simple');
}

function catFile(filename) {
    if (!filename) {
        return `[[;#e06c75;]cat: missing filename]\n[[;#8a8a8a;]Usage: cat <filename>]`;
    }

    // Normalize filename (remove .txt if not provided, add if missing)
    let file = filename;
    if (!file.endsWith('.txt')) {
        file = file + '.txt';
    }

    // Check if file exists
    const files = FILES[currentDirectory] || [];
    if (!files.includes(file)) {
        return `[[;#e06c75;]cat: ${filename}: No such file or directory]`;
    }

    // Map files to their display functions
    const fileMap = {
        'about.txt': { html: formatAboutHTML, title: 'About' },
        'experience.txt': { html: formatExperienceHTML, title: 'Work Experience' },
        'education.txt': { html: formatEducationHTML, title: 'Education' },
        'skills.txt': { html: formatSkillsHTML, title: 'Technical Skills' },
        'projects.txt': { html: formatProjectsHTML, title: 'Projects' },
        'research.txt': { html: formatResearchHTML, title: 'Research' }
    };

    const fileInfo = fileMap[file];
    if (fileInfo) {
        displayInViewer(fileInfo.html(), fileInfo.title);
        return `[[;#98c379;]✓ Displaying ${file} in viewer →]`;
    }

    return `[[;#e06c75;]cat: ${filename}: No such file or directory]`;
}

// ===========================
// EASTER EGGS
// ===========================

const EASTER_EGGS = {
    coffee: () => `
[[;#c678dd;]☕ Brewing coffee...]
[[;#8a8a8a;]▓▓▓▓▓▓▓▓▓▓] 100%
[[;#98c379;]✓ Coffee ready! Productivity +50%, bugs -20%]
`,

    sudo: (cmd) => {
        if (cmd) {
            return `[[;#e06c75;]sudo: ${cmd}: Permission denied]\n[[;#8a8a8a;]Nice try, but you're not getting root here 😏]`;
        }
        return `[[;#e06c75;]sudo: no command specified]\n[[;#8a8a8a;]This isn't a real system, friend]`;
    },

    whoami: () => `[[;#61afef;]simon]@[[;#c678dd;]portfolio]\n[[;#8a8a8a;]You're exploring Simon's terminal portfolio. Welcome!]`,

    pwd: () => `[[;#98c379;]${currentDirectory}]`,

    hack: () => `
[[;#98c379;]Initiating hack sequence...]
[[;#8a8a8a;]▓▓▓▓▓░░░░░] 40%
[[;#e06c75;]ACCESS DENIED]
[[;#8a8a8a;]Just kidding. I build AI systems, not backdoors 😉]
`,

    vim: () => `[[;#98c379;]Starting vim...]\n[[;#8a8a8a;]Psych! Try 'contact' for a clean contact form.]`,

    exit: () => `[[;#8a8a8a;]There's no escape from here... but you can close the tab 🙃]`,

    fortune: fortune,

    cowsay: (msg) => {
        if (!msg) msg = fortune();
        return cowsay(msg);
    }
};

// ===========================
// TERMINAL INITIALIZATION
// ===========================

const GREETINGS = cowsay(fortune()) + `
[[;#61afef;]┌───────────────────────────────────────────────────────────┐]
[[;#61afef;]│]  [[;#c678dd;]Welcome to Simon Hartmann's Terminal Portfolio]        [[;#61afef;]│]
[[;#61afef;]│]  [[;#8a8a8a;]Type] [[;#bd93f9;]help] [[;#8a8a8a;]to see available commands]                  [[;#61afef;]│]
[[;#61afef;]│]  [[;#8a8a8a;]Navigate with] [[;#bd93f9;]cd][[;#8a8a8a;],] [[;#bd93f9;]ls][[;#8a8a8a;],] [[;#bd93f9;]cat] [[;#8a8a8a;]like a real terminal]       [[;#61afef;]│]
[[;#61afef;]└───────────────────────────────────────────────────────────┘]

`;

$(document).ready(function() {
    const term = $('#terminal').terminal(function(command, term) {
        const parts = command.trim().split(' ');
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1).join(' ');

        // REGULAR COMMANDS
        switch(cmd) {
            // Navigation
            case 'cd':
                return changeDirectory(args, term);
            case 'ls':
                return listDirectory('simple');
            case 'l':
                return listDirectory('all'); // ls -la with hidden files
            case 'll':
                return listDirectory('long'); // ls -l without hidden files
            case 'la':
            case 'ls -la':
                return listDirectory('all');
            case '..':
                return changeDirectory('..', term);
            case 'pwd':
                return `[[;#98c379;]${currentDirectory}]`;
            case 'cat':
                return catFile(args);

            // Content commands (shortcuts - work from anywhere)
            case 'about':
                return catFile('about.txt');
            case 'experience':
                return catFile('experience.txt');
            case 'education':
                return catFile('education.txt');
            case 'skills':
            case 'tech':
                return catFile('skills.txt');
            case 'projects':
                return catFile('projects.txt');
            case 'research':
            case 'publications':
                return catFile('research.txt');

            // Actions
            case 'help':
                return formatHelp();
            case 'clear':
                term.clear();
                return '';

            // Easter eggs
            case 'coffee':
                return EASTER_EGGS.coffee();
            case 'sudo':
                return EASTER_EGGS.sudo(args);
            case 'whoami':
                return EASTER_EGGS.whoami();
            case 'hack':
                return EASTER_EGGS.hack();
            case 'vim':
                return EASTER_EGGS.vim();
            case 'exit':
                return EASTER_EGGS.exit();
            case 'fortune':
                return cowsay(EASTER_EGGS.fortune());
            case 'cowsay':
                return EASTER_EGGS.cowsay(args);

            default:
                return `[[;#e06c75;]Command not found:] ${cmd}\n[[;#8a8a8a;]Type] [[;#bd93f9;]'help'] [[;#8a8a8a;]to see available commands]`;
        }
    }, {
        greetings: GREETINGS,
        prompt: getPrompt(),
        checkArity: false,
        completion: function(string, callback) {
            // Available commands
            const commands = [
                'help', 'about', 'experience', 'education', 'skills', 'tech',
                'projects', 'research', 'publications', 'clear',
                'cd', 'ls', 'l', 'll', 'la', 'pwd', 'cat', '..',
                'coffee', 'fortune', 'cowsay', 'whoami', 'sudo', 'hack', 'vim', 'exit'
            ];

            // Add files from current directory
            if (currentDirectory === '~' && FILES['~']) {
                commands.push(...FILES['~']);
            }

            callback(commands.filter(cmd => cmd.startsWith(string)));
        },
        onInit: function(term) {
            term.css({
                'font-size': '14px',
                'line-height': '1.5'
            });
        }
    });

    // Update terminal title with current directory
    term.on('prompt', function() {
        $('.terminal-title').text(`simon@portfolio: ${currentDirectory}`);
    });
});
