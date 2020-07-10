import React, { useEffect, useState } from "react";
import { getStory } from "../services/HackerNewsAPI";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId)
      .then((data) => {
        data && data.url && setStory(data); 
      })
      .catch((err) => {
        console.error(err);
      });
  }, [storyId]);


  console.log(story)
  return (
    <div>
      {story && story.url ? (
          //validation
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
