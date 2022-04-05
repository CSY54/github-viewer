import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import User from './pages/User';
import Repository from './pages/Repository';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/users/:username">
          <Route path="" element={<User />} />
          <Route path="repos/:repository" element={<Repository />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
