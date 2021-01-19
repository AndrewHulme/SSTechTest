import React from "react";
import { shallow } from "enzyme";
import SchoolsList from "./schoolsList";
import SearchBar from "./searchBar";
import CardGrid from "./cardGrid";
import { schools } from "./testHelper";

describe("SchoolsList", () => {
  it("should only render CardGrid initially", () => {
    const wrapper = shallow(
      <SchoolsList schools={schools} showSearchBar={false} />
    );
    const cardGrid = wrapper.find(CardGrid);
    const searchBar = wrapper.find(SearchBar);
    expect(cardGrid.exists()).toBe(true);
    expect(searchBar.exists()).toBe(false);
  });

  it("should render both CardGrid and SearchBar when showSearchBar=true", () => {
    const wrapper = shallow(
      <SchoolsList schools={schools} showSearchBar={true} />
    );
    const cardGrid = wrapper.find(CardGrid);
    const searchBar = wrapper.find(SearchBar);
    expect(cardGrid.exists()).toBe(true);
    expect(searchBar.exists()).toBe(true);
  });
});
