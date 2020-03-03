import React from 'react';
import './App.css';
import { GlobalContextProvider } from './Components/GlobalContextProvider';
import LogIn from './Components/Login' 
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function App() {
  return (<>
  <Breadcrumbs aria-label="breadcrumb" style={{justifyContent:"center"}}>
  <Link color="inherit" href="/">
    About
  </Link>
  <Link color="inherit" href="/getting-started/installation/">
    Trivia
  </Link>
  <Typography color="textPrimary">Log in</Typography>
</Breadcrumbs>
  <div style={{display:"flex", justifyContent:"center", paddingTop:"1em"}}>
  <h1 style={{paddingRight: "2em", paddingTop:"1em", color: "#7059D3"}}> Welcome! </h1>
  <GlobalContextProvider settings={{password: 'bailoyo', username: 'aquiles',}}>

      <LogIn></LogIn>

    </GlobalContextProvider>
  </div>
  </>
  )
}
  
export default App;
