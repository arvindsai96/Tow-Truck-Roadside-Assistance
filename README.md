# RoadRescue

RoadRescue is a static, multi-page towing and roadside assistance website. It is built with HTML, CSS, and vanilla JavaScript; there is no build step or package manager required.

## Pages

The site includes public service, coverage, pricing, blog, contact, and policy pages, along with customer and admin interface demos. The home page is `index.html`, and shared styles, scripts, fonts, and images live in `assets/`.

## Run locally

Open `index.html` in a browser, or serve the project directory with any static web server. For example, with Python installed:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to Vercel

1. Push this project to a Git provider supported by Vercel.
2. In Vercel, import the repository and select this project directory as the root directory.
3. Leave the framework preset as **Other**. No build command or output directory is needed; Vercel can serve the HTML files directly.
4. Deploy. The site entry point is `index.html`.

You can also deploy from the Vercel CLI in this directory with `vercel` and follow its prompts.

## Important notes

- This is a front-end demo. Sign-in, customer requests, contact form submissions, and admin data are stored in the browser's `localStorage` or `sessionStorage`; they are not sent to a server and do not sync between visitors or devices. Add a backend before using these flows for real customer data.
- Replace example business details and placeholder canonical/social URLs (currently using `roadrescue.example.com`) with your real contact information and deployed domain before launch.
- Third-party fonts and Bootstrap assets are loaded from Google Fonts and jsDelivr, so those features need an internet connection.
