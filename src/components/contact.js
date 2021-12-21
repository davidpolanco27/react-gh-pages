import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">

          {/*Left Half Cell*/}
          <Cell col={6}>
            <h2>David Polanco</h2>
            <img
              src="https://cdn4.iconfinder.com/data/icons/modern-technologies-1/32/technology_gaming_technology_joystick_gear_cogwheel-1024.png"
              alt="avatar"
              style={{height: '250px'}}
              />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              <i className="far fa-envelope" rel="noreferrer" aria-hidden='true'/> <br />
                david.polanco1@lc.cuny.edu
            </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
