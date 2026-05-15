<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'
  import { CE_EXAMPLES } from '$lib/data/nav.js'

  const install = `bun add katex-svelte`

  const setup = `<!-- src/routes/+layout.svelte -->
<script>
  import 'katex-svelte/styles'
<\/script>`

  const quickDemo = `<script lang="ts">
  import { ChemEquation, ChemBlock, ChemAuto } from 'katex-svelte'
<\/script>

<!-- Inline formula -->
<p>Water: <ChemEquation formula="H2O" /></p>

<!-- Block equation with label -->
<ChemBlock
  formula="6CO2 + 6H2O ->[ light ][ chlorophyll ] C6H12O6 + 6O2"
  label="Photosynthesis"
/>

<!-- Mixed prose — auto-renders \\ce{} and $...$ -->
<ChemAuto text="The pH of a solution is $$pH = -\\log_{10}[\\ce{H+}]$$" />`

  const features = [
    { icon: '⚗️', title: '\\ce{} notation',    desc: 'Full mhchem support — formulas, reactions, ionic equations, arrows with conditions' },
    { icon: '⇌',  title: 'All arrow types',    desc: '→, ←, ⇌, ↔ and conditional arrows with text above and below' },
    { icon: '📝', title: 'ChemAuto',            desc: 'Drop a paragraph of text with \\ce{}, $...$, $$...$$ — all rendered automatically' },
    { icon: '🃏', title: 'ChemNotation cards',  desc: 'Labelled notation cards for formulas and reactions — great for lesson content' },
    { icon: '📐', title: 'Math too',            desc: 'LatexMath and LatexBlock for equations, integrals, rates, and pH calculations' },
    { icon: '🧪', title: 'Chemistry utilities', desc: '40+ common formulas, KCSE reactions, element data, buildReaction helper' },
  ]
</script>

<svelte:head>
  <title>katex-svelte — Chemistry & Math for Svelte 5</title>
</svelte:head>

<div class="hero">
  <div class="badge">
    <span class="badge-dot"></span>
    Svelte 5 · KaTeX · mhchem
  </div>

  <h1>Chemistry &amp; Math<br>for Svelte 5</h1>

  <p class="sub">
    Render chemical equations with <code>\ce{"{}"}</code> notation, balance reactions,
    show ionic equations, and mix math and chemistry in prose — all powered by KaTeX and mhchem.
  </p>

  <div class="actions">
    <a href="/docs/install"             class="btn-primary">Get started →</a>
    <a href="/examples/chemistry/equations" class="btn-secondary">See examples</a>
    <a href="https://github.com/makeez-labs/katex-svelte" class="btn-ghost" target="_blank" rel="noopener">GitHub ↗</a>
  </div>
</div>

<div class="install-row">
  <div class="install-box">
    <span class="install-cmd">
      <span class="p">$ </span>
      <span class="c">bun</span>
      <span> add </span>
      <span class="n">katex-svelte</span>
    </span>
    <button class="copy-sm" onclick={() => navigator.clipboard.writeText('bun add katex-svelte')}>Copy</button>
  </div>
</div>

<CodeBlock code={quickDemo} lang="svelte" title="Quick demo" />

<h2 class="section-h">Features</h2>
<div class="feat-grid">
  {#each features as f}
    <div class="feat">
      <div class="feat-icon">{f.icon}</div>
      <div class="feat-name">{f.title}</div>
      <div class="feat-desc">{f.desc}</div>
    </div>
  {/each}
</div>

<h2 class="section-h">mhchem quick reference</h2>
<div class="ref-table">
  <table>
    <thead><tr><th>\ce{"{}"} input</th><th>Description</th></tr></thead>
    <tbody>
      {#each CE_EXAMPLES as ex}
        <tr>
          <td><code>\ce{"{ex.input}"}</code></td>
          <td class="ref-desc">{ex.desc}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div class="next-row">
  <a href="/docs/install"    class="next"><strong>Installation</strong><span>Set up katex-svelte</span></a>
  <a href="/docs/quickstart" class="next"><strong>Quick start</strong><span>First equation in 2 minutes</span></a>
  <a href="/docs/chem-equation" class="next"><strong>ChemEquation</strong><span>Full API reference</span></a>
  <a href="/examples/chemistry/lesson" class="next"><strong>Lesson example</strong><span>Real chemistry lesson content</span></a>
</div>

<style>
  .hero { padding: 0 0 48px; border-bottom: 1px solid var(--border); margin-bottom: 40px; }

  .badge {
    display:       inline-flex;
    align-items:   center;
    gap:           7px;
    font-size:     11px;
    font-weight:   700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    background:    var(--brand-light);
    color:         var(--brand);
    border:        1px solid var(--brand-border);
    border-radius: 20px;
    padding:       4px 12px;
    margin-bottom: 20px;
  }

  .badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--brand); }

  h1 {
    font-size:      clamp(32px, 6vw, 48px);
    font-weight:    900;
    letter-spacing: -0.04em;
    color:          var(--dark);
    line-height:    1.05;
    margin-bottom:  14px;
  }

  .sub { font-size: 16px; color: var(--mid); max-width: 540px; line-height: 1.65; margin-bottom: 28px; }

  .actions { display: flex; gap: 10px; flex-wrap: wrap; }

  .btn-primary  { background: var(--brand); color: #fff; padding: 10px 22px; border-radius: var(--radius); font-size: 14px; font-weight: 700; text-decoration: none; transition: all .15s; box-shadow: 0 1px 3px var(--brand-glow); }
  .btn-primary:hover  { background: var(--brand-dark); text-decoration: none; box-shadow: 0 2px 8px var(--brand-glow); transform: translateY(-1px); }
  .btn-secondary { background: var(--surface); color: var(--dark); border: 1px solid var(--border); padding: 10px 22px; border-radius: var(--radius); font-size: 14px; font-weight: 600; text-decoration: none; transition: all .15s; }
  .btn-secondary:hover { background: var(--border); text-decoration: none; }
  .btn-ghost { color: var(--mid); padding: 10px 22px; border-radius: var(--radius); font-size: 14px; font-weight: 600; text-decoration: none; transition: all .15s; }
  .btn-ghost:hover { background: var(--surface); text-decoration: none; }

  .install-row { margin-bottom: 4px; }
  .install-box { background: var(--code-bg); border: 1px solid var(--code-border); border-radius: var(--radius-lg); padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; box-shadow: var(--shadow-sm); }
  .install-cmd { font-family: 'JetBrains Mono', monospace; font-size: 14px; color: #e2e8f0; }
  .p { color: #475569; } .c { color: #93c5fd; } .n { color: #86efac; }
  .copy-sm { background: transparent; border: 1px solid #334155; border-radius: 5px; padding: 4px 10px; font-size: 11px; font-weight: 600; color: #64748b; cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif; transition: all .15s; }
  .copy-sm:hover { border-color: #475569; color: #94a3b8; }

  .section-h { font-size: clamp(18px, 3vw, 22px); font-weight: 800; margin: 40px 0 16px; letter-spacing: -0.02em; }

  .feat-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 14px; margin-bottom: 40px; }
  .feat { border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 20px; transition: all .2s; background: var(--white); }
  .feat:hover { border-color: var(--brand); box-shadow: var(--shadow-md); transform: translateY(-2px); }
  .feat-icon { font-size: 22px; margin-bottom: 12px; }
  .feat-name { font-size: 13px; font-weight: 700; color: var(--dark); margin-bottom: 5px; }
  .feat-desc { font-size: 12px; color: var(--muted); line-height: 1.55; }

  .ref-table { overflow-x: auto; border: 1px solid var(--border); border-radius: var(--radius-lg); margin-bottom: 36px; box-shadow: var(--shadow-sm); }
  .ref-table table { width: 100%; border-collapse: collapse; font-size: 13px; min-width: 400px; }
  .ref-table th { background: var(--surface); padding: 10px 14px; text-align: left; font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); border-bottom: 1px solid var(--border); }
  .ref-table td { padding: 10px 14px; border-bottom: 1px solid var(--border); color: var(--mid); }
  .ref-table tr:last-child td { border-bottom: none; }
  .ref-table tr:hover td { background: var(--surface); }
  .ref-desc { color: var(--mid); }

  .next-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 10px; }
  .next { border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 14px 18px; text-decoration: none; display: flex; flex-direction: column; gap: 4px; transition: all .2s; }
  .next:hover { border-color: var(--brand); box-shadow: var(--shadow-sm); text-decoration: none; }
  .next strong { font-size: 13px; font-weight: 700; color: var(--dark); }
  .next span   { font-size: 12px; color: var(--muted); }

  @media (max-width: 640px) {
    .hero       { padding: 0 0 28px; margin-bottom: 24px; }
    .actions   { flex-direction: column; }
    .btn-primary, .btn-secondary, .btn-ghost { text-align: center; }
    .feat-grid { grid-template-columns: 1fr; }
    .next-row  { grid-template-columns: 1fr 1fr; }
  }
</style>
