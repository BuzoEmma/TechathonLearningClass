import { useEffect, useState } from "react";


const ValidateForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
    checkbox: false,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [errorValue, setErrorValue] = useState({});
  const [isSubmit, setIsSubmitt] = useState(false);

  const { name, email, password, gender, checkbox } = formValues;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const fieldValue = type === "checkbox" ? checked : value;

    setFormValues({ ...formValues, [name]: fieldValue });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorValue(ValidateForm(formValues));
    setIsSubmitt(true);
  };

  useEffect(() => {
    console.log(errorValue);
    if (Object.keys(errorValue === 0 && isSubmit)) {
      console.log(formValues);
    }
  }, [errorValue, formValues, isSubmit]);

  const ValidateForm = (value) => {
    const validError = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!value.name) {
      validError.name = "Name is required";
    }
    if (!value.email) {
      validError.email = "email is required";
    } else if (!regex.test(value.email)) {
      validError.email = "Invalide email";
    }
    if (!value.password) {
      validError.password = "password is required";
    } else if (value.password.length < 5) {
      validError.password = "password should be more than 5 characters";
    } else if (value.password.length > 15) {
      validError.password = "password should not be more than 15 characters";
    }
    if (!value.gender) {
      validError.gender = "gender is required";
    }
    if (!value.checkbox) {
      validError.checkbox = "agreement to terms is required";
    }
    return validError;
  };

  return (
    <div>
      <h1>ValidateForm</h1>
      {Object.keys(errorValue === 0 && !isSubmit) ? "" : ""}
      <form
        onSubmit={handleSubmit}
        style={{ border: "1px solid black", width: "35%", padding: "5px" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="input your name"
            value={name}
            onChange={handleChange}
          />
          <em>{errorValue.name}</em>
        </div>{" "}
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="input your email"
          />
          <em>{errorValue.email}</em>
        </div>{" "}
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={password}
            placeholder="input your password"
          />
          <em>{errorValue.password}</em>
        </div>{" "}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            onChange={handleChange}
            value={gender}
          >
            <option value="">select gender</option>
            <option value="male">Male</option>
            <option value="female">female</option>
          </select>

          <em>{errorValue.gender}</em>
        </div>{" "}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="checked">Agree Our Terms:</label>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={handleChange}
            value={checkbox}
          />

          <em>{errorValue.checkbox}</em>
        </div>
        <br />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ValidateForm;
