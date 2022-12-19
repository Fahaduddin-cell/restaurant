import React, { useState } from "react";

const Signup = () => {
  const [info, setInfo] = useState({
    username: "",
    password: "",
    cpassword: "",
  });

  const [nameErr, setnameErr] = useState(false);
  const [passErr, setpassErr] = useState(false);
  const [cpassErr, setcpassErr] = useState(false);

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

    if (info.cpassword && info.cpassword === info.password) {
      setcpassErr(false);
    } else {
      setcpassErr(true);
    }
  };

  return (
    <div>
      <section className="signUpbg p-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card mt-2">
                <div className="card-body">
                  <form action="" onSubmit={submitHandeler}>
                    <h1 className=" text-center">Signup Here</h1>

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
                        type="password"
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
                        type="text"
                        placeholder="password"
                      />
                      <span className="text-danger">
                        {passErr ? "Invalid Password" : ""}
                      </span>
                    </div>

                    <div className="form-group mt-4">
                      <label className="form-label" htmlFor="">
                        Confirm Password :
                      </label>
                      <input
                        value={info.cpassword}
                        name="cpassword"
                        onChange={changeHandeler}
                        className={
                          cpassErr
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        type="text"
                        placeholder="confirm password"
                      />
                      <span className="text-danger">
                        {cpassErr ? "Password does not match" : ""}
                      </span>
                    </div>

                    <div className="form-group mt-4">
                      <button
                        type="submit"
                        className="btn btn-outline-primary form-control"
                      >
                        Sign up
                      </button>
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

export default Signup;
