import React, { useState } from "react";
import Input from "./input";
import Button from "./button";

const formStyles = {
  width: "50%",
  margin: "30px auto",
  padding: "0"
};

const Form = () => {
  const emptyForm = {
    username: "",
    password: ""
  };

  const [userForm, setUserForm] = useState(emptyForm);

  const handleChange = ({ target }) => {
    setUserForm((prevFormData) => ({
      ...prevFormData,
      [target.name]: target.value
    }));
    console.log(`userForm : ${JSON.stringify(userForm)}`);
  };

  return (
    <form style={formStyles}>
      <Input
        name="username"
        label="Username"
        value={userForm.username}
        type="text"
        handleChange={handleChange}
      />
      <Input
        name="password"
        label="Password"
        value={userForm.password}
        type="password"
        handleChange={handleChange}
      />
      <Button type="submit" label="Login" />
    </form>
  );
};

export default Form;
