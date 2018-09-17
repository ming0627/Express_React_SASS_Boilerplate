import React, { Component } from 'react';
import { render } from "react-dom";
import { Switch, Route, withRouter, BrowserRouter as Router } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import logo from '../../logo.svg';
import styles from './App.scss';
import Home from './components/home';
import List from './components/list';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Lab from './components/lab';
import Login from './components/login';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <Wrapper>
      <div className={styles.app}>
        <div className={styles.header}>       
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
            <section className="route-section">
              <Switch location={location}>
                <Route exact path='/' component={Home}/>
                <Route path='/portfolio' component={Portfolio}/>
                <Route path='/lab' component={Lab}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/list' component={List}/>
                <Route path='/login' component={Login}/>
              </Switch>
            </section>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(App);
