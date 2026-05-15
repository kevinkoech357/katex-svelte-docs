<script lang="ts">
  import '../lib/styles.css'
  import 'katex/dist/katex.min.css'
  import ThemeToggle from '$lib/components/ThemeToggle.svelte'
  import { theme } from '$lib/theme'
  import { navigation } from '$lib/data/nav.js'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'

  let { children }: { children: any } = $props()
  let menuOpen = $state(false)

  onMount(() => {
    theme.init()
  })
</script>

<div class="shell" class:menu-open={menuOpen}>
  <button class="menu-toggle" onclick={() => menuOpen = !menuOpen} aria-label="Toggle menu">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      {#if menuOpen}
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      {:else}
        <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
      {/if}
    </svg>
  </button>

  <aside class="sidebar" class:open={menuOpen}>
    <div class="sidebar-header">
      <a href="/" class="logo">
        <span class="logo-name">katex</span><span class="logo-sep">-</span><span class="logo-svelte">svelte</span>
      </a>
      <ThemeToggle />
    </div>

    <nav class="nav">
      {#each navigation as section}
        <div class="section">
          <p class="section-title">{section.title}</p>
          {#each section.items as item}
            <a
              href={item.href}
              class="item"
              class:active={$page.url.pathname === item.href}
              onclick={() => menuOpen = false}
            >
              <span>{item.label}</span>
              {#if item.badge}
                <span class="badge">{item.badge}</span>
              {/if}
            </a>
          {/each}
        </div>
      {/each}
    </nav>

    <div class="footer">
      <a href="https://github.com/makeez-labs/katex-svelte" class="foot-link" target="_blank" rel="noopener">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
        GitHub
      </a>
      <a href="https://www.npmjs.com/package/katex-svelte" class="foot-link" target="_blank" rel="noopener">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456l-.01 10.382H5.13z"/></svg>
        npm
      </a>
    </div>
  </aside>

  <main class="content">
    <header class="topbar">
      <ThemeToggle />
    </header>
    {@render children()}
  </main>
</div>

<style>
  .shell {
    display: flex;
    min-height: 100vh;
    background: var(--white);
  }

  .menu-toggle {
    display: none;
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 1001;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--mid);
    cursor: pointer;
  }

  .sidebar {
    width:          var(--sidebar-w);
    height:         100vh;
    position:       sticky;
    top:            0;
    flex-shrink:    0;
    display:        flex;
    flex-direction: column;
    border-right:   1px solid var(--border);
    background:     color-mix(in srgb, var(--white) 98%, var(--brand));
    overflow-y:     auto;
    box-shadow:     var(--shadow-sm);
  }

  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 18px;
    border-bottom: 1px solid var(--border);
  }

  .logo {
    font-family:  'Sora', sans-serif;
    font-size:    15px;
    font-weight:  900;
    letter-spacing: -0.03em;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0;
  }

  .logo-name   { color: var(--dark); }
  .logo-sep    { color: var(--muted); }
  .logo-svelte { color: var(--brand); }

  .nav { flex: 1; padding: 16px 10px; overflow-y: auto; }

  .section { margin-bottom: 20px; }

  .section-title {
    font-size:      10px;
    font-weight:    700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color:          var(--muted);
    padding:        0 8px;
    margin-bottom:  4px;
  }

  .item {
    display:         flex;
    align-items:     center;
    justify-content: space-between;
    padding:         6px 8px;
    border-radius:   6px;
    font-size:       13px;
    font-weight:     500;
    color:           var(--mid);
    text-decoration: none;
    position:        relative;
  }

  .item:hover        { background: var(--surface); color: var(--dark); text-decoration: none; }
  .item.active       { background: var(--brand-light); color: var(--brand); font-weight: 600; }
  .item.active::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 16px;
    border-radius: 0 2px 2px 0;
    background: var(--brand);
  }

  .sidebar .badge {
    font-size:    10px;
    font-weight:  700;
    background:   var(--brand);
    color:        white;
    padding:      2px 6px;
    border-radius: 10px;
  }

  .footer {
    display:    flex;
    gap:        4px;
    padding:    12px;
    border-top: 1px solid var(--border);
  }

  .foot-link {
    flex:            1;
    display:         flex;
    align-items:     center;
    justify-content: center;
    gap:             5px;
    padding:         6px;
    border-radius:   6px;
    font-size:       12px;
    font-weight:     500;
    color:           var(--muted);
    text-decoration: none;
    border:          none;
    background:      transparent;
    cursor:          pointer;
  }

  .foot-link:hover { background: var(--surface); color: var(--mid); text-decoration: none; }

  .topbar {
    display: none;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 16px;
    border-bottom: 1px solid var(--border);
    background: color-mix(in srgb, var(--white) 85%, transparent);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    position: sticky;
    top: 0;
    z-index: 100;
    min-height: 52px;
  }

  .content {
    flex: 1;
    min-width: 0;
    padding: 48px 56px;
    max-width: 900px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .menu-toggle { display: flex; }

    .shell.menu-open .sidebar {
      transform: translateX(0);
    }

    .sidebar {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1000;
      transform: translateX(-100%);
      transition: transform .2s ease;
    }

    .sidebar.open { transform: translateX(0); }

    .topbar { display: flex; }

    .content { padding: 24px 20px; }
  }
</style>