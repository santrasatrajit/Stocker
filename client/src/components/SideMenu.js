import React, { Component } from "react";
import { Grid, Menu } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

import Stocks from "./Stocks";
import AboutUs from "./AboutUs";
import Companies from "./Companies";


class SideMenu extends Component {
  state = { activeItem: "stocks" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='stocks'
              active={activeItem === 'stocks'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='companies'
              active={activeItem === 'companies'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='about us'
              active={activeItem === 'about us'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <div style={{marginTop:10}}>
            {(activeItem === "stocks") ? <Stocks /> : (activeItem === "companies") ? <Companies /> : <AboutUs />}
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default SideMenu;