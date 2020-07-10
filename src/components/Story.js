import React, { useEffect, useState } from "react";
import { getStory } from "../services/HackerNewsAPI";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId)
      .then((data) => {
        data && data.url && setStory(data); //validation
      })
      .catch((err) => {
        console.error(err);
      });
  }, [storyId]);

  return (
    <div>
      {story && story.url ? (
        <>
          <a href={story.url}>
            <p>{story.title}</p>
          </a>
          By: <p>{story.by}</p>
          Posted:<p>{story.time}</p>
        </>
      ) : null}
    </div>
  );
};
