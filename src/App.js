import "./style.scss";
import React from "react";
import "./styles.css";
import Suscribe from "./components/Suscribe";

export default class App extends React.Component {

  render() {  
  const data = {
    firstname:"Tayo AKosile",
    button:"Click me"
  }
  
    return(
      <Suscribe data={data} title="I Just learnt react ckass methods"/>
    )
  }
}
