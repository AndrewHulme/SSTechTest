import React from "react";
import { shallow } from "enzyme";
import ArticleText from "./articleText";
import { article } from "./testHelper";

describe("ArticleText", () => {
  it("should show a headline", () => {
    const wrapper = shallow(<ArticleText article={article} />);
    const title = wrapper.find("h1");
    expect(title.text()).toBe("Title for Testing");
  });
});
