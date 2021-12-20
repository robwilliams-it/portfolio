// import Moda from './javascript/work_history/moda.js';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Moda, Fendi, Chase } from './javascript/work_history/index.js';
import Links from './javascript/external_links/index.js';
import JobDetails from './components/jobDetails.js';
import { Button, Typography } from '@mui/material';
import { HeaderButtons, Footer, Drawer } from './components/index.js';
import { Experiance, Landing, Contact, Projects } from './pages/index.js';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#00E0FF",
    },
    secondary: {
      main: "#ffcc80",
    },
  },
});


function App() {

  return (


    <Router>
      <div className="Portfolio" style={{height: "100vh"}}>
          {/* TODO: update this whole component */}
          <ThemeProvider theme={theme}>
            
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

          </ThemeProvider>

        </div>

      </Router>

  );
}

export default App;
