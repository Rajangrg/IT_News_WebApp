import axios from "axios";
import { selectStoryFields } from "../selectors/selectFields";

//url
export const baseUrl = " https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

//functions

export const getStoryIds = async () => {
  const response = await axios
    .get(newStoriesUrl)
    .then(({ data }) => data)
    .catch((err) => {
      console.error(err);
    });
  return response;
};

export const getStory = async (storyId) => {
  const response = await axios
    .get(storyUrl + `${storyId}.json`) //json is url extension
    .then(({ data }) => data && selectStoryFields(data))
    .catch((err) => {
      console.error(err);
    });

  return response;
};
