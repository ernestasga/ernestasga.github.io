# My Portfolio Page
This is my portfolio page. It is built with Next.js and Tailwind CSS. Here is a link to the [live site](https://ernestasga.github.io/).

## Development
Two methods for spinning up the development server are provided below. The first method uses Docker and the second method uses Node.js.

### Docker
```bash
docker-compose run app npm install
docker-compose up
```

### Node.js
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Build
Build with Docker:
```bash
docker-compose run app npm run build
```

Build with Node.js:
```bash
npm run build
```

The static build will be located in the `build` directory.

## Deploy
Deployment is done with GitHub Actions. The workflow is located in `.github/workflows/pages.yml`. The workflow will build the site and deploy the static site to GH Pages. Triggered by pushing to the `main` branch.