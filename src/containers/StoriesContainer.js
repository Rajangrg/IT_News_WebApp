import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/HackerNewsAPI";

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);
  
    useEffect(() => {
      getStoryIds()
        .then((data) => {
          setStoryIds(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, [setStoryIds]);
  
    return (
      <div>
        <h1>{console.log(storyIds)}</h1>
      </div>
    );
  };
  