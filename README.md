# Aksh Kumar — Developer Portfolio Website

A modern, high-performance, responsive multi-page personal developer portfolio built for **Aksh Kumar** (BCA Student at Patna University's B.N. College, Aspiring Software & Web Developer).

Built strictly using **HTML5, Vanilla CSS3, and Vanilla JavaScript (ES6+)**. No external UI frameworks or complex build steps required. Suitable for standard local hosting and **GitHub Pages**.

---

## 📁 Project Directory Structure

```text
akshportfolio/
├── index.html                   # Homepage (Hero, About preview, Featured projects, Skills preview, CTA)
├── about.html                   # About Me (Background, BCA education at Patna University, Workshops, Goals)
├── projects.html                # Projects Showcase (Myntra Clone, To-Do List, Weather CLI, Filter tabs)
├── skills.html                  # Technical Skills (Programming, Web Technologies, Tools, Productivity)
├── resume.html                  # Online CV & PDF Download / Print View
├── contact.html                 # Contact details, verified social links & validated message form
├── css/
│   └── style.css                # Master stylesheet (Design system tokens, dark/light themes, animations)
├── js/
│   ├── portfolio-data.js        # Centralized data store for skills, projects, and bio for quick updates
│   └── script.js                # Interactive logic (Theme toggle, mobile drawer, form validation, etc.)
├── assets/
│   ├── images/
│   │   ├── aksh-profile.png     # Aksh Kumar workstation profile photograph
│   │   ├── kitkat-logo.png      # Portfolio emblem / KitKat brand mark
│   │   ├── project-myntra.png   # Myntra Clone project showcase screenshot
│   │   ├── project-todo.png     # To-Do List App project showcase screenshot
│   │   └── project-weather.png  # Weather CLI Terminal project showcase screenshot
│   └── documents/
│       └── Aksh_Kumar_Resume.pdf# Downloadable resume document
└── README.md                    # Maintenance, update, and deployment documentation
```

---

## 🚀 How to Run the Website Locally

You can run and test the website on your local machine using any of the methods below:

### Method 1: Using Python's Built-in HTTP Server (Recommended)
Open PowerShell or your terminal inside the project root (`k:\akshportfolio`) and run:
```bash
python -m http.server 8000
```
Then open your browser and navigate to:
```text
http://localhost:8000
```

### Method 2: Direct Browser Viewing
Double-click `index.html` (or right-click -> Open with Chrome / Edge / Firefox). All links use standard relative paths and will navigate seamlessly.

---

## 🛠️ Future Maintenance & Updates Guide

The website is intentionally architected to grow alongside your BCA studies and new projects without needing to be redesigned from scratch.

### 1. How to Add a New Skill
1. Open `js/portfolio-data.js`.
2. Locate `skillsData` and select the appropriate category (e.g., `Programming Languages`, `Web Technologies`, or create a new category object).
3. Add your new skill object:
   ```javascript
   { name: "C++", badge: "Data Structures", notes: "Pointers, STL, and algorithmic problem solving" }
   ```
4. Open `skills.html` and add a corresponding row within the chosen `<div class="skills-list">` container:
   ```html
   <div class="skill-item-row">
     <div class="skill-name-wrap">
       <span class="skill-name">C++</span>
       <span class="skill-notes">Pointers, STL, and algorithmic problem solving</span>
     </div>
     <span class="skill-badge">Data Structures</span>
   </div>
   ```

### 2. How to Add a New Project
1. Place the project screenshot inside `assets/images/project-[project-name].png`.
2. Open `js/portfolio-data.js` and add your project to the `projectsData` array:
   ```javascript
   {
     id: "project-name",
     title: "Project Title",
     category: "web", // "web" or "cli"
     categoryLabel: "Category Label",
     tagline: "Short Catchy Tagline",
     description: "Clear description of the problem solved and architecture.",
     image: "assets/images/project-[project-name].png",
     technologies: ["Tech 1", "Tech 2"],
     liveUrl: "https://your-live-demo.com",
     githubUrl: "https://github.com/akshhack991-beep/your-repo",
     isLiveDemo: true,
     features: ["Feature 1", "Feature 2"]
   }
   ```
3. Open `projects.html` and duplicate one of the `<article class="project-card" data-category="...">` blocks inside `#projectsGrid`, filling in the new details.

### 3. How to Replace or Update Images
- **Profile Photo:** Replace `assets/images/aksh-profile.png` with your new photo keeping the same filename (or update the `src` attribute in `index.html` and `about.html`).
- **Brand Logo:** Replace `assets/images/kitkat-logo.png`.
- **Project Screenshots:** Replace `assets/images/project-myntra.png`, `assets/images/project-todo.png`, or `assets/images/project-weather.png`.

### 4. How to Update Your Resume PDF
1. Save your updated resume PDF to:
   ```text
   assets/documents/Aksh_Kumar_Resume.pdf
   ```
2. If you change the filename, update the `href` and `download` attributes in:
   - `index.html`
   - `about.html`
   - `projects.html`
   - `skills.html`
   - `resume.html`
   - `contact.html`

### 5. How to Update Contact Details or Social Links
Update the email, phone number, LinkedIn, or GitHub URLs in:
1. `js/portfolio-data.js` under `portfolioData.personalInfo`.
2. The footer of each HTML file (`index.html`, `about.html`, `projects.html`, `skills.html`, `resume.html`, `contact.html`).
3. The contact cards on `contact.html` and `resume.html`.

---

## 🌐 How to Publish on GitHub Pages

1. **Initialize Git & Commit (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Complete multi-page portfolio website for Aksh Kumar"
   ```

2. **Create a GitHub Repository:**
   - Go to [GitHub](https://github.com) and create a new public repository named `portfolio` (or `akshhack991-beep.github.io`).

3. **Push Your Code:**
   ```bash
   git remote add origin https://github.com/akshhack991-beep/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub: **Settings** -> **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select the `main` branch and `/ (root)` folder, then click **Save**.
   - Within 1–2 minutes, your website will be live at:
     ```text
     https://akshhack991-beep.github.io/portfolio/
     ```

---

## 🔒 Source of Truth & Authenticity Notice

All skills, education dates, workshops, and project specifications in this codebase are strictly derived from Aksh Kumar's official resume and verified repository links:
- **Higher Education:** BCA, Patna University, B.N. College (2025–2028 Pursuing)
- **Class XII (Senior Secondary):** DAV Public School, CBSE Board — Commerce with Mathematics (88%)
- **Class X (Secondary School):** Saraswati Vidya Mandir, CBSE Board (93% Distinction)
- **Email:** kitkat99344@gmail.com
- **Phone:** +91-6202382288
- **GitHub:** [https://github.com/akshhack991-beep](https://github.com/akshhack991-beep)
- **LinkedIn:** [https://www.linkedin.com/in/aksh-kumar-370840359/](https://www.linkedin.com/in/aksh-kumar-370840359/)
- **Myntra Clone Live Demo:** [https://kitkat99344.github.io/myntra-clone/](https://kitkat99344.github.io/myntra-clone/)
- **To-Do List Live Demo:** [https://akshhack991-beep.github.io/ToDoList/](https://akshhack991-beep.github.io/ToDoList/)
- **Weather CLI Repository:** [https://github.com/akshhack991-beep/learning_projects](https://github.com/akshhack991-beep/learning_projects)
