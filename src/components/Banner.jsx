import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { Briefcase, Globe, Mail, MapPin, Users } from 'react-feather';
import PropTypes from 'prop-types';

function Banner({
  login,
  avatarUrl,
  name,
  company,
  blog,
  location,
  email,
  bio,
  followers,
  following,
}) {
  return (
    <Box
      p="6"
      mb="6"
      _light={{
        backgroundColor: 'gray.100',
      }}
      _dark={{
        backgroundColor: 'gray.700',
      }}
    >
      <Container>
        <Flex align="top">
          <Avatar name={login} size="xl" src={avatarUrl} mt="2" />
          <Box ml="4">
            <Heading as="h2" size="xl">
              {login}
              {name && (
                <>
                  &ensp;&middot;&ensp;
                  {name}
                </>
              )}
            </Heading>
            <Text>{bio}</Text>
            <List mt="2">
              <ListItem>
                <ListIcon as={Users} />
                {followers} followers &middot; {following} following
              </ListItem>
              {email && (
                <ListItem>
                  <ListIcon as={Mail} />
                  {email}
                </ListItem>
              )}
              {company && (
                <ListItem>
                  <ListIcon as={Briefcase} />
                  {company}
                </ListItem>
              )}
              {location && (
                <ListItem>
                  <ListIcon as={MapPin} />
                  {location}
                </ListItem>
              )}
              {blog && (
                <ListItem>
                  <ListIcon as={Globe} />
                  <Link href={blog} isExternal>
                    {blog}
                  </Link>
                </ListItem>
              )}
            </List>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

Banner.propTypes = {
  login: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string,
  company: PropTypes.string,
  blog: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  bio: PropTypes.string,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
};

Banner.defaultProps = {
  name: '',
  company: '',
  blog: '',
  location: '',
  email: '',
  bio: '',
};

export default Banner;
