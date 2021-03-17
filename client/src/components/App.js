//import logo from '../logo.svg';
import '../style/App.css';
import { Header } from "semantic-ui-react";
import SideMenu from "./SideMenu";
import Stocks from './Stocks';
import AboutUs from './AboutUs';
import Companies from './Companies';
import { Grid, Menu } from "semantic-ui-react";

import React,{useState} from 'react'

function App() {
  const defaultState={
    Stocks:false,
    AboutUs:false,
    Companies:false

  }
  const [state,setState]=useState({
    Stocks:true,
    AboutUs:false,
    Companies:false

  })
  let  handleItemClick=(name)=>{

    setState({...defaultState,[name]:true})

  }
  return (
    <>
    <div className="App">
    <Header as="h1" className="stockHeader" style={{margin:0, minHeight: 50}} color="pink">Stocker</Header>
  </div>
    <Grid>
       
    <SideMenu handleItemClick={handleItemClick}/>
        
        <Grid.Column stretched width={12}>

          {state.Stocks?<Stocks/>:""}
          {state.AboutUs? <AboutUs/>:""}
          {state.Companies?<Companies/>:""}

       
          
         
          
        </Grid.Column>

      
    </Grid>
    </>
  );
}

export default App;
