import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/HackerNewsAPI";
import { Story } from "../components/Story";

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
      {storyIds.map((storyId) => {
        return <Story key={storyId} storyId={storyId}></Story>;
      })}
      )
    </div>
  );
};
