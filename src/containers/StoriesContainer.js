import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/HackerNewsAPI";
import { Story } from "../components/Story";

//style
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoriesContainerStyle";

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
    <>
      <GlobalStyle> </GlobalStyle>
      <StoriesContainerWrapper data-testid= "stories-container">
        <h1>Top Hacker News Stories</h1>
        {storyIds.map((storyId) => {
          return <Story key={storyId} storyId={storyId}></Story>;
        })}
        )
      </StoriesContainerWrapper>
    </>
  );
};
