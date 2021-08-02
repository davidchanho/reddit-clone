import { useMutation } from "@apollo/client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { ADD_COMMENT } from "../../queries/comments";

function CreateComment() {
  const params = useParams();

  const initialForm = {
    body: "",
    user: "610207571eb82f228f738fa1",
    post: params._id,
  };

  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: ["FETCH_POST"],
    variables: {
      item: initialForm,
    },
  });

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
    addComment();
    setForm({
      item: initialForm,
    });
  };

  return (
    <form className="flex flex-col w-full mx-auto" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={form.item.body}
        name="body"
        placeholder="body"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateComment;
