import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm'
import Notes from 'reveal.js/plugin/notes/notes.esm'

const deck = new Reveal({
  width: 1920,
  height: 1080,
  plugins: [Notes, Markdown],
  hash: true,
  totalTime: 55 * 60,
  pdfSeparateFragments: false,
  showNotes: window.location.search.includes('print-pdf') ? 'separate-page' : false
})

deck.initialize()
