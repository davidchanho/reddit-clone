import { useMutation } from "@apollo/client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../../queries";

const initialForm = {
  email: "",
};

function Login() {
  const [form, setForm] = useState(initialForm);

  const [login, { loading, data, client }] = useMutation(LOGIN_USER, {
    variables: form,
  });

  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
    setForm(initialForm);
    // navigate("/");
    client.resetStore();
  };

  if (loading) return null;

  console.log(data);

  return (
    <form className="flex flex-col w-full mx-auto" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={form.email}
        name="email"
        placeholder="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
