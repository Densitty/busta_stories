import React, { useState } from "react";
import { OPEN_MODAL } from "../utils/actions";
import { useGlobalContext } from "../utils/Context";

const Login = (props) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [formComplete, setFormComplete] = useState(false);
  // let history = useHistory();
  const dataFromContext = useGlobalContext();
  const { closeModal, dispatch } = dataFromContext;

  const loginSubmit = (e) => {
    e.preventDefault();

    const { email, password } = login;
    e.preventDefault();
    if (!email || !password) {
      setFormComplete(true);
      console.log("One of the forms is empty.");
    } else {
      setFormComplete(false);
      closeModal();
      console.log(login);
    }

    // closeModal();
    // history.push("/");
  };

  const changeInput = (e) => {
    // console.log(register);
    const name = e.target.name;
    const value = e.target.value;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={loginSubmit}>
        <div className="modal__heading">
          <h3>Login</h3>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-group__control"
            name="email"
            value={login.email}
            onChange={changeInput}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter your password"
            className="form-group__control"
            name="password"
            value={login.password}
            onChange={changeInput}
          />
        </div>
        {formComplete && (
          <p style={{ color: "red", margin: "1rem 0" }}>
            Please provide the correct email and password
          </p>
        )}
        <div className="form-group space_between">
          <button className="btn-dark">Login</button>
          <span
            onClick={() =>
              dispatch({
                type: OPEN_MODAL,
                payload: { modalType: props.targetModal },
              })
            }
          >
            Not yet registered? Please register
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
