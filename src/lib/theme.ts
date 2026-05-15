import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
  const getInitialTheme = (): Theme => {
    if (!browser) return 'dark';
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) return stored;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  };

  const initial = getInitialTheme();
  const { subscribe, set, update } = writable<Theme>(initial);

  return {
    subscribe,
    toggle: () => {
      update(t => {
        const next = t === 'light' ? 'dark' : 'light';
        if (browser) {
          localStorage.setItem('theme', next);
          document.documentElement.dataset.theme = next;
        }
        return next;
      });
    },
    init: () => {
      if (browser) {
        const theme = getInitialTheme();
        document.documentElement.dataset.theme = theme;
        set(theme);
      }
    }
  };
}

export const theme = createThemeStore();