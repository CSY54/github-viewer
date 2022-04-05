import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { GitHub, Moon, Sun } from 'react-feather';
import { Link as ReactLink } from 'react-router-dom';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box py="4" px="4" minH="72px" maxH="72px">
      <Flex align="center">
        <Link as={ReactLink} to="/" style={{ textDecoration: 'none' }}>
          <Heading size="md">GitHub Viewer</Heading>
        </Link>
        <Spacer />
        <Box>
          <ButtonGroup spacing="2">
            <Link href="https://github.com/CSY54/github-viewer" isExternal>
              <IconButton icon={<Icon as={GitHub} />} />
            </Link>
            <IconButton
              icon={<Icon as={colorMode === 'light' ? Moon : Sun} />}
              onClick={toggleColorMode}
            />
          </ButtonGroup>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
