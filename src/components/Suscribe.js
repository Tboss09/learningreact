<<<<<<< Codesandbox
import React from "react";
class Suscribe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2>{this.props.title}</h2>;
  }
}
export default Suscribe
=======
import {GoVerified} from 'react-icons/go';
function Welcome(props) {
  return (
    <div className="container">
      <div className="profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCgytuIll5z6ptUQNtjqqV9wRTWBofMZR9A&usqp=CAU"
            alt="A Man ith beards"
          />
        <p>ASABEyah Yetahey <GoVerified /></p>  
      </div>
>>>>>>> GitHub
    </div>
  );
}
export default Welcome;
