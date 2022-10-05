import { LitElement, html, css } from 'lit'
import { property, customElement } from 'lit/decorators.js'

@customElement('codemash-demo')
export class CodeMashDemo extends LitElement {
  @property() greet = 'nobody'

  static styles = css`
    :host {
      font-family: var(--demo-font-family, Roboto, sans serif);
    }
  `

  override render() {
    return html`
      <p>
        Hello <b>${this.greet}</b>!
      </p>
    `
  }
}
