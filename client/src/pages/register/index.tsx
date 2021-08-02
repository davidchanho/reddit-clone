import { useMutation } from "@apollo/client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { REGISTER_USER } from "../../queries";

const initialForm = {
  name: "",
  email: "",
  avatar: "",
};

function Register() {
  const [register] = useMutation(REGISTER_USER);
  const [form, setForm] = useState({ item: initialForm });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      item: {
        ...form.item,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register();
    setForm({
      item: initialForm,
    });
  };

  return (
    <form className="flex flex-col w-full mx-auto" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={form.item.name}
        name="name"
        placeholder="name"
      />

      <input
        onChange={handleChange}
        type="text"
        value={form.item.email}
        name="email"
        placeholder="email"
      />

      <input
        onChange={handleChange}
        type="text"
        value={form.item.avatar}
        name="avatar"
        placeholder="avatar"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;
