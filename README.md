# Maintenance Page

A modern maintenance page built with Vue 3, Vite, and Vuetify.

## Features

- Vue 3 with Composition API
- TypeScript support
- Vuetify 3 for UI components
- Vite for fast development and optimized builds
- Docker and Docker Compose for containerization
- Nginx for production serving with optimized configuration
- PNPM for fast, disk-space efficient package management

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize Configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
# Install dependencies
pnpm install
```

### Development

```sh
# Start development server
pnpm dev
```

### Production Build

```sh
# Build for production
pnpm build
```

### Docker Development

```sh
# Start development environment with hot-reload
docker-compose up dev
```

### Docker Production

```sh
# Build and start production container
docker-compose up -d maintenance
```

## Project Structure

- `src/` - Source code
  - `assets/` - Static assets
  - `components/` - Vue components
  - `views/` - Vue views (pages)
  - `router/` - Vue Router configuration
- `public/` - Public static assets
- `dist/` - Production build output
- `Dockerfile` - Docker configuration for production
- `docker-compose.yml` - Docker Compose configuration for development and production
- `nginx.conf` - Nginx configuration for production
