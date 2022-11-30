import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('codemash-marquee')
export class CodeMashMarquee extends LitElement {
  static styles = css`
    :host {
      font-family: var(--demo-font-family, Roboto, sans serif);
    }
  `

  override render() {
    return html`<slot></slot>`
  }
}
