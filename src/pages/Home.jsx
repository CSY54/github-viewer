import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
} from '@chakra-ui/react';
import { Search } from 'react-feather';

function Home() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const [repository, setRepository] = useState('');

  const isValidUsername = (username) => {
    if (
      username.split('-').length > 2 ||
      username[0] === '-' ||
      username[username.length - 1] === '-' ||
      !/^[A-Za-z0-9-]{0,39}$/.test(username)
    ) {
      return false;
    }

    return true;
  };

  const isValidRepository = (repository) =>
    repository === '' || /^[0-9A-Za-z-_.]{1,100}$/.test(repository);

  const handleChange = (event) => {
    const { value } = event.target;
    if (value[0] === '/') {
      return;
    }

    const splitted = value.split('/');
    if (splitted.length > 2) {
      return;
    }

    const [username, repository] = splitted;
    if (!isValidUsername(username) || !isValidRepository(repository)) {
      return;
    }

    setInput(value);
    setUsername(username);
    setRepository(repository);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (repository === undefined) {
      navigate(`/users/${username}`);
    } else {
      navigate(`/users/${username}/repos/${repository}`);
    }
  };

  return (
    <Container
      h="calc(100vh - 72px)"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flexGrow="1"
    >
      <Heading>GitHub Viewer</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel htmlFor="input">Username or Username/Repository</FormLabel>
          <Input
            id="input"
            value={input}
            onChange={handleChange}
            placeholder="e.g. CSY54, CSY54/CSY54"
          />
        </FormControl>
        <Button mt="2" type="submit" leftIcon={<Icon as={Search} />}>
          Search
        </Button>
      </form>
    </Container>
  );
}

export default Home;
