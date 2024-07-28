"use client";
import React, { ChangeEvent, useState } from "react";
import useSWRMutation from "swr/mutation";
type SignUpType = {
  username: string;
  title: string;
};

export const CartAdd = () => {
  const [formData, setFormData] = useState({
    username: "",
    title: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const signUp = async (url: string, { arg }: { arg: SignUpType }) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg),
      });
      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const { trigger } = useSWRMutation("http://localhost:5000/plants", signUp);
  return (
    <>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <button
        onClick={async () => {
          await trigger(formData);
        }}
      >
        Add flower
      </button>
    </>
  );
};
