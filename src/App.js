import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MatrixBackdrop from './MatrixBackdrop';

class App extends Component {

  render() {
    const appStyle = {
      position: 'relative',
      width: '100%',
      height: '1000px',
      backgroundColor: 'black',
    }

    const matrixSettings = {
      colnum: 30,
      rownum: 50,
      cellsize: 30,
      milliseconds: 200,
      style: {
        textAlign: 'center',
        marginTop: '200px',
      },
    }

    return (
      <div className="App" style={appStyle}>
        <MatrixBackdrop settings={matrixSettings}>
          <h1 style={{color: 'white'}}>React Matrix Backdrop</h1>
        </MatrixBackdrop>
      </div>
    )
  }
}

export default App;
