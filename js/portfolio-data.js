/**
 * portfolio-data.js
 * Centralized data source for Aksh Kumar's developer portfolio.
 * 
 * TO UPDATE OR ADD NEW INFORMATION:
 * - Add new skills to the `skillsData` object under the appropriate category.
 * - Add new projects to the `projectsData` array with image path and verified links.
 * - Update contact details or workshops in `personalInfo` or `workshopsData`.
 */

const portfolioData = {
  personalInfo: {
    name: "Aksh Kumar",
    tagline: "BCA Student | Aspiring Software & Web Developer",
    college: "B.N. College, Patna University, Patna",
    degree: "Bachelor of Computer Applications (BCA)",
    graduationYear: "2025–2028 (Expected)",
    email: "kitkat99344@gmail.com",
    phone: "+91-6202382288",
    location: "Patna, Bihar, India",
    summary: "BCA student at Patna University’s B.N. College with foundational skills in C, Java, Python, HTML, CSS, and JavaScript. Building practical projects to strengthen programming and front-end development skills. Familiar with using Google Antigravity IDE as a development tool, alongside Git and GitHub for project work.",
    socials: {
      github: "https://github.com/akshhack991-beep",
      linkedin: "https://www.linkedin.com/in/aksh-kumar-370840359/",
      emailMailto: "mailto:kitkat99344@gmail.com",
      phoneTel: "tel:+916202382288"
    },
    resumePdf: "assets/documents/Aksh_Kumar_Resume.pdf",
    brandHandle: "kitkat99344"
  },

  skillsData: [
    {
      category: "Programming Languages",
      id: "programming",
      icon: "code",
      description: "Core computer science fundamentals, procedural & object-oriented programming.",
      skills: [
        { name: "C", badge: "Core Language", notes: "Structured programming, pointers & memory concepts" },
        { name: "Java", badge: "OOP", notes: "Object-oriented architecture & application basics" },
        { name: "Python", badge: "Scripting & CLI", notes: "Scripting, terminal utilities, logic & automation" }
      ]
    },
    {
      category: "Web Technologies",
      id: "web-development",
      icon: "globe",
      description: "Front-end structure, responsive styling, interactive scripting, and web frameworks.",
      skills: [
        { name: "HTML5", badge: "Markup", notes: "Semantic document structure & modern layout standards" },
        { name: "Vanilla CSS3", badge: "Styling", notes: "Flexbox, CSS Grid, media queries & custom animations" },
        { name: "JavaScript", badge: "Interaction", notes: "DOM manipulation, events, client-side logic" },
        { name: "Django", badge: "Web Framework", notes: "Python web framework fundamentals & project setup" }
      ]
    },
    {
      category: "Development Tools & IDEs",
      id: "tools",
      icon: "tool",
      description: "Version control systems, repositories, and modern development environments.",
      skills: [
        { name: "Git", badge: "Version Control", notes: "Local commit management, branching & versioning" },
        { name: "GitHub", badge: "Collaboration", notes: "Remote repositories, GitHub Pages & code sharing" },
        { name: "Google Antigravity IDE", badge: "IDE Environment", notes: "Basic familiarity with AI-assisted developer workflows" }
      ]
    },
    {
      category: "Productivity Tools",
      id: "productivity",
      icon: "file-text",
      description: "Essential documentation, tabular analysis, slide presentations, and digital illustration tools.",
      skills: [
        { name: "MS Word", badge: "Documentation", notes: "Technical write-ups, academic reports & formatting" },
        { name: "MS Excel", badge: "Data & Tables", notes: "Data organization, spreadsheets & basic formulas" },
        { name: "MS PowerPoint (PPT)", badge: "Presentations", notes: "Technical slide decks, academic seminars & presentations" },
        { name: "Paint", badge: "Visuals", notes: "Quick image crops, diagram edits & asset preparation" }
      ]
    }
  ],

  projectsData: [
    {
      id: "myntra-clone",
      title: "Myntra Clone",
      category: "web",
      categoryLabel: "Front-End E-Commerce",
      tagline: "E-Commerce User Interface Replica",
      description: "Created a front-end e-commerce interface inspired by Myntra, focusing on responsive page layout, structured product catalogs, promotional banners, and clean user navigation.",
      image: "assets/images/project-myntra.png",
      technologies: ["HTML5", "Vanilla CSS", "Responsive Design", "UI Layout"],
      liveUrl: "https://kitkat99344.github.io/myntra-clone/",
      githubUrl: "https://github.com/akshhack991-beep",
      isLiveDemo: true,
      features: [
        "Faithful recreation of Myntra navigation header and search bar layout",
        "Responsive category cards and promotional sales showcase",
        "Structured CSS Grid and Flexbox alignment for product grids",
        "Clean mobile-friendly layout and hover visual states"
      ]
    },
    {
      id: "todo-list",
      title: "To-Do List Application",
      category: "web",
      categoryLabel: "Browser Web Application",
      tagline: "Interactive Task & Time Tracker",
      description: "Built a browser-based task list to add, update, organize, and track daily activities with dates, timestamps, and interactive task deletion.",
      image: "assets/images/project-todo.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
      liveUrl: "https://akshkumar3156-art.github.io/ToDoList/",
      githubUrl: "https://github.com/akshhack991-beep",
      isLiveDemo: true,
      features: [
        "Dynamic task input with specific due date and time pickers",
        "Interactive task deletion and list state updates via JavaScript",
        "Clean, user-centric tabular layout for academic and personal deadlines",
        "Instant DOM updates without page reload"
      ]
    },
    {
      id: "weather-cli",
      title: "Weather CLI Project",
      category: "cli",
      categoryLabel: "Terminal Utility / Python",
      tagline: "Command-Line Weather Inspector",
      description: "Developed a command-line weather project as part of programming practice. Allows terminal users to query any city name and inspect live meteorological statistics.",
      image: "assets/images/project-weather.png",
      technologies: ["Python", "CLI", "Weather API", "Terminal Interface"],
      liveUrl: null, // As specified: Weather CLI does NOT have a web live demo
      githubUrl: "https://github.com/akshhack991-beep/learning_projects",
      isLiveDemo: false,
      features: [
        "Direct terminal user input for city name query (e.g., Gaya)",
        "Parses meteorological data: sky conditions, temperature (K), wind speed, and humidity",
        "Clean text-based formatted CLI output in the PowerShell/terminal environment",
        "Demonstrates Python programming, logic control, and data presentation"
      ]
    }
  ],

  workshopsData: [
    {
      title: "Cybersecurity Network Analyst Workshop",
      organization: "National Institute of Electronics & Information Technology (NIELIT)",
      venue: "Conducted at B.N. College, Patna University",
      focus: "Network security foundations, threat analysis principles, network monitoring concepts, and modern cybersecurity protocols."
    },
    {
      title: "Robotics Workshop",
      organization: "B.N. College Workshop Series",
      venue: "Conducted at B.N. College, Patna University",
      focus: "Hardware-software integration, basic microcontroller logic, sensor input handling, and automated physical robotics mechanisms."
    }
  ],

  educationData: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Patna University, B.N. College, Patna",
    duration: "2025–2028",
    status: "Pursuing (Expected 2028)",
    timeline: [
      {
        level: "Bachelor of Computer Applications (BCA)",
        institution: "Patna University, B.N. College, Patna",
        duration: "2025–2028",
        status: "Pursuing",
        score: "Expected 2028",
        board: "Patna University",
        details: "Undergraduate degree program focusing on software development, algorithms, C, Java, Python, databases, and web technologies."
      },
      {
        level: "Class XII (Senior Secondary — Commerce with Mathematics)",
        stream: "Commerce with Mathematics",
        institution: "DAV Public School",
        board: "CBSE",
        duration: "Completed",
        status: "Completed",
        score: "88%",
        details: "Senior Secondary education in Commerce with Mathematics (88% aggregate), building strong quantitative reasoning, analytical problem-solving, and computational logic."
      },
      {
        level: "Class X (Secondary School)",
        institution: "Saraswati Vidya Mandir",
        board: "CBSE",
        duration: "Completed",
        status: "Distinction",
        score: "93%",
        details: "Achieved academic distinction (93% aggregate) under CBSE board, establishing disciplined problem-solving and mathematics skills."
      }
    ],
    highlights: [
      "Core coursework in C, Java, Computer Architecture, Data Structures, and Database Management.",
      "Practical software labs and web technology exploration.",
      "Active participation in campus technical workshops (NIELIT Cybersecurity & Robotics)."
    ]
  }
};

// Export for module systems or attach to window for vanilla browsers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
} else {
  window.portfolioData = portfolioData;
}
