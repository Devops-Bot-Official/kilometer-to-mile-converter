import { describe, expect, it } from "vitest";
import { kilometresToMiles } from "@/lib/conversion";

describe("kilometres to miles", () => {
  it("converts 10 kilometres to 6.21 miles", () => {
    expect(kilometresToMiles("10")).toBe("6.21");
  });
  it("always returns two decimal places", () => {
    expect(kilometresToMiles("0")).toBe("0.00");
    expect(kilometresToMiles("1.609344")).toBe("1.00");
  });
  it("converts decimal inputs", () => {
    expect(kilometresToMiles("2.5")).toBe("1.55");
  });
  it("does not convert an empty or invalid field to a number", () => {
    expect(kilometresToMiles("")).toBeNull();
    expect(kilometresToMiles("invalid")).toBeNull();
  });
});