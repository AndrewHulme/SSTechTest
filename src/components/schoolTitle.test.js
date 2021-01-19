import React from "react";
import { shallow } from "enzyme";
import SchoolTitle from "./schoolTitle";

describe("SchoolTitle", () => {
  it("should show text from props", () => {
    const wrapper = shallow(<SchoolTitle title="Oakwood Primary School" />);
    const text = wrapper.find("h1");

    expect(text.text()).toBe("Oakwood Primary School");
  });
});
