import React from "react";
import { shallow } from "enzyme";
import SchoolsList from "./schoolsList";
import SearchBar from "./searchBar";
import CardGrid from "./cardGrid";

const schools = [
  {
    active: true,
    address: "Bolton Road Abbey Village Chorley PR6 8DD",
    domain: "www.abbeyvillage.schoolspider.co.uk",
    id: 486,
    title: "Abbey Village Primary School",
    using_wonde: true,
  },
  {
    active: true,
    address: "Livesey Street Manchester Manchester M40 7PR",
    domain: "www.abbott.manchester.sch.uk",
    id: 228,
    title: "Abbott Community Primary School",
    using_wonde: true,
  },
  {
    active: true,
    address: "Abingdon Road Reddish Stockport SK5 7ET",
    domain: "www.abingdon.schoolspider.co.uk",
    id: 527,
    title: "Abingdon Primary School",
    using_wonde: true,
  },
];

// const filteredSchools = [
//   {
//     active: true,
//     address: "Abingdon Road Reddish Stockport SK5 7ET",
//     domain: "www.abingdon.schoolspider.co.uk",
//     id: 527,
//     title: "Abingdon Primary School",
//     using_wonde: true,
//   },
// ];

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

  //   it("should filter schools", () => {
  //     const realUseState = React.useState;
  //     const stubInitialState = ["Abingdon"];
  //     jest
  //       .spyOn(React, "useState")
  //       .mockImplementationOnce(() => realUseState(stubInitialState));

  //     const wrapper = shallow(
  //       <SchoolsList schools={schools} showSearchBar={true} />
  //     );

  //     const cardGrid = wrapper.find(CardGrid);
  //     expect(cardGrid.props()).toMatchObject({
  //       filteredSearch: filteredSchools,
  //       page: "schoolsList",
  //     });

  // wrapper.instance().updateSearch("Village");
  //   });
});
