// import Moda from './javascript/work_history/moda.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Links from './javascript/external_links/index.js';
import { HeaderButtons, Footer } from './components/index.js';
import { Experience, Landing, Contact, Projects } from './pages/index.js';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#00E0FF",
    },
    secondary: {
      main: "#ffcc80",
    },
    inset: {
      main: "#bdbdbd"
    }
  },
});


function App() {

  return (


    <Router>
      <div className="Portfolio">

          <ThemeProvider theme={theme}>

            
            <HeaderButtons />
            <main>

            <Landing/>
            <Experience/>
            <Projects/>
            <Contact/>

            </main>
            

            <Footer gitHub={Links.github} linkedIn={Links.linkedIn}/>

          </ThemeProvider>

        </div>

      </Router>

  );
}

export default App;
