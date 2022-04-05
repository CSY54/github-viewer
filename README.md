# GitHub Viewer

## Getting Started

- Using npm
  ```shell
  $ npm install
  $ npm run build
  $ npm run preview
  ```
- Using yarn
  ```shell
  $ yarn
  $ yarn build
  $ yarn preview
  ```

## About the Project

Building with React & Vite, using Chakra UI & Feather Icons as the CSS framework and icon library, respectively.

Other libraries
- `react-infinite-scroll-component` as the infinite scroll component
- `react-router-dom` as the router for navigation
- `prop-types` for props validation
- `axios` for calling GitHub API
- `eslint*` & `prettier` for enforcing coding style
- `rollup-plugin-visualizer` for visualizing the bundle

The response of the GitHub API will be stored in the localStorage for a TTL of 10 minutes.

## TODO

- [ ] Use `useContext` to save information in order to prevent re-render
- [ ] Reserve position in infinite scroll when navigating back to it
