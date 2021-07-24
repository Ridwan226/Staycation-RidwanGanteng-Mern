import React, {Component} from 'react';

import Header from 'parts/Header';
import landingPage from 'assets/json/landingPage';
import Hero from 'parts/Hero';

export default class LandingPages extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero} />
      </>
    );
  }
}
