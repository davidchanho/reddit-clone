import { useMutation } from "@apollo/client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import useClient from "../../hooks/client";
import { ADD_COMMENT } from "../../queries/comments";

function CreateComment() {
  const params = useParams();
  const initialForm = {
    body: "",
    user: "61078b338331408da0a860d7",
    post: params._id,
  };

  const { clearCache } = useClient();

  const [form, setForm] = useState(initialForm);

  const [addComment] = useMutation(ADD_COMMENT, {
    variables: { item: form },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addComment();
    setForm(initialForm);
    clearCache();
  };

  return (
    <form className="flex flex-col w-full mx-auto" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={form.body}
        name="body"
        placeholder="body"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateComment;
