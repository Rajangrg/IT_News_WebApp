import React, { useEffect, useState } from "react";
import { getStory } from "../services/HackerNewsAPI";

//style
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement,
} from "../styles/StoryStyles";
import { mapTime } from "../mappers/mapTime";

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
  //console.log(story)

  return (
    <div>
      {story && story.url ? ( //validation
        <StoryWrapper data-testid="story">
          <StoryTitle>
            <a href={story.url}>{story.title}</a>
          </StoryTitle>
          <StoryMeta>
            <span data-testid="story-by">
              <StoryMetaElement color="#DE5D3A">By: </StoryMetaElement>
              {story.by}
            </span>
            <span data-testid="story-time">
              <StoryMetaElement color="#DE5D3A">Posted: </StoryMetaElement>
              {mapTime(story.time)}
            </span>
          </StoryMeta>
        </StoryWrapper>
      ) : null}
    </div>
  );
};
