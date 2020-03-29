import React, { Component, useState, useEffect } from "react";
import axios from "axios";

function HookDataFetch() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPosts(res.data);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <ul>
        <li>{posts.title}</li>
      </ul>
    </div>
  );
}

export default HookDataFetch;
