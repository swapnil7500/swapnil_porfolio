# Swapnil Gupta | Recruiter-Focused Personal Portfolio

A modern, premium, and highly responsive personal portfolio website designed to showcase full-stack development capabilities, algorithmic problem-solving milestones, and professional credentials. Designed specifically to make a strong impression on recruiters, hiring managers, and internship coordinators.

Live Development Demo: [http://localhost:5173/](http://localhost:5173/)

## 🚀 Key Features

*   **Glassmorphic Aesthetic**: Translucent visual cards (`backdrop-filter`) with thin glowing border accents and slow floating animations.
*   **Dual-Theme Mode**: Smooth Dark/Light mode toggle utilizing a shared global CSS variables library with persistent state tracking via `localStorage`.
*   **Automated Canvas Particles**: Lightweight particle-interaction background drawn directly onto HTML5 Canvas elements for optimized performance.
*   **Typewriter Subtext**: Smooth typewriter animation showcasing core titles: *Aspiring Full Stack Developer | MERN Stack Enthusiast | Problem Solver*.
*   **Multi-Path Timeline**: Interactive tabbed journey selector organizing Academic records, Internship history, and Learning pathways.
*   **Animated Progress Skills**: Categorized technology listings featuring smooth transition progress bars that load on view.
*   **Sprint Hub Showcase**: Custom visual project details for the featured MERN task board application, equipped with interactive screenshots carousels and repository links.
*   **Interactive Education Card**: B.Tech CSE details (8.4 CGPA) at Ajay Kumar Garg Engineering College with a functional inline-editable client form.
*   **ATS-Friendly Resume Preview**: Responsive inline resume sheet optimized for quick readability and print-compatibility, accompanied by direct PDF download links.
*   **Validated Contact Form**: Full client validation with automated submit locks, success modal overlays, and a responsive SVG vector map of UP, India.

## 🛠️ Technology Stack

*   **Frontend Library**: React.js (Component-based architecture)
*   **Build Tool**: Vite (Lightning-fast HMR and bundle configurations)
*   **Styling System**: Vanilla CSS Variables (For maximum fluidity, fast rendering, and clean light/dark values mapping)
*   **Icons**: Lucide React
*   **Animation System**: CSS keyframes & Intersection Observer API

## 📂 Project Structure

```
swapnil-portfolio/
├── public/
│   ├── NEW_SWAPNIL RESUME.pdf (Official ATS Resume PDF)
│   └── README_RESUME.txt (Guidance instructions)
├── src/
│   ├── assets/
│   │   └── swapnil.png (Professional Portrait Picture)
│   ├── components/
│   │   ├── Navbar.jsx (Header navigation menu)
│   │   └── ThemeToggle.jsx (Dark/Light switch)
│   ├── sections/
│   │   ├── Hero.jsx (Interactive particles, titles, and stats)
│   │   ├── About.jsx (Tabs journey timeline)
│   │   ├── Skills.jsx (Technical progress bars)
│   │   ├── Projects.jsx (Sprint Hub details and slider)
│   │   ├── Experience.jsx (Internship milestones)
│   │   ├── Education.jsx (Interactive academic card)
│   │   ├── Achievements.jsx (Accomplishment badges)
│   │   ├── CodingProfiles.jsx (LinkedIn, LeetCode, GitHub)
│   │   ├── Resume.jsx (ATS preview and printer)
│   │   └── Contact.jsx (Validated form and SVG map)
│   ├── App.jsx (Global shell wrapping and loader layout)
│   ├── index.css (Global design tokens, transitions, and keyframes)
│   └── main.jsx (React renderer mount)
├── index.html (SEO-optimized HTML document shell)
├── package.json (Dependency tracking)
└── vite.config.js (Vite compiler parameters)
```

## 💻 Local Setup & Execution

To run the project locally on your system, ensure you have [Node.js](https://nodejs.org/) installed, and run the following commands:

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run Development Server**:
   ```bash
   npm run dev
   ```
3. **Open in Browser**: Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

## 📦 Building for Production

To compile a minified, lightweight static build of the website for online hosting:

```bash
npm run build
```
This outputs compiled assets inside the `dist/` directory, ready to be hosted.

## 🌐 Deployment Guidelines

The project can be deployed instantly using modern hosting platforms:

*   **Vercel**: Link your GitHub repository, and it will automatically detect Vite, compile, and host your site.
*   **Netlify**: Drop the compiled `dist/` folder or connect your repository for automatic deployment pipelines.
*   **GitHub Pages**: Configure GitHub Actions to run the build script and host from your repository's pages branch.
