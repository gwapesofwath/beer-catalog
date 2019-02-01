import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";
import Beer from './Beer';


class Catalog extends Component{
  constructor(props) {
    super(props)
    this.state = {
      beerslist: []
    }
  }

  componentDidMount(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(results=>results.json())
    .then(beers=> {
      this.setState({
        beerslist: beers
      })
    })
  }

  render(){
    console.log(this.state.beerslist)
    return(
      <div className="catalog">
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <h2 className="card-title">Hello, FitRankings...</h2>
            <div className="card-text">Check out this <Beer/>!</div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(Catalog);