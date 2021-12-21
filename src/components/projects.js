import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      {/* React Tab */}
      return (
        <div className="projects-grid">

          {/* React - Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/modern-technologies-1/32/technology_gaming_technology_joystick_gear_cogwheel-1024.png?1) center / cover'}}>
            Portfolio Project
          </CardTitle>
          <div class="center-align">
          <CardText>
            My most recent React project would be creating this website.
             
          </CardText>
            <CardActions border>
              <a href="https://google.com/" rel="noreferrer" target="_blank">
                <Button colored >Website</Button>
              </a>
              <a href="https://github.com/davidpolanco27/Portfolio" rel="noreferrer" target="_blank">
                <Button colored >Github</Button>
              </a>
            </CardActions>
          </div>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* React - Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/NfJN0jE.png) center / cover'}}>
          Design Pad Group Project
        </CardTitle>
        <div class="center-align">
        <CardText>
          This group project was to use the funtionallity of React to create a design pad where a user can add and remove colors at will.
        </CardText>
          <CardActions border>
            <a href="https://github.com/MarianoCMP/design-pad" rel="noreferrer" target="_blank">
              <Button colored >Github</Button>
            </a>
          </CardActions>
        </div>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

        {/* React - Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media.gcflearnfree.org/ctassets/topics/241/Favs1_2_1.png) center / cover'}}>
          My Favorite Links
        </CardTitle>
        <div class="center-align">
        <CardText>
          This homework was to test our skills using App.js and a Link Container.
        </CardText>
          <CardActions border>
            <a href="https://github.com/davidpolanco27/FavLinks" rel="noreferrer" target="_blank">
              <Button colored >Github</Button>
            </a>
          </CardActions>
        </div>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

        </div>
      )
    }  else if (this.state.activeTab === 1) {
      {/* eclipse Tab */}
      return (
        <div className="projects-grid">

          {/* eclipse - Projects 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1400/1*20hS5w0ENZraHIzP0y4lpA.png) center / cover'}}>
            Projects
      //    </CardTitle>
          <div class="center-align">
          <CardText>
            <b><i>Under Construction</i></b><br />
             My first time using Eclipse
           
         </CardText>
         <CardActions border>
            <a href="https://github.com/davidpolanco27/CMP167FALL2019DavidPolanco" rel="noreferrer" target="_blank">
             <Button colored >Github</Button>
            </a>
         </CardActions>
          </div>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
         </CardMenu>
       </Card>

        </div>
      )
    } else if (this.state.activeTab === 2) {
      {/* R Tab */}
      return (
        <div className="projects-grid">

          {/* R - Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg) center / cover'}}>
            React Project
          </CardTitle>
          <CardText>
            First time using React.
          </CardText>
          <div class="center-align">
            <CardActions border>
              <a href="https://github.com/davidpolanco27/components" rel="noreferrer" target="_blank">
                <Button colored >Github</Button>
              </a>
              
            </CardActions>
          </div>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        </div>
      )
    }
  }

     render() {
      return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId})}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Eclipse</Tab>
          <Tab>R</Tab>

        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>
      </div>
      );
    }
  }
export default Projects;
