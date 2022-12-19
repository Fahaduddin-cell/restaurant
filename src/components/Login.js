import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (info.username && info.password) {
      setIsDisabled(false);
    }
  }, [info]);

  const [nameErr, setnameErr] = useState(false);
  const [passErr, setpassErr] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const changeHandeler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submitHandeler = (e) => {
    e.preventDefault();

    let CheckName = /^[A-Za-z ]{3,30}$/;
    if (CheckName.test(info.username)) {
      setnameErr(false);
    } else {
      setnameErr(true);
    }

    let checkPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    if (checkPass.test(info.password)) {
      setpassErr(false);
    } else {
      setpassErr(true);
    }
  };

  return (
    <div>
      <section className="signIn p-4">
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card mt-4">
                <div className="card-body">
                  <form action="" onSubmit={submitHandeler}>
                    <h1 className=" text-center">Login Here</h1>

                    <div className="form-group mt-4">
                      <label className="form-label" htmlFor="">
                        User Name :
                      </label>
                      <input
                        value={info.username}
                        name="username"
                        onChange={changeHandeler}
                        className={
                          nameErr
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        type="text"
                        placeholder="user name"
                      />
                      <span className="text-danger">
                        {nameErr ? "Invalid username" : ""}
                      </span>
                    </div>

                    <div className="form-group mt-4">
                      <label className="form-label" htmlFor="">
                        Password :
                      </label>
                      <input
                        value={info.password}
                        name="password"
                        onChange={changeHandeler}
                        className={
                          passErr
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        type="password"
                        placeholder="password"
                      />

                      <span className="text-danger">
                        {passErr ? "Invalid password" : ""}
                      </span>
                    </div>

                    <div className="form-group ">
                      <div className="row">
                        <div className="col-md-6 mt-4">
                          <button
                            disabled={isDisabled}
                            type="submit"
                            className="btn btn-outline-success form-control"
                          >
                            Sign in
                          </button>
                        </div>

                        <div className="col-md-6 mt-4">
                          <Link to="/signup">
                            <button className="btn btn-outline-danger form-control">
                              Sign up
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
