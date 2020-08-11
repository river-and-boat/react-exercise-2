import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mobile from './components/mobile/Mobile';
import Car from './components/car/Car';

// eslint-disable-next-line no-undef
const $ = require('jquery');
window.$ = $;
window.jQuery = $;
// eslint-disable-next-line no-undef
require('bootstrap/dist/js/bootstrap.min');

class App extends Component {
  state = {
    data: [],
    carNum: 0,
  };

  url = 'http://localhost:3000/products';

  async componentDidMount() {
    const resultPromise = await fetch(this.url);
    const data = await resultPromise.json();
    this.setState({
      data: data,
    });
  }

  // eslint-disable-next-line no-unused-vars
  async componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    return (
      <main>
        <div id="header" className="bg-primary col-md-12">
          <div className="col-md-3">
            <h2>Store</h2>
          </div>
          <div id="car" className="col-md-9">
            <Car carNum={this.state.carNum}></Car>
          </div>
        </div>
        <div id="body" className="col-md-12">
          <Mobile
            mobiles={this.state.data}
            type="iPhone"
            method={this.AddToCar}
          ></Mobile>
          <Mobile
            mobiles={this.state.data}
            type="HUAWEI"
            method={this.AddToCar}
          ></Mobile>
        </div>
      </main>
    );
  }

  AddToCar = () => {
    this.setState({ carNum: this.state.carNum + 1 });
  };
}

export default App;
