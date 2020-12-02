import React, { useState } from "react";
import Input from "./input";
import Button from "./button";

const formStyles = {
  width: "50%",
  margin: "60px auto",
  padding: "10px"
};

const Form = () => {
  const emptyForm = {
    username: {
      data: "",
      errors: false
    },
    password: {
      data: "",
      errors: false
    }
  };

  const [userForm, setUserForm] = useState(emptyForm);

  const handleChange = ({ target }) => {
    setUserForm((prevFormData) => ({
      ...prevFormData,
      [target.name]: {
        data: target.value,
        errors: false
      }
    }));
    console.log(`userForm : ${JSON.stringify(userForm)}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} style={formStyles}>
      <Input
        name="username"
        label="Username"
        value={userForm.username.data}
        type="text"
        handleChange={handleChange}
      />
      <Input
        name="password"
        label="Password"
        value={userForm.password.data}
        type="password"
        handleChange={handleChange}
      />
      <Button type="submit" label="Login" />
    </form>
  );
};

export default Form;
