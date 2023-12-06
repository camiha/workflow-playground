import { describe, expect, it } from "vitest";
import { main } from "./index.js";

describe("main", () => {
	it("should return 'Hello World'", () => {
		expect(main()).toEqual("Hello World");
	});
});
