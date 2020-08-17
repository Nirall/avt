import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Switch, Redirect, } from 'react-router-dom';
import URLs from './URLs';

class App extends React.Component {
  state = {
    activePage: 'HomePage',
  };

  render() {
    const routeList = URLs.map((url) => {
      if (url.path === '/') {
        return <Route exact path = { url.path } component = { url.component } key = { url.name } />
      } 
      
      return <Route path = { url.path } component = { url.component } key = { url.name } />
    });

    return (
      <div className = "app">
        <Header />
          <Switch>
            { routeList }
            <Redirect to = '/' />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
