// import Moda from './javascript/work_history/moda.js';
import { Moda, Fendi, Chase } from './javascript/work_history/index.js';
import { Links } from './javascript/external_links/index.js';
import JobDetails from './components/jobDetails.js';
import { Button, Typography } from '@mui/material';
import ResumeButton from './components/resumeDownload.js';
import './App.css';

function App() {



  return (
    <div className="Portfolio">
      {/* TODO: update this whole component */}
      <header className="App-header">

        <ResumeButton />

      </header>

      <div>
        <JobDetails job={Moda} company={"Moda"}/>
        <br/>
        <JobDetails job={Fendi} company={"Fendi"}/>
        <br/>
        <JobDetails job={Chase} company={"Chase"}/>
        <br/>
      </div>
    </div>
  );
}

export default App;
