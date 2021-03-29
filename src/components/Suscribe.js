import React from "react";
class Suscribe extends React.Component {
  greetPeople = () => {
    console.log("Clicked a button");
  };
  render() {
    const { firstname, button } = this.props.data;
    return (
      <div>
        <h2>{this.props.title}</h2>;<p>{firstname}</p>
        <p>{firstname}</p>
        <button onClick={this.greetPeople}>{button}</button>
      </div>
    );
  }
}
export default Suscribe;
