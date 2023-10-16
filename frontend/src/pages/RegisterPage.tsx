import {Link} from "react-router-dom";

const RegisterPage = () => {
  return (
    <section className="container-fluid auth-container mt-5">
      <form className="form-signin">        
        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control mb-2"
          placeholder="Email address"
          required
          autoFocus
        />
        <label htmlFor="inputUsername" className="sr-only">
          Username
        </label>
        <input
          type="text"
          id="inputUsername"
          className="form-control mb-2"
          placeholder="Username"
          required
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control mb-2"
          placeholder="Password"
          required
        />
         <label htmlFor="confirmPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control mb-3"
          placeholder="Confirm Password"
          required
        />  

        <button className="btn btn-lg btn-danger btn-block mb-2" type="submit">
          Sign up
        </button>
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
      </form>
    </section>
  );
};

export default RegisterPage;