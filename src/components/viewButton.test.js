import React from "react";
import { shallow } from "enzyme";
import ViewButton from "./ViewButton";

describe("ViewButton", () => {
  it("should show a button with text 'view'", () => {
    const wrapper = shallow(<ViewButton />);
    const button = wrapper.find("button");
    expect(button.text()).toBe("View");
  });
});
