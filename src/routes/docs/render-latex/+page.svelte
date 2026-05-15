<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const sig = `function renderLatex(latex: string, options?: RenderOptions): RenderResult
function renderLatexBlock(latex: string, options?: RenderOptions): RenderResult

interface RenderResult {
  html:    string
  error:   string | null
  isValid: boolean
}

interface RenderOptions {
  displayMode?:      boolean
  errorMode?:        'text' | 'throw' | 'none'
  trust?:            boolean
  minRuleThickness?: number
  maxSize?:          number
}`

  const usage = `import { renderLatex, renderLatexBlock } from 'katex-svelte'

// Inline math
const euler = renderLatex('e^{i\\\\pi} + 1 = 0')
console.log(euler.html)     // KaTeX HTML string
console.log(euler.isValid)  // true

// Block math
const integral = renderLatexBlock(
  '\\\\int_{-\\\\infty}^{\\\\infty} e^{-x^2} dx = \\\\sqrt{\\\\pi}'
)

// With options
const withColor = renderLatex('E = mc^2', {
  trust: false,
  errorMode: 'throw',
  maxSize: 8,
})`

  const examples = `import { renderLatex } from 'katex-svelte'

// Fractions
renderLatex('\\\\frac{a}{b}')

// Sums and integrals
renderLatex('\\\\sum_{n=1}^{\\\\infty} \\\\frac{1}{n^2} = \\\\frac{\\\\pi^2}{6}')

// Matrices
renderLatex(
  '\\\\begin{pmatrix} a & b \\\\\\\\ c & d \\\\end{pmatrix}'
)

// Chemical math (mix with \\\\ce{} in LaTeX)
renderLatex('\\\\ce{H2O} + \\\\text{something}')`

  const svelteUsage = `<script lang="ts">
  import { onMount } from 'svelte'
  import { renderLatex } from 'katex-svelte'

  let { formula }: { formula: string } = $props()
  let result = $derived(renderLatex(formula))
<\/script>

<span role="math" aria-label={formula}>
  {@html result.html}
</span>`
</script>

<svelte:head><title>renderLatex — katex-svelte</title></svelte:head>

<h1>renderLatex</h1>
<p class="lead">
  Render a LaTeX math expression to an HTML string using KaTeX.
  Use <code>renderLatexBlock</code> for display (block) mode.
</p>

<div class="badge">Utility</div>

<h2>Signature</h2>
<CodeBlock code={sig} lang="typescript" />

<h2>Usage</h2>
<CodeBlock code={usage} lang="typescript" />

<h2>Examples</h2>
<CodeBlock code={examples} lang="typescript" />

<h2>In a Svelte component</h2>
<CodeBlock code={svelteUsage} lang="svelte" />

<div class="next-bar">
  <a href="/docs/render-auto" class="next-link">renderAuto →</a>
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
