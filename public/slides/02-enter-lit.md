# So why lit?

- The replacement for Polymer <!-- .element class="fragment" -->
- Builds standards compliant web-components <!-- .element class="fragment" -->
- Use them in any framework* <!-- .element class="fragment" -->
- Tiny bundle <!-- .element class="fragment" -->
- Scoped styles <!-- .element class="fragment" -->
- Progressive Enhancement <!-- .element class="fragment" -->

Note:
- At Google I/O 2018, Google announced that LitElement would be the replacement for the PolymerElement base class from
polymer.
- LitElement extends from HtmlElement and just adds a few niceties. This means you are just writing straight
web-components, with a few extra features thrown in to handle reactive state and declarative rendering.
- You can use web components in any framework. There are a couple of things you need to do however
  - React: LitLabs actually has a package to generate React components from the class of a Lit component. So they `just
  work` for the most part
  - Vue: You'll need to tell the vue compiler that tags that match a specific pattern are web-components and it should
  treat them as such, but even if you don't, the worst that happens is just a lot of console warnings in dev mode.
  - Angular: You'll need to add CUSTOM_ELEMENTS_SCHEMA to the NGModule that is trying to render it.
- The entirety of Lit is only 5kb minified and gzipped, so it adds basically nothing to your bundle. Lit components in
general are already pretty small already, so you end up with impressively small bundles.
  - The shared library I'm building at work has somewhere around 15 different components, and the entire bundle is only
  50kb minified and gzipped, and the majority of that is styles.
- So long as you don't turn off shadowDom, all your styles are contained within the shadow tree. This means they can't
leak out, and styles from the host application can't leak in (except for fonts and css custom properties). What this
really means is your component will look exactly as its supposed to look in all circumstances, no matter what the host
application is doing style-wise.
- You can add lit and any component built with it to any page, as drop in replacements for existing framework components.
