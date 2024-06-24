import { getFromApi, formatParameters } from "@utils/requests";

describe("getFromApi function url parser test", () => {
  let fetchMock: any;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({ data: { results: [] } }),
    } as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Call test", () => {
    getFromApi("");
    expect(fetchMock).toHaveBeenCalled();
  });

  test("Parameters parser", () => {
    expect(formatParameters({ a: "a", b: "b", c: "c" })).toBe("a=a&b=b&c=c");
  });
});
