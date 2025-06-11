# above.github.io

This repository hosts the slide deck for the GitHub Pages site.

Open `deck/index.html` to view the first slide. The remaining slides are available as `slide2.html` through `slide8.html` inside the `deck` folder.

## GitHub Pages Deployment

The repository includes a workflow in `.github/workflows/pages.yml` that uploads
the deck as an artifact and deploys it using the official **Deploy to GitHub Pages** action.
A validation step runs `html-validate` on every HTML file to catch markup issues before deployment.
Pushes to the `main` branch will automatically update the live site.

## Styling Guidelines

Common styles are centralized in `deck/base.css`. Each slide links to this file
and keeps slide-specific rules minimal. Smooth page transitions are handled by
`deck/base.js` which fades between slides.
