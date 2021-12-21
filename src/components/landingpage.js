import React from 'react';
import { Grid, Cell } from 'react-mdl';

function LandingPage() {
  return (
    <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/modern-technology-9/128/Technology-Icons-Outlined-46-1024.png"
          alt="avatar"
          className="avatar-img"
        />

        <div className="banner-text">
          <h1>Web Developer</h1>
          <hr/>
          <p>HTML/CSS | JavaScript | React | Node.JS | Express  </p>

          <div className="social-links">

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/david-polanco-20436b135//" rel="noreferrer" target="_blank">
              <i className="fab fa-linkedin" rel="noreferrer" aria-hidden='true' />
            </a>

            {/* GitHub */}
            <a href="https://github.com/davidpolanco27" rel="noreferrer" target="_blank">
              <i className="fab fa-github-square" rel="noreferrer" aria-hidden='true' />
            </a>

          </div>
        </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default LandingPage;
