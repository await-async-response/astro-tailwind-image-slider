# Image Slider

## Testing

- Build the Dockerfile (image tag optional): `docker build . -t image-slider`
- Copy the image ID from the list: `docker images`
- Create and run the docker container: `docker run <image-id> -p [::1]:3000:3000`
- Open http://localhost:3000 in browser

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
P