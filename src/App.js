// import Moda from './javascript/work_history/moda.js';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Moda, Fendi, Chase } from './javascript/work_history/index.js';
import Links from './javascript/external_links/index.js';
import JobDetails from './components/jobDetails.js';
import { Button, Typography } from '@mui/material';
import { HeaderButtons, Footer } from './components/index.js';
import { Experiance, Landing, Contact, Projects } from './pages/index.js';
import './App.css';

function App() {

  return (


    <Router>
    <div className="Portfolio" style={{height: "100vh"}}>
        {/* TODO: update this whole component */}
        
        <HeaderButtons />
        
        <main>

          <Routes>
            <Route path="/" element={<Landing/>}/>

            <Route path="/experiance" element={ <Experiance/> }/>

            <Route path="/contact" element={ <Contact/> }/>

            <Route path="/projects" element={ <Projects/> }/>

          </Routes>

        </main>
        

        <Footer gitHub={Links.github} linkedIn={Links.linkedIn}/>


      </div>

      </Router>
  );
}

export default App;
