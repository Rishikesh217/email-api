import { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>
const SurverNew = () => <h2>SurverNew</h2>


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/surveys" component={Dashboard}></Route>
            <Route path="/surveys/new" component={SurverNew}></Route>
            {/* <Route path="/" component={Landing}></Route> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
