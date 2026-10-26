# Aidan Mathew - Data Engineering Portfolio

Personal portfolio for Aidan Mathew, focused on data engineering, pipelines, warehouses, and reliable data. The published site is [aidanmathew.github.io](https://aidanmathew.github.io/).

Built with Create React App, React 18, and React Router v6. The site is a client-rendered single-page application and is published to GitHub Pages.

## Features

- **Home:** data-engineering headline, portrait, and a typing effect for pipeline and warehouse themes. Visitors who prefer reduced motion see static text.
- **SQL-style intro:** displays a sample query and returns the configured profile rows. It starts automatically after 10 seconds, or runs immediately when the visitor selects **Run query**. An early click cancels the pending auto-run.
- **Pipeline diagram:** interactive Source, Ingest, Transform, Warehouse, and Serve stages. Selecting or hovering over a stage reveals its associated tools.
- **Skills:** skills grouped by pipeline stage and filterable by category.
- **Projects:** expandable cards with problem, architecture, stack, and impact details, plus individual project pages.
- **Experience:** a work, teaching, and education timeline with an expandable personal profile at its oldest point.
- **Accessibility:** semantic controls, keyboard focus indicators, accessible state labels, and reduced-motion support for the typing effect.

## Routes

| Path            | Content                                                      |
| --------------- | ------------------------------------------------------------ |
| `/`             | Home, pipeline, skills, and focus sections                   |
| `/projects`     | Project list                                                 |
| `/projects/:id` | Project detail; `id` is the project's index in `ProjectList` |
| `/experience`   | Experience and education timeline                            |

The navigation bar also links to the resume PDF in `src/media/`.

## Requirements

- Node.js and npm
- Install dependencies from the repository root before starting the app

```bash
npm install
npm start
```

The development server runs at [localhost:3000](http://localhost:3000) and reloads when source files change.

## Available scripts

| Command          | Purpose                                                               |
| ---------------- | --------------------------------------------------------------------- |
| `npm start`      | Start the Create React App development server                         |
| `npm run build`  | Run the production build into `build/`                                |
| `npm test`       | Start the Create React App test runner                                |
| `npm run deploy` | Build via `predeploy`, then publish `build/` to the `gh-pages` branch |

## Source layout

```text
src/
	App.js                    Router and shared page layout
	App.css                   Global theme variables and shared styles
	components/
		Navbar.jsx              Main navigation and resume link
		Footer.jsx              Social links and footer
		TypedLine.jsx           Reduced-motion-aware typewriter text
		SqlTerminal.jsx         Sample query interaction
		PipelineDiagram.jsx     Interactive pipeline stages
		SkillsMatrix.jsx        Filterable skills by stage
		ProjectCard.jsx         Expandable project summary
		OriginCard.jsx          Expandable personal profile in timeline
	dataHelpers/
		Experiences.js          Work and education timeline data
		Pipeline.js             Pipeline stages, tools, and skill categories
		ProjectList.js          Project content
	hooks/
		useTypewriter.js        Typewriter and reduced-motion hooks
	pages/
		Home.jsx
		Projects.jsx
		ProjectDisplay.jsx
		Experience.jsx
	styles/                   Page and component stylesheets
	media/                    Portrait, project and employer images, resume PDF
```

## Updating content

Most portfolio content is kept separate from the presentation components:

- **Pipeline and skills:** edit `src/dataHelpers/Pipeline.js`. Each skill has a `stage` and `category`; add new filter categories to `SkillCategories`.
- **Projects:** edit `src/dataHelpers/ProjectList.js`. Project detail routes use each project's array index, so changing the order changes its URL id.
- **Experience:** edit `src/dataHelpers/Experiences.js`. Entries are displayed newest first. Education entries and the oldest timeline profile are in `src/pages/Experience.jsx` and `src/components/OriginCard.jsx`.
- **Typing phrases:** edit `PHRASES` in `src/components/TypedLine.jsx`.
- **SQL intro:** edit `QUERY`, `ROWS`, or `AUTO_RUN_MS` in `src/components/SqlTerminal.jsx`.
- **Resume:** replace `src/media/AidanCurrentResume.pdf` while keeping the imported filename or update the Navbar import.

Replace any remaining bracketed placeholders in the content before publishing. Use verified details; do not add unconfirmed employers, dates, or metrics.

## Styling and formatting

Global colors and spacing are CSS custom properties in `src/App.css`. Page-specific styles are in `src/styles/`. The site uses a dark data-oriented palette with teal accents and monospace details.

Prettier and ESLint run as part of the Create React App development and build workflows. Configuration is in `.prettierrc` and `.eslintrc.json`. To format the source:

```bash
npx prettier --write src
```

## Deployment

The `homepage` field in `package.json` is configured for `https://aidanmathew.github.io/`. To publish, run:

```bash
npm run deploy
```

This runs `npm run build`, creates `build/404.html` from the generated `index.html` for client-side routes, then uses `gh-pages` to publish the `build/` directory. This command deploys; do not run it for local development.

The app uses `BrowserRouter`. The generated `404.html` lets GitHub Pages serve the React app when a visitor opens or refreshes a route such as `/resume` directly.

## Technology

React 18, React Router, Create React App (`react-scripts`), Material UI icons, `react-icons`, and `react-vertical-timeline-component`. The typewriter is implemented with a small local hook rather than a typing-animation dependency.

## License

No license is currently specified in this repository.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
