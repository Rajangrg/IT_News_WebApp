import React from "react";
import { act } from "react-dom/test-utils";
import { render, cleanup, waitForElement } from "@testing-library/react";

import { App } from "../App";
import { storyIds, singularStory } from "../fixtures";
import { getStory, getStoryIds } from "../services/HackerNewsAPI";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { STORY_INCREMENT } from "../constants";

beforeEach(cleanup);

jest.mock("../hooks/useInfiniteScroll.js");

jest.mock("../services/HackerNewsAPI.js", () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));

test("renders the application succesfully", async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId } = render(<App />);

  await waitForElement(() => [
    expect(getByText("Top IT News Stories")).toBeTruthy(),
    expect(getByText("React Hookss")).toBeTruthy(),
    expect(queryByTestId("story-by").textContent).toEqual("By: James Lyod"),
  ]);
});
