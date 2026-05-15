<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const usage = `import { ELEMENTS, getElement } from 'katex-svelte'

// Array of first 20 elements
console.log(ELEMENTS[0])
// { symbol: 'H', name: 'Hydrogen', number: 1, mass: 1.008, group: 'nonmetal' }

// Lookup by symbol or name
getElement('Fe')       // → { symbol: 'Fe', name: 'Iron', number: 26, mass: 55.845 }
getElement('oxygen')   // → { symbol: 'O',  name: 'Oxygen', number: 8, mass: 15.999 }
getElement('Xx')       // → undefined`

  const table = `<script lang="ts">
  import { ELEMENTS, ChemEquation } from 'katex-svelte'
<\/script>

<table>
  <thead><tr><th>Symbol</th><th>Name</th><th>No.</th><th>Mass</th><th>Group</th></tr></thead>
  <tbody>
    {#each ELEMENTS as el}
      <tr>
        <td><ChemEquation formula={el.symbol} /></td>
        <td>{el.name}</td>
        <td>{el.number}</td>
        <td>{el.mass}</td>
        <td>{el.group}</td>
      </tr>
    {/each}
  </tbody>
</table>`
</script>

<svelte:head><title>ELEMENTS — katex-svelte</title></svelte:head>
<h1>ELEMENTS</h1>
<p class="lead">Periodic table data for all 118 elements — symbol, name, atomic number, atomic mass, and group. Useful for element lookup in Paa Campus chemistry lessons.</p>
<div class="badge">Data</div>
<h2>Usage</h2>
<CodeBlock code={usage} lang="typescript" />
<h2>In a periodic table component</h2>
<CodeBlock code={table} lang="svelte" />
<div class="next-bar"><a href="/examples/chemistry/equations" class="next-link">See examples →</a></div>
<style>
  h1 { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2 { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 16px; }
  .badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; background: #fef3c7; color: #92400e; border: 1px solid #fde68a; border-radius: 20px; padding: 3px 10px; margin-bottom: 28px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
