import { useMutation, useQuery } from "@apollo/client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ISubreddit } from "../../../../shared/types";
import useClient from "../../hooks/client";
import { ADD_POST, FETCH_SUBREDDITS } from "../../queries";

const initialForm = {
  title: "",
  body: "",
  user: "61078b338331408da0a860d7",
  subreddit: "61078adb8331408da0a860d3",
};

function CreatePostPage() {
  const [form, setForm] = useState(initialForm);

  const { loading, error, data } = useQuery(FETCH_SUBREDDITS);

  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: ["FETCH_POSTS"],
    variables: { item: form },
  });
  const navigate = useNavigate();
  const { clearCache } = useClient();

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
    addPost();
    setForm(initialForm);
    navigate("/");
    clearCache();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  return (
    <form className="flex flex-col w-full mx-auto" onSubmit={handleSubmit}>
      <select
        value={form.subreddit}
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
        value={form.title}
        name="title"
        placeholder="title"
      />

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

export default CreatePostPage;
