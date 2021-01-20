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

  it("should show the body of text", () => {
    const wrapper = shallow(<ArticleText article={article} />);
    const body = wrapper.find("div.bodyText");
    expect(body.html()).toEqual(
      '<div id="articleBody" class="bodyText"><p>This is the body text</p>\r\n</div>'
    );
  });
});
