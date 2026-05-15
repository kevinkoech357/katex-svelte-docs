<script lang="ts">
  /**
   * ChemDemo — shows a live rendered chemistry equation alongside its source.
   * Used throughout the docs to demonstrate mhchem notation.
   */
  import CodeBlock from './CodeBlock.svelte'
  import { ChemEquation, ChemBlock } from 'katex-svelte'

  interface Props {
    formula:  string
    label?:   string
    block?:   boolean
  }

  let { formula, label, block = false }: Props = $props()

  let snippet = $derived(
    block
      ? `<ChemBlock formula="${formula}" />`
      : `<ChemEquation formula="${formula}" />`
  )
</script>

<div class="demo">
  <div class="demo-label">
    {#if label}<span class="label-text">{label}</span>{/if}
    <span class="ce-src"><code>\ce{"{formula}"}</code></span>
  </div>
  <div class="demo-preview {block ? 'block-mode' : ''}">
    {#if block}
      <ChemBlock {formula} />
    {:else}
      <ChemEquation {formula} />
    {/if}
  </div>
  <CodeBlock code={snippet} lang="svelte" />
</div>

<style>
  .demo { margin: 20px 0; }
  .demo-label { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
  .label-text { font-size: 13px; font-weight: 600; color: var(--dark); }
  .ce-src code { font-size: 12px; }
  .demo-preview { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 20px 24px; margin-bottom: 0; box-shadow: var(--shadow-sm); }
  .block-mode { text-align: center; padding: 28px 24px; }
</style>
