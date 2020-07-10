import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/HackerNewsAPI";
import { Story } from "../components/Story";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
//style
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoriesContainerStyle";

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds()
      .then((data) => {
        setStoryIds(data);
      })
      .catch((err) => {
        console.error(err);
      });
    
  }, [count]);

  return (
    <>
      <GlobalStyle> </GlobalStyle>
      <StoriesContainerWrapper data-testid="stories-container">
        <h1>Top IT News Stories</h1>
        {storyIds.slice(0, count).map((storyId) => {
          return <Story key={storyId} storyId={storyId}></Story>;
        })}
        )
      </StoriesContainerWrapper>
    </>
  );
};


