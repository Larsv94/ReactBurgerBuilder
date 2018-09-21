import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

export default class extends Component {

  state = {
    ingredients:{
      salad:1,
      bacon:1,
      cheese:2,
      meat:2
    }
  }

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <div>Burgercontrols</div>
      </React.Fragment>
    );
  }
}
