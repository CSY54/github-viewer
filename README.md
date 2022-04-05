# GitHub Viewer

This project is a homework of Dcard frontend intern.

The project is currently deployed on [github-viewer.csy54.tw](https://github-viewer.csy54.tw).

The document is on [Google Drive](https://drive.google.com/file/d/1niPucGwf9qGEpLokVptK2a1zNeReS8WL/view?usp=sharing).

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

The component tree is as follow:
```
App.jsx
├── Home.jsx
├── User.jsx
│   ├── Banner.jsx
│   └── RepositoryList.jsx
│       └── RepositoryCard.jsx
└── Repository.jsx
    └── RepositoryDetail.jsx
```

`App.jsx` uses React Router to navigate through `Home.jsx`, `User.jsx`, and `Repository.jsx`
The route is as follow:
- `/`: `Home.jsx`
- `/users/:username`: `User.jsx`
- `/users/:username/repos/:repository`: `Repository.jsx`

## TODO

- [ ] Use `useContext` to save information in order to prevent re-render
- [ ] Reserve position in infinite scroll when navigating back to it
- [ ] Display single toast on single component
