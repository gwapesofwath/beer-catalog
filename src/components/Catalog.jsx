import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../stylesheet.css";
import Beer from "./Beer";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerslist: []
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then(res => res.json())
      .then(beerslist => {
        this.setState({ beerslist });
      });
  }

  render() {
    console.log(this.state.beerslist);
    return (
      <div className="bg-dark">
        <div className="banner" />
        <div >
          {this.state.beerslist.map(item => (
            <div key={item.id} className="catalog">
              <div className="item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <img src={item.image_url} alt={item.tagline} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default hot(module)(Catalog);
