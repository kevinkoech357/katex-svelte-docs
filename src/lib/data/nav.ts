export interface NavItem {
  label:  string
  href:   string
  badge?: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: 'Getting started',
    items: [
      { label: 'Introduction',  href: '/'               },
      { label: 'Installation',  href: '/docs/install'   },
      { label: 'Quick start',   href: '/docs/quickstart' },
      { label: 'KaTeX styles',  href: '/docs/styles'    },
    ],
  },
  {
    title: 'Chemistry',
    items: [
      { label: 'ChemEquation',  href: '/docs/chem-equation' },
      { label: 'ChemBlock',     href: '/docs/chem-block'    },
      { label: 'ChemAuto',      href: '/docs/chem-auto'     },
      { label: 'ChemNotation',  href: '/docs/chem-notation' },
    ],
  },
  {
    title: 'Math',
    items: [
      { label: 'LatexMath',     href: '/docs/latex-math'  },
      { label: 'LatexBlock',    href: '/docs/latex-block' },
    ],
  },
  {
    title: 'Utilities',
    items: [
      { label: 'renderChem',      href: '/docs/render-chem'   },
      { label: 'renderLatex',     href: '/docs/render-latex'  },
      { label: 'renderAuto',      href: '/docs/render-auto'   },
      { label: 'buildReaction',   href: '/docs/build-reaction' },
      { label: 'searchFormulas',  href: '/docs/search'        },
      { label: 'ELEMENTS',        href: '/docs/elements'      },
    ],
  },
  {
    title: 'Chemistry tools',
    items: [
      { label: 'parseFormula',       href: '/docs/parse-formula'       },
      { label: 'checkBalance',       href: '/docs/check-balance'       },
      { label: 'calculateMolarMass', href: '/docs/calculate-molar-mass' },
      { label: 'toCe',               href: '/docs/to-ce'               },
      { label: 'isValidChem',        href: '/docs/is-valid-chem'       },
    ],
  },
  {
    title: 'Examples',
    items: [
      { label: 'Chemistry equations',   href: '/examples/chemistry/equations'   },
      { label: 'Reactions',             href: '/examples/chemistry/reactions'   },
      { label: 'Ionic equations',       href: '/examples/chemistry/ionic'       },
      { label: 'Lesson content',        href: '/examples/chemistry/lesson'      },
      { label: 'Math expressions',      href: '/examples/math/expressions'      },
      { label: 'Mixed text (ChemAuto)', href: '/examples/math/mixed'            },
    ],
  },
]

// Chemistry notation quick reference
export const CE_EXAMPLES = [
  { input: 'H2O',                                 desc: 'Molecular formula'        },
  { input: 'H2SO4',                               desc: 'Sulfuric acid'             },
  { input: 'CH4 + 2O2 -> CO2 + 2H2O',            desc: 'Forward reaction'          },
  { input: 'N2 + 3H2 <=> 2NH3',                   desc: 'Equilibrium'              },
  { input: 'Fe^{2+} + 2e^- -> Fe',               desc: 'Ionic equation'            },
  { input: '2H2 + O2 ->[\\Delta] 2H2O',          desc: 'Reaction with heat'        },
  { input: 'CaCO3 ->[\\text{heat}] CaO + CO2',   desc: 'Reaction with condition'   },
  { input: 'Cl^{-}_{(aq)}',                       desc: 'State symbol'              },
  { input: 'A -> B -> C',                          desc: 'Reaction sequence'         },
  { input: 'H+ + OH^- -> H2O',                    desc: 'Neutralisation'            },
]
