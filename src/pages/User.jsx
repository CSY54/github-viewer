import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Center, Container, Spinner, Text, useToast } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Banner from '../components/Banner';
import RepositoryList from '../components/RepositoryList';
import { getUser, getUserRepositories } from '../api';

function User() {
  const REPO_PER_PAGE = 10;
  const { username } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [page, setPage] = useState(1);
  const [repos, setRepos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [isRepoLoading, setIsRepoLoading] = useState(true);

  const loadMore = () => {
    getUserRepositories(
      {
        username,
        perPage: REPO_PER_PAGE,
        page,
      },
      (data, error) => {
        switch (error) {
          case null:
            setRepos((repos) => [...repos, ...data]);
            setPage(page + 1);
            setHasMore(data.length === REPO_PER_PAGE);
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
      },
    );
  };

  useEffect(() => {
    getUser({ username }, (data, error) => {
      switch (error) {
        case null:
          setUser(() => data);
          break;

        case 404:
          toast({
            title: 'User Not Found!',
            description: `Give 'google' a try!`,
            status: 'error',
            isClosable: true,
            duration: 3000,
          });

          navigate('/');

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

      setIsUserLoading(false);
    });
  }, []);

  useEffect(() => {
    loadMore();
    setIsRepoLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(isUserLoading || isRepoLoading);
  }, [isUserLoading, isRepoLoading]);

  return isLoading ? (
    <Center h="calc(100vh - 72px)">
      <Spinner size="lg" />
    </Center>
  ) : (
    <>
      <Banner
        login={user.login}
        avatarUrl={user.avatarUrl}
        name={user.name}
        company={user.company}
        blog={user.blog}
        location={user.location}
        email={user.email}
        bio={user.bio}
        followers={user.followers}
        following={user.following}
      />
      <Container>
        <InfiniteScroll
          dataLength={repos.length}
          hasMore={hasMore}
          next={loadMore}
          loader={
            <Center my="4">
              <Spinner size="lg" />
            </Center>
          }
          endMessage={
            <Center my="4">
              <Text fontSize="sm" color="gray.500" casing="uppercase">
                - end -
              </Text>
            </Center>
          }
        >
          <RepositoryList repos={repos} />
        </InfiniteScroll>
      </Container>
    </>
  );
}

export default User;
