
import { Grid, Menu } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

import React from 'react'

function SideMenu({handleItemClick}) {
  return (
    <>
     
        <Grid.Column width={4} style={{cursor:"pointer"}}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='stocks'
              
              onClick={()=>handleItemClick("Stocks")}
            />
            <Menu.Item
              name='companies'
              
              onClick={()=>handleItemClick("Companies")}
            />
            <Menu.Item
              name='about us'
          
              onClick={()=>handleItemClick("AboutUs")}
            />
          </Menu>
        </Grid.Column>

    

        </>
  )
}

export default SideMenu





