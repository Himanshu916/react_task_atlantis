import { useState } from "react";

import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { validate } from "../../utils/validate";
import { useAuthContext } from "../../contexts/AuthContext";
import { loginUser } from "../../utils/loginUser";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { state, dispatch } = useAuthContext();
  const navigate = useNavigate();
  console.log(state);
  function submitHandler(e) {
    console.log("submitted");

    e.preventDefault();
    if (!email || !password) {
      setErrors({
        emailError: email ? "" : "Please Enter Email",
        passwordError: password ? "" : " Please Enter Password",
      });

      return;
    }
    if (email) {
      const x = validate(email);
      if (!x)
        setErrors((i) => ({
          ...i,
          emailError: "Please Enter correct email",
          password: "",
        }));
      else {
        setErrors({});
      }
    }
    const user = loginUser({ email, password });
    if (!user) {
      window.alert("There is mismatch between email and password");
      return;
    }

    if (user) {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, isAuthenticated: true })
      );
      dispatch({
        type: "user/login",
        payload: user,
      });
    }

    setErrors({});
    navigate("/map");
  }

  return (
    <Form onSubmit={submitHandler}>
      <FormRowVertical
        error={Object.keys(errors).length > 0 ? errors.emailError : ""}
        label="Email address"
      >
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical
        error={Object.keys(errors).length > 0 ? errors.passwordError : ""}
        label="Password"
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button onClick={submitHandler}>Log In</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
