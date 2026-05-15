<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const sig = `function parseFormula(formula: string): Record<string, number>`

  const usage = `import { parseFormula } from 'katex-svelte'

// Simple molecules
parseFormula('H2O')          // { H: 2, O: 1 }
parseFormula('CO2')          // { C: 1, O: 2 }
parseFormula('H2SO4')        // { H: 2, S: 1, O: 4 }
parseFormula('NH3')          // { N: 1, H: 3 }

// With coefficients
parseFormula('2H2O')         // { H: 4, O: 2 }
parseFormula('3CO2')         // { C: 3, O: 6 }

// Nested parentheses
parseFormula('Ca(OH)2')      // { Ca: 1, O: 2, H: 2 }
parseFormula('Mg(NO3)2')     // { Mg: 1, N: 2, O: 6 }
parseFormula('Al2(SO4)3')    // { Al: 2, S: 3, O: 12 }
parseFormula('Ca3(PO4)2')    // { Ca: 3, P: 2, O: 8 }

// Double nested parentheses
parseFormula('Fe2(Cr2O7)3')  // { Fe: 2, Cr: 6, O: 21 }

// State symbols are automatically stripped
parseFormula('NaCl_{(aq)}')   // { Na: 1, Cl: 1 }
parseFormula('H2O_{(l)}')     // { H: 2, O: 1 }`

  const svelteUsage = `<script lang="ts">
  import { ChemEquation, parseFormula } from 'katex-svelte'

  let formula = $state('H2O')
  let atoms = $derived(parseFormula(formula))
  let totalAtoms = $derived(
    Object.values(atoms).reduce((a, b) => a + b, 0)
  )
<\/script>

<label>
  Formula:
  <input bind:value={formula} />
</label>

<p><ChemEquation formula={formula} /></p>
<p>Total atoms: {totalAtoms}</p>

<ul>
  {#each Object.entries(atoms) as [element, count]}
    <li>{element}: {count}</li>
  {/each}
</ul>`
</script>

<svelte:head><title>parseFormula — katex-svelte</title></svelte:head>

<h1>parseFormula</h1>
<p class="lead">
  Parse a chemical formula string into a map of element symbols to atom counts.
  Handles coefficients, subscripts, nested parentheses, and state symbols.
</p>

<div class="badge">Utility</div>

<h2>Signature</h2>
<CodeBlock code={sig} lang="typescript" />

<h2>Usage</h2>
<CodeBlock code={usage} lang="typescript" />

<h2>In a Svelte component</h2>
<CodeBlock code={svelteUsage} lang="svelte" />

<div class="next-bar">
  <a href="/docs/check-balance" class="next-link">checkBalance →</a>
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
