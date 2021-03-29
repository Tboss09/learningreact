import "./style.scss";
import React from "react";
import "./styles.css";
import Suscribe from "./components/Suscribe";

class TechList extends React.Component {
  render() {
    const { techs } = this.props;
    return techs.map((tech, index) => <li > key ={index} {tech}</li>);
  }
}

export default class App extends React.Component {
  render() {
    const data = {
      firstname: "Tayo AKosile",
      button: "Click me"
    };
    const techs = ["HTML", "CSS", "JAVASRIPT", "REACT", "ANGULAR"];
    return (
      <div>
        <Suscribe data={data} title="I Just learnt react class methods" />
        <ul>
          <TechList techs={techs} />
        </ul>
      </div>
    );
  }
}
