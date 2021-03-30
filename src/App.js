import "./style.scss";
import React from "react";
import "./styles.css";
import Suscribe from "./components/Suscribe";

class Button extends React.Component {
  render() {
    const { title, onClick } = this.props;
    return <button onClick={onClick}>{title}</button>;
  }
}

class UpdateNumber extends React.Component {
  render() {
    const { count } = this.props;
    return <h1>{count}</h1>;
  }
}

class TechList extends React.Component {
  render() {
    const { techs } = this.props;
    return techs.map((tech, index) => <li key={index}> {tech}</li>);
  }
}

export default class App extends React.Component {
  state = {
    count: 0
  };

  render() {
    const count = this.state.count;
    const data = {
      firstname: "Tayo AKosile",
      button: "Click me"
    };
    const techs = ["HTML", "CSS", "JAVASRIPT", "REACT", "ANGULAR"];

    return (
      <div>
        <UpdateNumber count={count} />

        <Suscribe data={data} title="I Just learnt react class methods" />
        <ul>
          <TechList techs={techs} />
        </ul>

        <Button
          title="Add One"
          onClick={() => this.setState({ count: count + 1 })}
        />

        <Button
          title="Subtract  One"
          onClick={() => this.setState({ count: count - 1 })}
        />
      </div>
    );
  }
}
