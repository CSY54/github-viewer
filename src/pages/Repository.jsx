import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Center,
  Container,
  Flex,
  Icon,
  Link,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { ArrowRight, GitHub } from 'react-feather';
import RepositoryDetail from '../components/RepositoryDetail';
import { getRepository } from '../api';

function Repository() {
  const { username, repository } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [repo, setRepo] = useState({});

  useEffect(() => {
    getRepository({ username, repository }, (data, error) => {
      switch (error) {
        case null:
          setRepo(() => data);
          setIsLoading(false);
          break;

        case 404:
          toast({
            title: 'Repository Not Found!',
            description: `Give 'Dcard/yarn-plugins' a try!`,
            status: 'error',
            isClosable: true,
            duration: 3000,
          });
          break;

        default:
          toast({
            title: 'Oops!',
            description: 'Something went wrong, maybe try again later?',
            status: 'error',
            isClosable: true,
            duration: 3000,
          });

          navigate('/');
      }
    });
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Center h="calc(100vh - 72px)">
          <Spinner size="lg" />
        </Center>
      ) : (
        <>
          <RepositoryDetail
            login={repo.login}
            avatarUrl={repo.avatarUrl}
            fullName={repo.fullName}
            stargazersCount={repo.stargazersCount}
            language={repo.language}
            license={repo.license}
            forksCount={repo.forksCount}
            watchers={repo.watchers}
            description={repo.description}
            topics={repo.topics}
          />
          <Flex justify="end">
            <Link
              href={`https://github.com/${repo.fullName}`}
              style={{ textDecoration: 'none' }}
              mt="4"
              isExternal
            >
              <Button
                leftIcon={<Icon as={GitHub} />}
                rightIcon={<Icon as={ArrowRight} />}
                size="md"
              >
                View on GitHub
              </Button>
            </Link>
          </Flex>
        </>
      )}
    </Container>
  );
}

export default Repository;
