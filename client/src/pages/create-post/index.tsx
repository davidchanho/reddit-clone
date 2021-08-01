import { useMutation, useQuery } from "@apollo/client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ISubreddit } from "../../../../shared/types";
import { ADD_POST, FETCH_POSTS, FETCH_SUBREDDITS } from "../../queries";

const initialForm = {
  title: "",
  body: "",
  user: "610207571eb82f228f738fa1",
  subreddit: "610207251eb82f228f738f9f",
};

function CreatePostPage() {
  const [form, setForm] = useState({ item: initialForm });
  const { loading, error, data } = useQuery(FETCH_SUBREDDITS);
  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: ["FETCH_POSTS"],
  });
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
    addPost({
      variables: form,
    });
    setForm({
      item: initialForm,
    });
    navigate("/");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  return (
    <form className="flex flex-col w-full mx-auto" onSubmit={handleSubmit}>
      <select
        value={form.item.subreddit}
        name="subreddit"
        onChange={handleChange}
      >
        {data.subreddits.map((subreddit: ISubreddit) => (
          <option key={subreddit._id} value={subreddit._id}>
            {subreddit.name}
          </option>
        ))}
      </select>

      <input
        onChange={handleChange}
        type="text"
        value={form.item.title}
        name="title"
        placeholder="title"
      />

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

export default CreatePostPage;
