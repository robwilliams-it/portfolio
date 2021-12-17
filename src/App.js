// import Moda from './javascript/work_history/moda.js';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Moda, Fendi, Chase } from './javascript/work_history/index.js';
import Links from './javascript/external_links/index.js';
import JobDetails from './components/jobDetails.js';
import { Button, Typography } from '@mui/material';
import { HeaderButtons, Footer } from './components/index.js';
import { Experiance, Landing } from './pages/index.js';
import './App.css';

function App() {

  return (


    <Router>
    <div className="Portfolio" style={{height: "100vh", overflow: "hidden"}}>
        {/* TODO: update this whole component */}
        
        <HeaderButtons />
        
        <main
          style={{
            height: "100vh",
            overflow: "scroll"
          }}
          >

          <Routes>
            <Route path="/" element={<Landing/>}/>

            <Route path="/experiance" element={ <Experiance/> }/>

          </Routes>

        </main>
        

        <Footer gitHub={Links.github} linkedIn={Links.linkedIn}/>


      </div>

      </Router>
  );
}

export default App;
