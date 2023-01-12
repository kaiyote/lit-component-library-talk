import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('codemash-marquee')
export class CodeMashMarquee extends LitElement {
  static styles = css`
    :host {
      font-family: var(--demo-font-family, inherit);
    }
  `

  override render() {
    return html`<slot></slot>`
  }
}
