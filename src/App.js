// import Moda from './javascript/work_history/moda.js';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Moda, Fendi, Chase } from './javascript/work_history/index.js';
import Links from './javascript/external_links/index.js';
import JobDetails from './components/jobDetails.js';
import { Button, Typography } from '@mui/material';
import { HeaderButtons, Footer, Hero } from './components/index.js';
import './App.css';
import { grid } from '@mui/system';

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
            <Route path="/" element={<Hero/>}/>

            <Route path="/experiance" element={

              <div id="experiance"
                style={{
                  height: "100vh", 
                  backgroundColor: "ghostWhite",
                  top: -40,
                  zIndex: "-1",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div style={{height: "500px"}}>
                  <JobDetails job={Moda} company={"Moda"}/>
                  <br/>
                  <JobDetails job={Fendi} company={"Fendi"}/>
                  <br/>
                  <JobDetails job={Chase} company={"Chase"}/>
                  <br/>
                </div>
              </div>

            }/>
              

          </Routes>
        </main>
        
        <div
          style={{
            position: "absolute",
            bottom: 1
          }}
        >
          <Footer gitHub={Links.github} linkedIn={Links.linkedIn}/>
        </div>

      </div>

      </Router>
  );
}

export default App;
