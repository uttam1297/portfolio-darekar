# Uttam Darekar - Personal Portfolio

A clean, modern, minimally designed personal portfolio and link tree page built from scratch with HTML, CSS, and vanilla JS. It features a two-column layout, dynamic local storage content editing, premium typography (Google Outfit), and dark mode glassmorphism aesthetics.

## Folder Structure

\`\`\`
├── assets
│   ├── css
│   │   └── style.css          # Main styling, themes, and layout
│   ├── images
│   │   ├── profile.png        # Your main headshot
│   │   ├── page_icon.png      # Favicon
│   │   └── image.png          # Alternate image
│   └── js
│       └── script.js          # Interactions, blob animations, sticky header
├── index.html                 # Main portfolio page (Two-Column Grid)
├── edit.html                  # Interface for adding custom items locally
└── README.md                  # Project documentation
\`\`\`

## Features
*   **Two-Column Layout**: Left side contains core identifying info (Hero, Skills, Education); right side contains scrolling detailed sections (Experience, Projects, etc.).
*   **Dynamic Content Management**: Use the `/edit.html` page to append custom projects, case studies, blogs, achievements, and hobbies using your browser's persistent Local Storage.
*   **Responsive**: Automatically turns into a single column on mobile devices.
*   **Aesthetics**: Glassmorphic styling, background blob animations that follow the mouse, smooth scroll intersections, and premium fonts.

## How to Edit Content
There are two ways to modify this site:
1.  **Core Content**: To change your experience bullets, education, skills, or main bio, directly edit `index.html`.
2.  **Dynamic Sections**: To add new Projects, Blogs, Case Studies, Achievements, or Hobbies, simply go to the **Add [...]** card in the UI. This redirects you to `edit.html` where you can type your content and it will automatically show up on `index.html`.

## Changing the Profile Photo
1. Place your desired photo into the `assets/images/` directory.
2. Ensure the image is named `profile.png` (overwrite the existing file).
3. If it is a `.jpg`, you can name it `profile.jpg` but ensure you update the `<img src="assets/images/profile.jpg">` line in `index.html`.

## Running Locally
You can simply double-click `index.html` to open it in your browser. Note: LocalStorage (the dynamic edit functionality) works best when served via a local web server (e.g., `python3 -m http.server 8000`).