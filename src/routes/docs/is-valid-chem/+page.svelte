<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const sig = `function isValidChem(formula: string): boolean
function isValidLatex(latex: string): boolean
function isValidFormula(formula: string): boolean`

  const usage = `import {
  isValidChem,
  isValidLatex,
  isValidFormula,
  renderChem,
} from 'katex-svelte'

// Validate chemistry formulas
isValidChem('H2O')       // true
isValidChem('invalid\\\\') // false

// Validate LaTeX math
isValidLatex('E = mc^2')     // true
isValidLatex('\\\\invalid')    // false

// isValidFormula is an alias for isValidChem
isValidFormula('H2SO4')  // true

// Guard before rendering
if (isValidChem(input)) {
  const { html } = renderChem(input)
  element.innerHTML = html
} else {
  element.innerHTML = '<span class="error">Invalid formula</span>'
}`

  const svelteUsage = `<script lang="ts">
  import { isValidChem, ChemEquation } from 'katex-svelte'

  let input = $state('H2O')
  let valid = $derived(isValidChem(input))
<\/script>

<label>
  Formula:
  <input bind:value={input} />
</label>

{#if valid}
  <ChemEquation formula={input} />
{:else}
  <p class="error">Invalid chemistry formula</p>
{/if}`
</script>

<svelte:head><title>isValidChem — katex-svelte</title></svelte:head>

<h1>isValidChem</h1>
<p class="lead">
  Validate chemistry formulas and LaTeX math expressions before rendering.
  Returns <code>true</code> if the expression is valid and can be rendered.
</p>

<div class="badge">Utility</div>

<h2>Signature</h2>
<CodeBlock code={sig} lang="typescript" />

<h2>Usage</h2>
<CodeBlock code={usage} lang="typescript" />

<h2>In a Svelte component</h2>
<CodeBlock code={svelteUsage} lang="svelte" />

<div class="next-bar">
  <a href="/docs/chem-equation" class="next-link">ChemEquation →</a>
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
