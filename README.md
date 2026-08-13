# Tailwind Project

A static portfolio-style website built with HTML and Tailwind CSS through the browser CDN.

## Pages

- `index.html` is the home page.
- `projects.html` displays the projects page.
- `contact.html` contains the contact page and form layout.

The pages share navigation links between Home, Projects, and Contact.

## Run Locally

You can open `index.html` directly in a browser. For a local server, run this from the project folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Styling

Tailwind CSS is loaded from the jsDelivr browser CDN in each HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

An internet connection is required for Tailwind styles and the remote image used on the home page to load.

## Notes

This is a static front-end project. The contact form currently has no backend submission endpoint, and some text and project content is placeholder copy intended to be replaced.
