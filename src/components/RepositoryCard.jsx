import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  ListItem,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { Code, Star } from 'react-feather';
import PropTypes from 'prop-types';

const RepositoryCardPropTypes = {
  login: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  stargazersCount: PropTypes.number.isRequired,
  language: PropTypes.string,
};

function RepositoryCard({
  login,
  avatarUrl,
  name,
  description,
  stargazersCount,
  language,
}) {
  return (
    <ListItem>
      <LinkBox
        borderWidth="1px"
        borderRadius="lg"
        p="6"
        _hover={{
          _light: {
            backgroundColor: 'gray.50',
            boxShadow: 'md',
          },
          _dark: {
            backgroundColor: 'gray.700',
            boxShadow: 'dark-lg',
          },
        }}
        transition="0.5s"
      >
        <Flex align="center">
          <Avatar name={login} src={avatarUrl} size="sm" />
          <Heading as="h2" size="md" pl="2" isTruncated>
            <LinkOverlay as={ReactLink} to={`/users/${login}/repos/${name}`}>
              {login}/{name}
            </LinkOverlay>
          </Heading>
        </Flex>
        <Divider my="2" />
        <Box>
          <Text>{description}</Text>
        </Box>
        <HStack spacing="2" mt="4">
          <Tag colorScheme="yellow">
            <TagLeftIcon as={Star} />
            <TagLabel>{stargazersCount}</TagLabel>
          </Tag>
          {language !== null && (
            <Tag colorScheme="cyan">
              <TagLeftIcon as={Code} />
              <TagLabel>{language}</TagLabel>
            </Tag>
          )}
        </HStack>
      </LinkBox>
    </ListItem>
  );
}

RepositoryCard.propTypes = RepositoryCardPropTypes;

RepositoryCard.defaultProps = {
  description: '',
  language: '',
};

export default RepositoryCard;
export { RepositoryCardPropTypes };
