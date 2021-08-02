import { useMutation } from "@apollo/client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { ADD_COMMENT } from "../../queries/comments";

function CreateComment() {
  const initialForm = {
    body: "",
    user: "61078b338331408da0a860d7",
    post: "61078bd78331408da0a860de",
  };

  const [form, setForm] = useState(initialForm);

  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: ["FETCH_POST", "FETCH_COMMENTS"],
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
