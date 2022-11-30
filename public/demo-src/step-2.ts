import { LitElement, html, css } from 'lit'
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

@customElement('codemash-marquee')
export class CodeMashMarquee extends LitElement {
  static styles = css`
    :host {
      font-family: var(--demo-font-family, Roboto, sans serif);
      display: flex;
      overflow: hidden;
      user-select: none;
      gap: var(--gap, 1rem);
      max-width: fit-content;
    }

    :host([reverse]) > .content {
      animation-direction: reverse;
    }

    :host([pause-on-hover]:hover) > .content {
      animation-play-state: paused;
    }

    .content {
      flex-shrink: 0;
      display: flex;
      justify-content: space-around;
      min-width: 100%;
      gap: var(--gap, 1rem);
      animation: scroll 5s linear infinite;
    }

    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-100% - var(--gap, 1rem)));
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .content {
        animation-play-state: paused !important;
      }
    }
  `

  @property({ type: Boolean, reflect: true }) reverse = false

  @property({ type: Boolean, reflect: true, attribute: 'pause-on-hover' }) pauseOnHover = false

  @queryAssignedNodes() marqueeContent!: Node[]

  override render() {
    return html`
      <span class='content'>
        <slot @slotchange=${() => this.requestUpdate()}></slot>
      </span>
      <span class='content' aria-hidden='true'>
        ${map(this.marqueeContent, (e: Node) => e.nodeType === 1 ? unsafeHTML((e as Element).outerHTML) : html`${e.textContent}`)}
      </span>
    `
  }
}
