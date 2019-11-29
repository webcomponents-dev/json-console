// Import the LitElement base class and html helper function
import { LitElement, html, css, property } from "lit-element";
import JSONElement from "@webcomponents-dev/json-element";

customElements.define("json-details", JSONElement);

enum Level {
  "error",
  "warn",
  "info",
  "debug",
  "log"
}
export default class Console extends LitElement {
  @property({ type: Array }) logs = [];
  @property({ type: Set }) levels = new Set(Object.keys(Level));

  public pushLog(method: string, ...args: any) {
    this.logs.push({ method, args });
    this.requestUpdate();
  }

  public toggleLevel(level: string) {
    if (this.levels.has(level)) {
      this.levels.delete(level);
    } else {
      this.levels.add(level);
    }
  }

  static get styles() {
    return css`
      .logs {
        color: black;
        font-family: monospace;
        overflow: auto;
        height: 100%;
      }
      .logLine,
      .logLine.info {
        background: white;
        padding: 2px 0px;
        border-top: 1px solid lightgray;
        display: flex;
        flex-wrap: wrap;
      }
      .logLine:before {
        // TODO
      }
      .logLine.error:before {
        // TODO
      }
      .logLine.warn:before {
        // TODO
      }
      .logLine.warn {
        background: rgb(255, 251, 210);
        border-top: 1px solid rgb(246, 233, 144);
      }
      .logLine.warn:before {
        font-family: "Font Awesome 5 Free";
        content: "\f071";
        display: contents;
        font-weight: 900;
        font-size: 0.6rem;
        color: rgb(196, 155, 0);
      }
      .logLine.error {
        background: rgb(255, 241, 245);
        border-top: 1px solid rgb(255, 211, 219);
      }
      .logLine.error:before {
        font-family: "Font Awesome 5 Free";
        content: "\f057";
        display: inline-block;
        font-weight: 900;
        font-size: 0.6rem;
        color: rgb(235, 0, 14);
      }
      .logArgs {
        margin-left: 2px;
      }
    `;
  }

  logArg(arg: any) {
    const argType = typeof arg;
    switch (argType) {
      case "object":
        return html`
          <json-details class="logArgs" .value=${arg}></json-details>
        `;
        break;
      default:
        return html`
          <pre class="logArgs">${JSON.stringify(arg)}</pre>
        `;
    }
  }

  logLine(data: any) {
    return html`
      <div class="logLine ${data.method}">
        ${data.args.map(arg => this.logArg(arg))}
      </div>
    `;
  }

  render() {
    return html`
      <div class="logs">
        ${this.logs
          .filter(line => this.levels.has(line.method))
          .map(line => this.logLine(line))}
      </div>
    `;
  }
}
