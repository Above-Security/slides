# above.github.io

This repository hosts the slide deck for the GitHub Pages site.

Open `deck/index.html` to view the first slide. The remaining slides are available as `slide2.html` through `slide8.html` inside the `deck` folder.

## GitHub Pages Deployment

GitHub Pages serves the site directly from the `main` branch. Simply push
changes to update the live site.

Before the site is visible, enable **GitHub Pages** in the repository settings
and choose `main` as the source branch. Run `npm test` locally to validate the
HTML before committing.

## Styling Guidelines

Common styles are centralized in `deck/base.css`. Each slide links to this file
and keeps slide-specific rules minimal. Smooth page transitions are handled by
`deck/base.js` which fades between slides.
