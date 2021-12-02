// import Moda from './javascript/work_history/moda.js';
import { Moda, Fendi, Chase } from './javascript/work_history/index.js';
import JobDetails from './components/jobDetails.js';
import './App.css';

function App() {

  return (
    <div className="Resume">
      {/* TODO: update this whole component */}
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
