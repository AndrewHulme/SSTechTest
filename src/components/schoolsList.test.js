import React from "react";
import { shallow } from "enzyme";
import SchoolsList from "./schoolsList";
import SearchBar from "./searchBar";
import CardGrid from "./cardGrid";

describe("SchoolsList", () => {
  it("should only render CardGrid initially", () => {
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

    const wrapper = shallow(
      <SchoolsList schools={schools} showSearchBar={false} />
    );
    const cardGrid = wrapper.find(CardGrid);
    const searchBar = wrapper.find(SearchBar);
    expect(cardGrid.exists()).toBe(true);
    expect(searchBar.exists()).toBe(false);
  });
});
