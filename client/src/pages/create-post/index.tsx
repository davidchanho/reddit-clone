import { useMutation, useQuery } from "@apollo/client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { ISubreddit } from "../../../../shared/types";
import { ADD_POST, FETCH_SUBREDDITS } from "../../queries";

const initialForm = {
  title: "asdf",
  body: "asdfasdf",
  user: "610207571eb82f228f738fa1",
  subreddit: "610207251eb82f228f738f9f",
};

function CreatePostPage() {
  const [form, setForm] = useState({ post: initialForm });
  const { loading, error, data } = useQuery(FETCH_SUBREDDITS);
  const [addPost] = useMutation(ADD_POST);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({
      post: {
        ...form.post,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    addPost({
      variables: form,
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  return (
    <form className="flex flex-col w-6/12 mx-auto" onSubmit={handleSubmit}>
      <select
        value={form.post.subreddit}
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
        value={form.post.title}
        name="title"
        placeholder="title"
      />

      <input
        onChange={handleChange}
        type="text"
        value={form.post.body}
        name="body"
        placeholder="body"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default CreatePostPage;
