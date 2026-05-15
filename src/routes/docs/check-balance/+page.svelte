<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const checkSig = `function checkBalance(equation: string): {
  balanced: boolean
  left:     Record<string, number>
  right:    Record<string, number>
  missing?: string[]
}`

  const balanceSig = `function balanceEquation(equation: string): {
  equation:     string
  coefficients: number[]
  reactants:    string[]
  products:     string[]
} | null`

  const checkUsage = `import { checkBalance } from 'katex-svelte'

// Already balanced
const r1 = checkBalance('H2 + O2 -> H2O')
console.log(r1.balanced) // false
console.log(r1.left)     // { H: 2, O: 2 }
console.log(r1.right)    // { H: 2, O: 1 }
console.log(r1.missing)  // ['O']

// Balanced
const r2 = checkBalance('2H2 + O2 -> 2H2O')
console.log(r2.balanced) // true
console.log(r2.left)     // { H: 4, O: 2 }
console.log(r2.right)    // { H: 4, O: 2 }

// Equilibrium reaction
const r3 = checkBalance('N2 + 3H2 <=> 2NH3')
console.log(r3.balanced) // true`

  const balanceUsage = `import { balanceEquation, ChemBlock } from 'katex-svelte'

const result = balanceEquation('H2 + O2 -> H2O')
// → {
//     equation: '2H2 + O2 -> 2H2O',
//     coefficients: [2, 1, 2],
//     reactants: ['H2', 'O2'],
//     products: ['H2O']
//   }

// More examples
balanceEquation('Fe + O2 -> Fe2O3')
// → { equation: '4Fe + 3O2 -> 2Fe2O3', coefficients: [4, 3, 2] }

balanceEquation('C3H8 + O2 -> CO2 + H2O')
// → { equation: 'C3H8 + 5O2 -> 3CO2 + 4H2O', coefficients: [1, 5, 3, 4] }

balanceEquation('Al + HCl -> AlCl3 + H2')
// → { equation: '2Al + 6HCl -> 2AlCl3 + 3H2', coefficients: [2, 6, 2, 3] }

// Invalid equation returns null
balanceEquation('invalid')
// → null`

  const svelteUsage = `<script lang="ts">
  import { ChemBlock, balanceEquation } from 'katex-svelte'

  let input = $state('H2 + O2 -> H2O')
  let result = $derived(balanceEquation(input))
<\/script>

<label>
  Equation:
  <input bind:value={input} placeholder="H2 + O2 -> H2O" />
</label>

{#if result}
  <ChemBlock formula={result.equation} label="Balanced" />
  <p>Coefficients: {result.coefficients.join(', ')}</p>
{:else}
  <p class="error">Could not balance — check the equation format</p>
{/if}`
</script>

<svelte:head><title>checkBalance — katex-svelte</title></svelte:head>

<h1>checkBalance</h1>
<p class="lead">
  Check if a chemical equation is balanced, and automatically balance
  equations using algebraic methods (Gaussian elimination).
</p>

<div class="badge">Utility</div>

<h2>checkBalance — verify balance</h2>
<CodeBlock code={checkSig} lang="typescript" />
<CodeBlock code={checkUsage} lang="typescript" />

<h2>balanceEquation — automatic balancing</h2>
<p>
  Uses linear algebra (null space via Gaussian elimination) to find
  the smallest integer coefficients that balance the equation.
</p>
<CodeBlock code={balanceSig} lang="typescript" />
<CodeBlock code={balanceUsage} lang="typescript" />

<h2>In a Svelte component</h2>
<CodeBlock code={svelteUsage} lang="svelte" />

<div class="next-bar">
  <a href="/docs/calculate-molar-mass" class="next-link">calculateMolarMass →</a>
</div>

<style>
  h1   { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2   { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 16px; }
  p { margin-bottom: 12px; }
  .badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; background: #fef3c7; color: #92400e; border: 1px solid #fde68a; border-radius: 20px; padding: 3px 10px; margin-bottom: 28px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
