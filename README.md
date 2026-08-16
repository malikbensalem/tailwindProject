# Techroom

Techroom is a technology archive built with HTML, Tailwind CSS through the browser CDN, and the [GNews API](https://gnews.io/). It fetches live technology stories and displays them in the existing Techroom layout.

## Pages

- `index.html` is the latest technology page.
- `projects.html` displays the full technology archive.
- `contact.html` contains the contact page and form layout.

The pages share navigation links between Latest, Tech archive, and Contact.

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

An internet connection is required for Tailwind styles and live technology stories to load.

## GNews API Setup

Techroom uses GNews for all live story data. The shared API code is in `news.js`.

1. Create a free account at [gnews.io](https://gnews.io/) and copy your API key from the dashboard.
2. Open `news.js`.
3. Replace the value of `GNEWS_API_KEY` with your key:

```js
const GNEWS_API_KEY = "your-gnews-api-key";
```

4. Start the local server from the `tailwindProject` folder:

```bash
python3 -m http.server 8000
```

5. Open <http://localhost:8000> in your browser.

The home page requests technology top headlines. The Tech archive requests additional technology results using the GNews search endpoint. Both pages use the same API key and shared `news.js` file.

GNews has rate limits and free-plan restrictions. If stories do not appear, check the browser developer console and confirm that the key is active, the request limit has not been reached, and the site has an internet connection.

## Notes

This is a static front-end project. Technology stories are loaded from GNews in `news.js`, using the technology category on the home page and a technology search on the archive page.

The GNews API key is stored in `news.js` because this project has no backend. That means the key is visible to browser users. This is acceptable for local learning and prototypes, but for a public production deployment, move the GNews request behind a serverless function or backend proxy and rotate the exposed key.
