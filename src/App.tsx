import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//import './App.css';
import './styles/application.less';
import Header from './components/Header/header';
import BookList from './containers/BookList/BookLists';
import BookDetail from './components/BookDetail/BookDetail';
import CreateBook from './containers/CreateBook/CreateBook';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path = "/create" component={CreateBook} />
          <Route path = "/detail/:id" component={BookDetail} />
          <Route exact path = "/" component={BookList} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
