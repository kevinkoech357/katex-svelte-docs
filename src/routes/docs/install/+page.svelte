<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const bun  = `bun add katex-svelte`
  const npm  = `npm install katex-svelte`
  const peer = `{ "peerDependencies": { "svelte": "^5.0.0" } }`
  const preload = `<!-- app.html — optional preload for faster first render -->
<link rel="preload"
  href="https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/katex.min.css"
  as="style" />`
</script>

<svelte:head><title>Installation — katex-svelte</title></svelte:head>

<h1>Installation</h1>
<p class="lead">Install katex-svelte and KaTeX styles. Svelte 5 is the only peer dependency.</p>

<h2>Install the package</h2>
<CodeBlock code={bun} lang="bash" title="bun" />
<CodeBlock code={npm} lang="bash" title="npm" />

<h2>Load KaTeX styles</h2>
<p>
  Import the KaTeX stylesheet once in your root layout. Without it,
  equations render but may look unstyled.
</p>
<CodeBlock code={`<!-- src/routes/+layout.svelte -->
<script>
  import 'katex-svelte/styles'
<\/script>`} lang="svelte" />

<p>Or link it from the CDN in your <code>app.html</code>:</p>
<CodeBlock code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />`} lang="html" />

<h2>Peer dependency</h2>
<p>Svelte 5 is required. KaTeX is a direct dependency — it ships bundled.</p>
<CodeBlock code={peer} lang="json" />

<h2>Optional preload</h2>
<p>Add a preload hint to your <code>app.html</code> to load the KaTeX stylesheet early:</p>
<CodeBlock code={preload} lang="html" />

<div class="next-bar">
  <a href="/docs/quickstart" class="next-link">Quick start →</a>
</div>

<style>
  h1   { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2   { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 32px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
