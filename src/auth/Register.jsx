import React, { useState, useContext } from "react";
import { OPEN_MODAL } from "../utils/actions";
import { SiteContext, useGlobalContext } from "../utils/Context";

const Register = (props) => {
  // const dataFromContext = useContext(SiteContext);
  const dataFromContext = useGlobalContext();
  const [formComplete, setFormComplete] = useState(false);

  const [register, setRegister] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const { dispatch } = dataFromContext;

  const formSubmit = (e) => {
    const { fullname, username, email, password } = register;
    e.preventDefault();
    if (!fullname || !username || !email || !password) {
      setFormComplete(true);
      console.log("One of the forms is empty.");
    } else {
      setFormComplete(false);
      console.log(register);
    }
  };

  const inputChange = (e) => {
    // console.log(register);
    const name = e.target.name;
    const value = e.target.value;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="modal__heading">
        <h3>create new account</h3>
      </div>
      <div className="form-group">
        <input
          type="text"
          name="fullname"
          placeholder="Enter your fullname"
          className="form-group__control"
          onChange={inputChange}
          value={register.fullname}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          className="form-group__control"
          onChange={inputChange}
          value={register.username}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="form-group__control"
          onChange={inputChange}
          value={register.email}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="form-group__control"
          onChange={inputChange}
          value={register.password}
        />
      </div>
      {formComplete && (
        <p style={{ color: "red", margin: "1rem 0" }}>
          Kindly fill all the form fields before you can register
        </p>
      )}
      <div className="form-group space_between">
        <button className="btn-dark">Register</button>
        <span
          onClick={() =>
            dispatch({
              type: OPEN_MODAL,
              payload: { modalType: props.targetModal },
            })
          }
        >
          Already have an account?
        </span>
      </div>
    </form>
  );
};

export default Register;
