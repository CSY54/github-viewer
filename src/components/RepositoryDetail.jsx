import {
  Avatar,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Book, Code, Eye, GitBranch, Star } from 'react-feather';
import PropTypes from 'prop-types';

function RepositoryDetail({
  login,
  avatarUrl,
  fullName,
  stargazersCount,
  language,
  license,
  forksCount,
  watchers,
  description,
  topics,
}) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="6"
      _light={{
        boxShadow: 'md',
      }}
      _dark={{
        boxShadow: 'dark-lg',
      }}
    >
      <Flex align="center">
        <Avatar name={login} src={avatarUrl} size="md" />
        <Box display="grid" ml="2">
          <Heading as="h2" size="md" isTruncated>
            {fullName}
          </Heading>
          <HStack spacing="2" pt="2">
            <Tag size="sm" colorScheme="yellow">
              <TagLeftIcon as={Star} />
              <TagLabel>{stargazersCount}</TagLabel>
            </Tag>
            {language && (
              <Tag size="sm" colorScheme="cyan">
                <TagLeftIcon as={Code} />
                <TagLabel>{language}</TagLabel>
              </Tag>
            )}
            {license && (
              <Tag size="sm" colorScheme="gray">
                <TagLeftIcon as={Book} />
                <TagLabel>{license}</TagLabel>
              </Tag>
            )}
            <Tag size="sm" colorScheme="green">
              <TagLeftIcon as={GitBranch} />
              <TagLabel>{forksCount}</TagLabel>
            </Tag>
            <Tag size="sm" colorScheme="pink">
              <TagLeftIcon as={Eye} />
              <TagLabel>{watchers}</TagLabel>
            </Tag>
          </HStack>
        </Box>
      </Flex>
      <Divider my="2" />
      {description?.length > 0 ? (
        <Text>{description}</Text>
      ) : (
        <Center mt="4">
          <Text fontSize="sm" color="gray.500">
            No Descriptions Provided
          </Text>
        </Center>
      )}
      {topics?.length > 0 && (
        <Wrap mt="4">
          {topics.map((topic) => (
            <WrapItem>
              <Tag key={topic} size="md" colorScheme="orange">
                #{topic}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      )}
    </Box>
  );
}

RepositoryDetail.propTypes = {
  login: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  stargazersCount: PropTypes.number.isRequired,
  language: PropTypes.string,
  license: PropTypes.string,
  forksCount: PropTypes.number.isRequired,
  watchers: PropTypes.number.isRequired,
  description: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

RepositoryDetail.defaultProps = {
  language: '',
  license: '',
  description: '',
};

export default RepositoryDetail;
