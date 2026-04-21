# katex-svelte-docs

Documentation site for [katex-svelte](https://github.com/makeez-labs/katex-svelte).

Built with SvelteKit, deployed to GitHub Pages at
[katex-svelte.makeez.dev](https://katex-docs.vercel.app).

## Development

```bash
bun install
bun run dev
```

## Structure

```
src/routes/
  +page.svelte                        → Homepage
  docs/
    install/                          → Installation
    quickstart/                       → Quick start
    styles/                           → KaTeX CSS
    chem-equation/                    → ChemEquation API
    chem-block/                       → ChemBlock API
    chem-auto/                        → ChemAuto API
    chem-notation/                    → ChemNotation API
    latex-math/                       → LatexMath & LatexBlock
    render-chem/                      → renderChem utility
    render-auto/                      → renderAuto utility
    build-reaction/                   → buildReaction utility
    search/                           → searchFormulas utility
    elements/                         → ELEMENTS data
  examples/
    chemistry/
      equations/                      → Formulas & equations
      reactions/                      → Common reactions
      ionic/                          → Ionic equations
      lesson/                         → Full lesson content
    math/
      expressions/                    → Rate equations, thermodynamics
      mixed/                          → ChemAuto mixed prose
```

## License

MIT © [Makeez Labs](https://github.com/makeez-labs)
