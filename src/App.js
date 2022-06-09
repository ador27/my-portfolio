import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Blogs from './PortfolioContainer/Blogs/Blogs';
import Home from './PortfolioContainer/Home/Home';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import ProjectList from './PortfolioContainer/ProjectList/ProjectList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectList />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/aboutme' element={<AboutMe />} />
      </Routes>

    </div>
  );
}

export default App;
