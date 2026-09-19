# Tunaa's Portfolio

A personal developer portfolio for myself. It showcases selected projects, online platforms, contact links, and a live Discord presence panel with realtime activity, Spotify metadata, and activity artwork when available.

## Features

- Responsive portfolio layout with About, Work, Sites, Support, and Contact sections
- Project and platform cards driven by data files in `src/data`
- Personal connection links for GitHub, Discord, Facebook, email, Riot Games, and Steam
- Realtime Discord status and activity updates through Lanyard WebSocket connections
- Spotify track, artist, album, and artwork details when Spotify is active
- Vietnam local time display using the `Asia/Ho_Chi_Minh` timezone
- Font Awesome icons throughout the interface
- Docker production image served with Nginx

## Frameworks and Libraries

### Application

- React
- React DOM
- Vite
- Sass

### UI and integrations

- Font Awesome
- `use-lanyard` for realtime Discord presence over WebSocket
- Lanyard public API for Discord presence events

## Project Structure

```text
src/
  components/       React UI components
  data/             Projects, sites, connections, and location settings
  styles/           Sass variables, layout, components, and responsive rules
  App.jsx           Application composition
  main.jsx          React entry point
index.html          Vite HTML entry point
vite.config.js      Vite configuration
Dockerfile          Multi-stage production image
nginx.conf          Nginx SPA configuration
```

## Requirements

- Node.js 22 or newer is recommended
- npm
- Docker, optional for containerized deployment

## Setup

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/PanyoPie/Portfolio
   cd Portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed by Vite, usually `http://localhost:5173`.

The Discord status panel uses the Discord user ID configured in `src/data/connections.js`. The account must be monitored by Lanyard for presence data to appear.

## Available Commands

```bash
npm run dev       # Start the Vite development server
npm run build     # Create a production build in dist/
npm run preview   # Preview the production build locally
```

## Base Path Configuration

Set the `baseUrl` value in `vite.config.js` to match where the site is served:

- Custom domain: `/`
- GitHub Pages project site: `/<project-name>/`, for example `/Portfolio/`

The deployment workflow does not choose this value automatically. Update `baseUrl` before deploying when switching between these hosting modes.

## GitHub Pages Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.
Every push to `master` builds the Vite application and deploys `dist/` to GitHub Pages.

- Without a custom domain, assets use the repository path: `/Portfolio/`.
- With a custom domain, assets use the domain root: `/`.

The workflow detects a custom-domain deployment through a tracked `CNAME` file. Add your domain to `CNAME` on its own line to use the root path:

```text
tunaa.io.vn
```

To enable deployment in GitHub:

1. Open the repository's **Settings**.
2. Select **Pages** under **Code, planning and automation**.
3. Set **Source** to **GitHub Actions**.
4. Push to `master` or run the **Deploy to GitHub Pages** workflow manually from the **Actions** tab.

## Docker Setup

Build the production image:

```bash
docker build -t tunaa-portfolio .
```

Run the container:

```bash
docker run --rm -p 8080:80 tunaa-portfolio
```

Open `http://localhost:8080` in a browser.

## Customizing Content

- Update personal links in `src/data/connections.js`.
- Update project cards in `src/data/projects.js`.
- Update managed platforms in `src/data/sites.js`.
- Update location and timezone settings in `src/data/location.js`.
- Update visual styles in `src/styles/`.

## Notes

Discord activity data depends on the public Lanyard WebSocket service and the configured Discord account being available. If presence data cannot be loaded, the status panel displays a loading or fallback state without preventing the rest of the portfolio from rendering.
