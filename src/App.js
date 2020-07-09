import React, { useEffect, useState } from "react";
import { getStoryIds } from "./services/hackerNewsAPI";

export const App = () => {
  const [storyIds, setStoryIds] = useState([]);
  
  useEffect(() => {
    const fetchStoryIds = async () => {
      setStoryIds(await getStoryIds());
    };
  fetchStoryIds();
  }, [setStoryIds]);

  return (
    <div>
      <h1>{console.log(storyIds)}</h1>
    </div>
  );
};
