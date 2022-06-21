import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Spinner } from "react-bootstrap";
import { isEmail, isEmpty } from "../../utils/validation";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { USER_RESET } from "../../redux/constants/userConstants";

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const redirect = location.state?.path || "/";

  const { email, password } = newUser;

  const [typePass, setTypePass] = useState(false);

  const handleChangeInput = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
    if (isEmpty(email) || isEmpty(password)) {
      toast.error("Please fill up all fields.");
      return;
    }
    if (!isEmail(email)) {
      return toast.error("Email must be a valid Email.");
    }
    if(email==="dobich1937@gmail.com"&&password==="123456"){
      dispatch(login(email, password));
    }
    setNewUser({ email: "", password: "" });
  };



  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: USER_RESET });
    } else if (currentUser) {
      toast.success("Login Successfull.");
      navigate(redirect, { replace: true });
    }
  }, [navigate, redirect, currentUser, error, dispatch]);

  return (
    <section className="section">
      <div className="contact">
        <div className="contact__container">
          <h3 className="contact__title">Login</h3>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form__div">
              <label htmlFor="email" className="contact__form__div-tag">
                Email
              </label>
              <input
                className="contact__form__div-input"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChangeInput}
                placeholder="Your Email"
              />
            </div>
            <div className="contact__form__div pass">
              <label htmlFor="password" className="contact__form__div-tag">
                Password
              </label>
              <input
                className="contact__form__div-input"
                type={typePass ? "text" : "password"}
                name="password"
                value={password}
                id="password"
                onChange={handleChangeInput}
                placeholder="Your Password"
              />
              <small onClick={() => setTypePass(!typePass)}>
                {typePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </small>
            </div>
            <button
              className="button"
              type="submit"
              // disabled={email && password ? false : true}
            >
              {loading ? <Spinner animation="border" size="sm" /> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
