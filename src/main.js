import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm'
import Notes from 'reveal.js/plugin/notes/notes.esm'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm'

const deck = new Reveal({
  width: 1920,
  height: 1080,
  plugins: [Notes, Markdown, Highlight],
  hash: true,
  totalTime: 50 * 60,
  pdfSeparateFragments: false,
  showNotes: window.location.search.includes('print-pdf') ? 'separate-page' : false
})

deck.initialize()
