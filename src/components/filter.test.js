import { filter } from "./filter";
import { schools, filteredSchools } from "./testHelper";

describe("Filter function", () => {
  it("should output a filtered array of objects", () => {
    expect(filter(schools, "Abingdon")).toEqual(filteredSchools);
  });
});
