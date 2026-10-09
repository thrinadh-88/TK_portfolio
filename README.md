# Thrinadh Kadimi — Data Science Portfolio

A premium, responsive, multi-page personal portfolio website built with vanilla HTML, CSS, and JavaScript. No build step required — open `index.html` in any browser or deploy directly to any static host.

---

## 🗂 File Structure

```
TK_portfolio/
├── index.html                 # Main HTML — all 5 pages (SPA)
├── data/
│   └── portfolio-data.js      # ⭐ ALL CONTENT LIVES HERE — edit this file
├── assets/
│   ├── style.css              # Global styles, theme, layout
│   ├── pages.css              # Page-specific component styles
│   ├── app.js                 # Application logic, routing, rendering
│   ├── profile.jpg            # YOUR PHOTO — add this file
│   ├── resume.pdf             # YOUR RESUME — add this file
│   └── projects/              # Project screenshots folder
└── README.md
```

---

## ✅ Before You Deploy — Checklist

### 1. Add Your Photo
Save your photograph as `assets/profile.jpg` (square crop, 400×400 or larger recommended).

### 2. Add Your Resume
Save your resume as `assets/resume.pdf`.

### 3. Update Your Personal Info
Open **`data/portfolio-data.js`** and replace all placeholder values:

```js
email:   "[INSERT MY EMAIL ADDRESS]",   // → "yourname@gmail.com"
phone:   "[INSERT MY PHONE NUMBER]",    // → "+91 9876543210"
github:  "[INSERT MY ACTUAL GITHUB PROFILE URL]",  // → "https://github.com/yourusername"
```

### 4. Fill Education Details
```js
graduationYear: "[INSERT CONFIRMED GRADUATION YEAR]",  // → "2028"
location:       "[INSERT COLLEGE LOCATION]",           // → "Vijayawada, Andhra Pradesh"
cgpa:           null,   // → "8.5 / 10" if you want to show it
```

### 5. Add Real Certification Links
Update the `certifications` array with real credential IDs and certificate URLs.

### 6. Update Internship Details
Fill in your actual internship role, responsibilities, tools, and outcomes in the `internships` array.

### 7. Add Project Links and Screenshots
Add GitHub repository URLs and screenshot images for both projects. Put screenshots in `assets/projects/`.

### 8. Configure the Contact Form
Open **`assets/app.js`**, line 17:
```js
const FORM_ENDPOINT = null;
// Change to:
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
```
**Free Formspree signup:** https://formspree.io

---

## 🚀 Deployment Options

### GitHub Pages (Free)
1. Push this folder to a GitHub repository
2. Go to Settings → Pages → Deploy from branch `main` / `root`
3. Your site will be live at `https://yourusername.github.io/TK_portfolio`

### Netlify (Free, Recommended)
1. Drag the entire `TK_portfolio` folder to https://netlify.com/drop
2. Your site goes live instantly with a custom URL

### Vercel (Free)
1. Push to GitHub, then connect the repo at https://vercel.com

---

## 🎨 Design System

| Token | Value | Use |
|-------|-------|-----|
| Navy `#062542` | Primary headings, nav, footer |
| Cream `#F3E5C8` | Page background |
| Sage `#D4D5C0` | Cards, skill backgrounds |
| Brown `#8C5C3B` | Buttons, accents, links |

Dark mode is toggled via the moon/sun button and the preference is saved in `localStorage`.

---

## 📝 Adding New Content

### Add a Skill
In `data/portfolio-data.js`, add to any skills category:
```js
{ name: "New Skill", icon: "🔥", note: "Brief description of what you can do" },
```

### Add a Project
Append to the `projects` array following the existing structure.

### Add a Certification
Append to the `certifications` array.

---

Built for Thrinadh Kadimi — Data Science Portfolio 2025
