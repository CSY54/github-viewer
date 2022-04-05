import axios from 'axios';
import handleRequestCache from './cache';

const api = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 3000,
  headers: {
    accept: 'application/vnd.github.v3+json',
  },
  validateStatus(status) {
    return status >= 200 && status < 500;
  },
});

const getUser = async ({ username }, cb) => {
  const [data, error] = await handleRequestCache(
    `/users/${username}`,
    () => api.get(`/users/${username}`),
    (data) => ({
      login: data.login,
      avatarUrl: data.avatar_url || data.avatarUrl,
      name: data.name,
      company: data.company,
      blog: data.blog,
      location: data.location,
      email: data.email,
      bio: data.bio,
      followers: data.followers,
      following: data.following,
    }),
  );

  cb(data, error);
};

const getUserRepositories = async ({ username, perPage, page }, cb) => {
  const [data, error] = await handleRequestCache(
    `/users/${username}/repos?${page}`,
    () =>
      api.get(`/users/${username}/repos`, {
        params: {
          type: 'all',
          sort: 'updated',
          per_page: perPage,
          page,
        },
      }),
    (data) => ({
      login: data.owner?.login || data.login,
      avatarUrl: data.owner?.avatar_url || data.avatarUrl,
      name: data.name,
      description: data.description,
      language: data.language,
      stargazersCount:
        data.stargazers_count !== undefined
          ? data.stargazers_count
          : data.stargazersCount,
    }),
  );

  cb(data, error);
};

const getRepository = async ({ username, repository }, cb) => {
  const [data, error] = await handleRequestCache(
    `/repos/${username}/${repository}`,
    () => api.get(`/repos/${username}/${repository}`),
    (data) => ({
      login: data.owner?.login || data.login,
      name: data.name,
      fullName: data.full_name || data.fullName,
      avatarUrl: data.owner?.avatar_url || data.avatarUrl,
      description: data.description,
      language: data.language,
      forksCount:
        data.forks_count !== undefined ? data.forks_count : data.forksCount,
      stargazersCount:
        data.stargazers_count !== undefined
          ? data.stargazers_count
          : data.stargazersCount,
      watchers: data.watchers,
      topics: data.topics,
      license: data.license?.name,
    }),
  );

  cb(data, error);
};

export { getUser, getUserRepositories, getRepository };
