import React from 'react';
import './App.css';
import {setScroll} from "./redux/actions";
import {connect} from "react-redux";
import Header from "./components/Header";
import Content from "./components/Content";


class App extends React.Component {

  render() {
    return (
        <div className="App">
          <Header/>
          <Content/>
        </div>
        // <Container/>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setScroll: scroll => dispatch(setScroll(scroll)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
