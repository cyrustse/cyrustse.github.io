
Simple web app that renders minimalist CV with print-friendly layout.

Built with Next.js and shadcn/ui, deployed on Vercel.

# Features

- Setup only takes a few minutes [single config file](./src/data/resume-data.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/ui, TailwindCss
- Auto generated Layout
- Responsive for different devices
- Optimized for Next.js and Vercel


Based on the provided code, this is a personal CV/Resume website project. Let me break down its key features and functionality:
Core Purpose
This is a minimalist CV/Resume web application built using Next.js 14
It renders a print-friendly layout of your professional information
The data is configured through a single configuration file (resume-data.tsx)
Main Features (as seen in the README.md, lines 9-15):
Auto-generated layout
Responsive design for different devices
Print-friendly formatting
Optimized for Next.js and Vercel deployment
Content Sections (from src/app/page.tsx, lines 1-9):
Work Experience
Projects
Education
Summary
Skills
Header with personal information
Technical Implementation:
Frontend Framework: Next.js 14 with TypeScript
Styling: TailwindCSS with shadcn/ui components
UI Components: Uses Radix UI primitives for:
Avatar display
Dialog/Modal windows
Accessible UI elements
Analytics: Includes Vercel Analytics integration
Data Structure (from resume-data.tsx, lines 11-48):
)
Special Features:
Command menu for quick navigation
Social media integration
SEO optimization with metadata
OpenGraph and Twitter card support for social sharing