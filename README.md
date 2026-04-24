# Ali Alomar — Personal Portfolio

A single-page portfolio website showcasing front-end skills, certifications, and featured projects.

**Live preview:** open `index.html` in any modern browser (no build step required).

## Tech Stack

| Layer     | Technology                        |
| --------- | --------------------------------- |
| Markup    | HTML5 (semantic)                  |
| Styling   | CSS3 + Bootstrap 5.1              |
| Scripting | Vanilla JavaScript                |
| Icons     | Font Awesome 5                    |
| Fonts     | Merriweather, Merriweather Sans   |

## Project Structure

```
.
├── index.html          # Main page
├── css/
│   └── styles.css      # Custom styles (Bootstrap loaded via CDN)
├── js/
│   └── scripts.js      # Navbar behaviour & scroll spy
└── assets/
    ├── favicon.ico
    └── img/
        └── bg-masthead.jpg
```

## Running Locally

No dependencies to install — just open the file:

```bash
# Option 1: open directly
open index.html        # macOS
xdg-open index.html    # Linux

# Option 2: simple local server (avoids CORS issues with fonts/images)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Sections

- **Hero** — Introduction with key stats
- **About** — Background, mindset, and strengths
- **Skills** — HTML5, CSS, JavaScript, professional strengths
- **Projects** — Portfolio work and learning projects
- **Journey** — Education, certifications (Coursera verified)
- **Contact** — Email and social links

## License

Based on [Start Bootstrap — Creative](https://startbootstrap.com/theme/creative), licensed under MIT.
