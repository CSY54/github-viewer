import { List } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import RepositoryCard, { RepositoryCardPropTypes } from './RepositoryCard';

function RepositoryList({ repos }) {
  return (
    <List spacing="2">
      {repos.map((repo) => (
        <RepositoryCard
          key={`${repo.login}/${repo.name}`}
          login={repo.login}
          avatarUrl={repo.avatarUrl}
          name={repo.name}
          description={repo.description}
          stargazersCount={repo.stargazersCount}
          language={repo.language}
        />
      ))}
    </List>
  );
}

RepositoryList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      ...RepositoryCardPropTypes,
    }),
  ).isRequired,
};

export default RepositoryList;
