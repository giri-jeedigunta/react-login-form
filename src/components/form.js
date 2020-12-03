import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import ErrorMessage from "./errorMessage";

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
  const [errorCounts, updateErrorCounts] = useState(0);

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
    updateErrorCounts(0);

    const currentForm = userForm;
    for (let field in currentForm) {
      console.log(`data =>`, currentForm[field].data);
      if (
        undefined !== currentForm[field].data &&
        !currentForm[field].data.length
      ) {
        updateErrorCounts((errorCounts) => errorCounts + 1);
        currentForm[field].errors = `Invalid ${field} !!!`;
      }
    }
    setUserForm((prevFormData) => ({ ...currentForm }));
    console.log(`userForm : ${JSON.stringify(userForm)}`);
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
      {userForm.username.errors.length && (
        <ErrorMessage text={userForm.username.errors} />
      )}
      <Input
        name="password"
        label="Password"
        value={userForm.password.data}
        type="password"
        handleChange={handleChange}
      />
      {userForm.password.errors.length && (
        <ErrorMessage text={userForm.password.errors} />
      )}
      <Button type="submit" label="Login" />
      {errorCounts}
    </form>
  );
};

export default Form;
