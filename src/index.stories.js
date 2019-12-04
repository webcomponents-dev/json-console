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
    args: [true]
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

export const allLevels = () =>
  html`
    <custom-element .logs=${logs}></custom-element>
  `;

export const empty = () =>
  html`
    <custom-element></custom-element>
  `;

export const onlyError = () =>
  html`
    <custom-element
      .logs=${logs}
      .levels=${new Set(["error"])}
    ></custom-element>
  `;

const clearLogs = [
  {
    method: "warning",
    args: ["before"]
  },
  { method: "clear", args: ["Console was cleared"] },
  {
    method: "info",
    args: ["after"]
  }
];

export const clear = () =>
  html`
    <custom-element .logs=${clearLogs}></custom-element>
  `;
