<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const sig = `function toCe(formula: string): string`

  const usage = `import { toCe } from 'katex-svelte'

toCe('H2O')    // "\\\\ce{H2O}"
toCe('H2SO4')  // "\\\\ce{H2SO4}"
toCe('CH4 + 2O2 -> CO2 + 2H2O')
// "\\\\ce{CH4 + 2O2 -> CO2 + 2H2O}"

// Useful with renderLatex
import { renderLatex } from 'katex-svelte'

const html = renderLatex(toCe('H2O')).html
// Renders as H₂O`

  const svelteUsage = `<script lang="ts">
  import { toCe, ChemEquation } from 'katex-svelte'

  let formula = $state('H2O')
  let withCe = $derived(toCe(formula))
<\/script>

<input bind:value={formula} />

<ChemEquation {formula} />

<p class="code">\\\\ce{withCe}</p>`
</script>

<svelte:head><title>toCe — katex-svelte</title></svelte:head>

<h1>toCe</h1>
<p class="lead">
  Wrap a chemical formula string in mhchem's <code>\ce{"{}"}</code> notation.
  Useful when building formula strings dynamically.
</p>

<div class="badge">Utility</div>

<h2>Signature</h2>
<CodeBlock code={sig} lang="typescript" />

<h2>Usage</h2>
<CodeBlock code={usage} lang="typescript" />

<h2>In a Svelte component</h2>
<CodeBlock code={svelteUsage} lang="svelte" />

<div class="next-bar">
  <a href="/docs/is-valid-chem" class="next-link">isValidChem →</a>
</div>

<style>
  h1   { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2   { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 16px; }
  .badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; background: #fef3c7; color: #92400e; border: 1px solid #fde68a; border-radius: 20px; padding: 3px 10px; margin-bottom: 28px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
