// BDD-Style Testing (powered by https://mochajs.org/)
//
// Import your stories
import * as stories from "./index.stories.js";
//
// Use any renderer for you stories
import { fixture } from "@open-wc/testing-helpers";
//
// Use any assert library
import chai from "chai/chai.js";
const expect = chai.expect;

describe("Dummy test", function() {
  it("should be always true", function() {
    expect(true).to.be.true;
  });
  fixture(stories.empty()).then(el => {
    el.pushLog("error", { name: "toto" });
    el.pushLog("error", [1, 2, 3, 4]);
    el.pushLog("error", 1, 2, 3, 4);
    el.pushLog("error", {
      array: [1, 2, 3],
      bool: true,
      date: new Date(),
      object: {
        foo: "bar"
      },
      symbol: Symbol("foo"),
      nested: [
        {
          a: [1, "2", null, undefined]
        }
      ]
    });
  });
});
