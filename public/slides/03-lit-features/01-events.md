## Events

Properties down, Events up.

Aka, transmit data down to child components via properties, child components communicate back up to their parents via events. <!-- .element class="fragment" -->

`<tag-with-event @event-name=${handlerFunc}></tag-with-event>` <!-- .element class="fragment" -->

A couple of things to watch for with events in the land of web-components however: <!-- .element class="fragment" -->

<ul>
<li class="fragment"><code>composed: true</code> in the event init options to make an event bubble out of the shadow dom it was dispatched in </li>
<li class="fragment">This can be useful for keeping "internal" events truly internal, just dont set <code>composed: true</code></li>
<li class="fragment"><code>this.dispatchEvent(new CustomEvent('child-did-a-thing', { detail: something, composed: true }))</code></li>
</ul>

Notes:
- Under most circumstances, anything that needs to be transmitted to a child should be done via its defined reactive properties
- Anything a child needs to communicate to a parent element should be done via events (most likely CustomEvents)
- Under some circumstances, it may make more sense for elements to have a public functional api, and this is also doable, but it
  shouldn't be the rule.
- According to MDN: The read-only composed property of the Event interface returns a boolean value which indicates whether or not
  the event will propagate across the shadow DOM boundary into the standard DOM.
- User-Agent dispatched events are composed (Click/Mouseover/Touch/Copy/Paste/etc), but most other events are not by default.
- This means any "click" event that triggers from anything inside of your web-component will be visible to the outside, but that's
  probably a good thing (think of having a web-component that is a button, you'd want the buttons click to propagate out of your
  shadow so the host app can see it and respond).
