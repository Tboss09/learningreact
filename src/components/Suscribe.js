function Welcome(props) {
  return (
    <div className="Suscribe">
      <h3>Suscribe</h3>
      <p>Sign up with your email address</p>
      <form className="signupForm">
        <div className="inputField">
          <input type="text" placeholder="Type name here" />
          <input type="text" placeholder="Type Surname" />
          <input type="email" placeholder="Type email here" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Welcome;
