import { html, render } from "lit-html";

const logs = [
  {
    method: "error",
    args: [
      {
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
      }
    ]
  },
  {
    method: "warn",
    args: [
      {
        bool: true
      }
    ]
  },
  {
    method: "info",
    args: [
      {
        bool: true
      },
      {
        string: "toto"
      }
    ]
  }
];

export const story1 = () =>
  html`
    <custom-element .logs=${logs}></custom-element>
  `;
