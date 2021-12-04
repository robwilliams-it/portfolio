// import Moda from './javascript/work_history/moda.js';
import { Moda, Fendi, Chase } from './javascript/work_history/index.js';
import Links from './javascript/external_links/index.js';
import JobDetails from './components/jobDetails.js';
import { Button, Typography } from '@mui/material';
import HeaderButtons from './components/header.js';
import Footer from './components/footer.js';
import './App.css';

function App() {

  return (
    <div className="Portfolio" style={{height: "100vh"}}>
      {/* TODO: update this whole component */}
      <header 
        className="App-header" 
        position="absolute"
      >
  
        <HeaderButtons />

      </header>

      <div
        style={{height: "100vh", backgroundColor: "linen"}}
      >

      </div>

      <div id="experiance"
        style={{height: "100vh", backgroundColor: "ghostWhite"}}
      >
        <JobDetails job={Moda} company={"Moda"}/>
        <br/>
        <JobDetails job={Fendi} company={"Fendi"}/>
        <br/>
        <JobDetails job={Chase} company={"Chase"}/>
        <br/>
      </div>

      <Footer gitHub={Links.github} linkedIn={Links.linkedIn}/>

    </div>
  );
}

export default App;
