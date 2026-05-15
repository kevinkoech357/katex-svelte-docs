<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const sig = `function calculateMolarMass(formula: string): number | null`

  const usage = `import { calculateMolarMass } from 'katex-svelte'

// Simple molecules
calculateMolarMass('H2O')          // 18.015
calculateMolarMass('CO2')          // 44.009
calculateMolarMass('NH3')          // 17.031
calculateMolarMass('H2SO4')        // 98.079

// With parentheses
calculateMolarMass('Ca(OH)2')      // 74.092
calculateMolarMass('Mg(NO3)2')     // 148.315
calculateMolarMass('Al2(SO4)3')    // 342.151

// With coefficients
calculateMolarMass('2H2O')         // 36.03 (2 × 18.015)

// Unknown element returns null
calculateMolarMass('Xx')           // null`

  const svelteUsage = `<script lang="ts">
  import { calculateMolarMass, ChemEquation } from 'katex-svelte'

  let formula = $state('H2O')
  let mass = $derived(calculateMolarMass(formula))
<\/script>

<label>
  Formula:
  <input bind:value={formula} />
</label>

<p><ChemEquation formula={formula} /></p>

{#if mass !== null}
  <p>Molar mass: <strong>{mass} g/mol</strong></p>
{:else}
  <p class="error">Unknown element in formula</p>
{/if}`
</script>

<svelte:head><title>calculateMolarMass — katex-svelte</title></svelte:head>

<h1>calculateMolarMass</h1>
<p class="lead">
  Calculate the molar mass of a chemical formula in g/mol using atomic
  masses from the built-in periodic table data.
</p>

<div class="badge">Utility</div>

<h2>Signature</h2>
<CodeBlock code={sig} lang="typescript" />

<h2>Usage</h2>
<CodeBlock code={usage} lang="typescript" />

<h2>In a Svelte component</h2>
<CodeBlock code={svelteUsage} lang="svelte" />

<div class="next-bar">
  <a href="/docs/to-ce" class="next-link">toCe →</a>
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
