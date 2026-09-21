# Seif Elden Mohamed Mamdouh | Portfolio

Personal portfolio of a Computer Science student at MSA University, focused on AI and machine learning.

Live site: https://seifmamdouhh.com/

## What is inside

A static website built with plain HTML, CSS and JavaScript. There is no build step and no framework.

- Home, About, Skills, Experience, Projects and Contact sections
- Case study pages for the main projects: Iron Nile Gym Assistant, Human Activity Recognition Using Smartphones and LevelUp
- Light and dark mode that follows the visitor's system setting
- Responsive layout for desktop, tablet and mobile

## Structure

```
.
├── index.html            # all the content and the case study pages
├── assets/
│   ├── css/style.css     # styles
│   ├── js/main.js        # navigation, menu and page routing
│   └── img/              # photos and screenshots
├── .nojekyll
└── .gitignore
```

## Run it locally

Open `index.html` in a browser, or start a small local server:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish it on GitHub Pages

1. Create a public repository named `seifmamdouh1911.github.io` (your username followed by `.github.io`). Leave it empty: do not add a README or `.gitignore` on GitHub.
2. Upload the contents of this folder to it, or push from a terminal:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/seifmamdouh1911/seifmamdouh1911.github.io.git
   git push -u origin main
   ```
3. On GitHub open **Settings → Pages**. Under **Build and deployment** choose **Deploy from a branch**, select **main** and **/ (root)**, then **Save**.
4. After a minute the site is live at https://seifmamdouh1911.github.io/

## Editing

- Text and links: edit `index.html`. Each section has an `id` (`about`, `skills`, `experience`, `projects`, `contact`).
- Project case studies: search for `id="p-gym"`, `id="p-har"` and `id="p-levelup"`.
- Colors and spacing: the variables at the top of `assets/css/style.css`.
- Images: replace the files in `assets/img/` and keep the same names.

## Notes

- Fonts (Geist and Geist Mono) load from Google Fonts. If they can't load, the page falls back to system fonts.
- The email and phone number on the contact section are public once the site is published.
- The screenshots of LevelUp use demo data.
