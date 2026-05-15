<script lang="ts">
  interface Prop { name: string; type: string; default?: string; required?: boolean; desc: string }
  interface Props { props: Prop[] }
  let { props }: Props = $props()
</script>

<div class="wrap">
  <table>
    <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
    <tbody>
      {#each props as p}
        <tr>
          <td>
            <code class="pname">{p.name}</code>
            {#if p.required}<span class="req">required</span>{/if}
          </td>
          <td><code class="ptype">{p.type}</code></td>
          <td>{#if p.default}<code class="pdef">{p.default}</code>{:else}<span class="none">—</span>{/if}</td>
          <td class="desc">{p.desc}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .wrap { overflow-x: auto; border-radius: var(--radius-lg); border: 1px solid var(--border); margin: 16px 0; box-shadow: var(--shadow-sm); }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th { background: var(--surface); padding: 10px 14px; text-align: left; font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); border-bottom: 1px solid var(--border); white-space: nowrap; }
  td { padding: 10px 14px; border-bottom: 1px solid var(--border); vertical-align: top; color: var(--mid); }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: var(--surface); }
  .pname { background: var(--brand-light); color: var(--brand-dark); border: 1px solid var(--brand-border); }
  .req { font-size: 10px; font-weight: 700; background: var(--red-light); color: var(--red); border: 1px solid #fecaca; border-radius: 4px; padding: 1px 5px; margin-left: 5px; }
  .ptype { background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; }
  .pdef { background: var(--surface); color: var(--mid); }
  .none { color: var(--muted); }
  .desc { line-height: 1.5; }
</style>
