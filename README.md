# 🤖 AI Generative Bootcamp Platform

A professional, high-end educational web platform built with **React** and **Vite**, designed to teach Generative AI tools (ChatGPT & Gemini) to engineering students.

> **Note**: This project was developed as part of my internship (Práctica) at Universidad Andrés Bello (UNAB), specifically for the Faculty of Engineering.



## 🎯 The Vision
I built this project to modernize the way academic tools are taught to high school and university students, moving away from static slides to an interactive, gamified web experience that simulates real AI environments.

## 🏗️ Evolution: From Static to Modular (The Big Refactor)
Originally built as a series of independent pages, the project has evolved into a **Data-Driven Modular Architecture**. 
- **The Slide Engine**: A custom React-based engine that renders layouts dynamically.
- **Scalability**: Content is decoupled from the UI. Adding new lessons now only requires updating a JSON-like data structure.
- **Clean Code Standard**: Implemented JSDoc documentation, optimized hooks, and professional component separation.



## 🚀 Key Features

- **The Versus Mode**: High-impact interactive comparison between ChatGPT and Gemini with dynamic transitions.
- **Interactive Simulations**: Simulated chat interfaces that mimic real AI interactions (Prompt Engineering) without external accounts.
- **AI Quiz Engine**: An automated tool that mimics AI "thinking" to generate questions and provide personalized feedback.
- **Dynamic Checklists & Rubrics**: Progress tracking via "Flight Checklists" and automated "AI Rubrics" to audit student prompts.
- **Resource Hub**: One-click access to download synthesized PDF summaries (Papers) optimized for students.

## 📦 Tech Stack

- `React 18` (Functional Components & Hooks)
- `Vite` (Next-gen build tool)
- `Tailwind CSS` (Glassmorphism & Advanced Animations)
- `Lucide React` (Modern iconography)
- `JavaScript (ES6+)`
- `AWS (EC2 / Apache2)`

## 👩🏽‍🍳 The Development Process

### 1. Research & Design
I started by designing a modular architecture. Instead of a single giant app, I built independent Single Page Applications (SPAs) for each day of the bootcamp. This allowed for better organization during the internship phase.

### 2. The Presentation Engine
I created reusable layouts like 'Hero', 'Split-Screen', and 'Interactive-Quiz'. This "DRY" (Don't Repeat Yourself) approach allowed me to focus on interactive features rather than rewriting HTML for every slide.

### 3. Deployment & DevOps
Since I needed to host multiple modules on a single AWS server, I configured Vite to use relative paths (`base: './'`). I managed the EC2 instance using Apache2, organizing modules into subfolders without breaking the routing.

### 4. Professional Refactoring
The final stage (Current Commit) involved modularizing the "Spaghetti Code" into independent React components. I implemented professional standards: JSDoc, Jsx-clean formatting, and centralized theme-based styling.



## 📚 Key Learnings

### 🧠 Frontend Architecture:
- **Component Reusability**: Created a data-driven approach where content is stored in arrays and rendered by a single master component.
- **State Management**: Used React state to create "artificial delays," making the platform feel like a real processing AI.

### 🛤️ DevOps & Deployment:
- **Vite Mastery**: Understanding base paths for subdirectories in production.
- **Server Management**: Setting up EC2, configuring Apache2, and managing static builds.

### 🎨 UI/UX Design:
- **Advanced Tailwind**: Deep dive into backdrop filters, gradients, and custom animations (`animate-pulse`, `animate-scan`) to keep students engaged.

## 💭 Future Improvements
- **Real API Integration**: Connect to Google Gemini API for live testing.
- **Backend Sync**: Store student progress and attendance via Firebase.
- **Admin CMS**: Allow teachers to edit content without touching the code.

## 🚦 Running the Project

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
3. Run `npm run dev` to start the local server.
4. Open the localhost link in your browser.

## 🍿 Demo

Live project hosted at: [Netlify Demo](https://aibootcampunabtest.netlify.app)
