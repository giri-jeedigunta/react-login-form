import React, { useState } from "react";
import Input from "./input";

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
    <form>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
