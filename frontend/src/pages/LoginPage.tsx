import {Link} from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="container-fluid auth-container mt-5">
      <form className="form-signin">        
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername" className="sr-only">
          Username
        </label>
        <input
          type="text"
          id="inputUsername"
          className="form-control mb-2"
          placeholder="Username"
          required
          autoFocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control mb-3"
          placeholder="Password"
          required
        />        
        <button className="btn btn-lg btn-danger btn-block mb-2" type="submit">
          Sign in
        </button>
        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
      </form>
    </section>
  );
};

export default LoginPage;
