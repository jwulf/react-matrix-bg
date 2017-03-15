import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class MatrixBackdrop extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      cells: this.makeCells(
        this.props.settings.colnum,
        this.props.settings.rownum,
        this.props.settings.cellsize,
      ),
    }

    // Toggle the state every second
    setInterval(() => {
      this.setState({ 
        cells: this.makeCells(
          this.props.settings.colnum,
          this.props.settings.rownum,
          this.props.settings.cellsize,
        ),
      })
    }, this.props.settings.milliseconds)
  }

  render() {
    const styles = {
      container: {
        position: 'relative',
        width: '100%',
        height: '100%',
      },
      matrix: {
        position: 'absolute',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      },
      content: Object.assign({}, {
        position: 'absolute',
        width: '100%',
        height: '100%',
      }, this.props.settings.style),
    }

    return (
      <div className="MatrixBackdrop" style={styles.container}>
        <div style={styles.matrix}>
          {this.state.cells}
        </div>
        <div style={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }

  randColorPair() {
    const colorPairs = [
      // 0: color, 1: bg-color
      // light on dark
      ['#046dce', '#000b23'],
      ['#046dce', '#000b23'],
      ['#046dce', '#000b23'],
      ['#046dce', '#000b23'],
      ['#046dce', '#000b23'],
      ['#046dce', '#000b23'],
      ['#046dce', '#000b23'],
      ['#046dce', '#000b23'],
      ['#046dce', '#000b23'],
      // lighter on dark
      ['#078ccf', '#000b23'],
      ['#078ccf', '#000b23'],
      ['#078ccf', '#000b23'],
      ['#078ccf', '#000b23'],
      ['#078ccf', '#000b23'],
      ['#078ccf', '#000b23'],
      ['#078ccf', '#000b23'],
      ['#078ccf', '#000b23'],
      // dark on dark
      ['#013369', '#000b23'],
      ['#013369', '#000b23'],
      ['#013369', '#000b23'],
      ['#013369', '#000b23'],
      ['#013369', '#000b23'],
      ['#013369', '#000b23'],
      // light on less-dark
      ['#044392', '#002865'],
      ['#044392', '#002865'],
      ['#044392', '#002865'],
      ['#044392', '#002865'],
      // lighter on light
      ['#02a8d8', '#0051b2'],
      // bright on light
      ['#01f3f4', '#0051b2'],
      // bright on more-light
      // ['#01f3f4', '#01a1ce'],
    ];

    return colorPairs[Math.floor(Math.random() * colorPairs.length)];
  }

  randSymbol() {
    const symbols = [
      '0',
      '0',
      '1',
    ];
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  makeCells(colnum, rownum, cellsize) {
    const cells = [];
    for (let y=0; y < rownum; y++) {
      for (let x=0; x < colnum; x++) {
        let key = `${y}:${x}`
        cells.push(this.makeCell(key, cellsize));
      } 
    }
    // console.log('cells', cells);
    return cells;
  }

  makeCell(key, cellsize) {
    const colorPair = this.randColorPair();
    const style = {
      width: `${cellsize}px`,
      height: `${cellsize}px`,
      lineHeight: `${cellsize}px`,
      display: 'inline-block',
      color: colorPair[0],
      backgroundColor: colorPair[1],
      borderRadius: `${cellsize/2}px`,
    };
    // console.log('style', style);
    return (
      <div key={key} style={style}>{this.randSymbol()}</div>
    );
  }
}

export default MatrixBackdrop;
