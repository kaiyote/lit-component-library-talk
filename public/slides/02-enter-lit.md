# So why lit?

- The replacement for Polymer <!-- .element class="fragment" -->
- Builds standards compliant web-components <!-- .element class="fragment" -->
- Tiny bundle <!-- .element class="fragment" -->

Note:
- At Google I/O 2018, Google announced that LitElement would be the replacement for the PolymerElement base class from
polymer.
- LitElement extends from HtmlElement and just adds a few niceties. This means you are just writing straight
web-components, with a few extra features thrown in to handle reactive state and declarative rendering.
- The entirety of Lit is only 5kb minified and gzipped, so it adds basically nothing to your bundle. Lit components in
general are already pretty small already, so you end up with impressively small bundles.
  - The shared library I'm building at work has somewhere around 15 different components, and the entire bundle is only
  50kb minified and gzipped, and the majority of that is styles.
