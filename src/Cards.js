import React from 'react';
import './Cards.scss';
import shareEat from './images/share-eat.jpg';
import nerdLogo from './images/nerd-logo.png';
import ticTac from './images/tic-tac-toe.jpg';
import wordpress from './images/wordpress.gif';

export default class Cards extends React.Component {

    render() {
        return(
            <div class="cards-wrapper">
            <h1 id="#projects">Projects</h1>
            <div class="cols">
                      <div class="col" ontouchstart="this.classList.toggle('hover');">
                          <div class="container">
                              <div class="front">
                                  <div class="inner">
                                    <img src={shareEat} className="share-logo" alt="share-eat" />
                                  </div>
                              </div>
                              <div class="back">
                                  <div class="inner">
                                    <p>Share Eat</p>
                                    <span>Restaurant Curation App (Front-End Challenge)</span>
                                    <a href="http://share-eat.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                        <button className="links"> Demo </button>
                                    </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col" ontouchstart="this.classList.toggle('hover');">
                          <div class="container">
                              <div class="front">
                                  <div class="inner">
                                      <img src={nerdLogo} className="nerd-logo" alt="nerd-logo" />
                                  </div>
                              </div>
                              <div class="back">
                                  <div class="inner">
                                        <p>Shopping Cart</p>
                                        <span>Simple Shopping Cart made with React and Redux</span>
                                        <button className="links"> Demo </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col" ontouchstart="this.classList.toggle('hover');">
                          <div class="container">
                              <div class="front">
                                  <div class="inner">
                                        <img src={ticTac} className="tic-tac-logo" alt="tic-tac-logo" />
                                  </div>
                              </div>
                              <div class="back">
                                  <div class="inner">
                                    <p>Tic Tac Toe</p>
                                    <span>Tic Tac Toe Game made with ReactJS</span>
                                    <button className="links"> Demo </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col" ontouchstart="this.classList.toggle('hover');">
                          <div class="container">
                              <div class="front">
                                  <div class="inner">
                                      <img src={wordpress} className="wp-logo" alt="wp-logo"/>
                                  </div>
                              </div>
                              <div class="back">
                                  <div class="inner">
                                        <p>Aurum</p>
                                        <span>React and Wordpress Web App (Front-End Challenge)</span>
                                        <button className="links"> Github </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
           </div>
        );
    }
}