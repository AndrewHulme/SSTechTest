import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./searchBar";

describe("SearchBar", () => {
  it("should call updateSearch", () => {
    const updateSearch = jest.fn();
    const initialProps = { updateSearch };

    const wrapper = shallow(<SearchBar {...initialProps} />);
    const input = wrapper.find("input");

    const event = {
      target: { value: "hello" },
    };

    input.simulate("change", event);

    expect(updateSearch).toHaveBeenCalledWith("hello");
  });
});
