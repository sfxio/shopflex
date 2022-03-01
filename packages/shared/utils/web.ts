import { default as Color } from 'color'

export function isBrowser() {
  return typeof window !== 'undefined'
}

export function getColorValueFromTheme(variable: string, el?: HTMLElement)
export function getColorValueFromTheme(
  variable: string,
  el?: HTMLElement,
  defaultVal: string | null = '#FFFFFF',
) {
  if (isBrowser()) {
    el = el ? el : document.documentElement
    variable = getComputedStyle(el).getPropertyValue(variable)
    if (!variable) {
      return defaultVal
    }
    const col = `hsl(${variable})`
    return Color(col).hex()
  }
  return null
}

export function getColors() {
  return colors
}

export function resetColor(
  name: typeof requiredColorNames[number],
  hexColor: string,
  options: { el?: HTMLElement } = {},
) {
  if (!isBrowser()) {
    return
  }

  const color = colors.find(item => item.name === name)
  if (!color) {
    console.warn(`color ${name} not exists`)
    return
  }

  const el = options.el || document.documentElement
  const hsl: any = new Color(hexColor).hsl()
  const value = getValueFromHsl(hsl)
  el.style.setProperty(color.variable, value)
  color.value = value
}

function getValueFromHsl(hsl: {
  color: [number, number, number]
  valpha: number
}) {
  const res = hsl.color.map((c: number, index: number) => {
    c = Math.round(c)
    return index === 0 ? `${c}` : `${c.toFixed(0)}%`
  })
  return res.join(' ')
}

const requiredColorNames = [
  'primary',
  'secondary',
  'accent',
  'neutral',
  'base-100',
  'info',
  'success',
  'warning',
  'error',
] as const

let colors = [
  {
    name: 'primary',
    variable: '--p',
    value: getColorValueFromTheme('--p'),
  },
  {
    name: 'primary-focus',
    variable: '--pf',
    value: getColorValueFromTheme('--pf'),
  },
  {
    name: 'primary-content',
    variable: '--pc',
    value: getColorValueFromTheme('--pc'),
  },
  {
    name: 'secondary',
    variable: '--s',
    value: getColorValueFromTheme('--s'),
  },
  {
    name: 'secondary-focus',
    variable: '--sf',
    value: getColorValueFromTheme('--sf'),
  },
  {
    name: 'secondary-content',
    variable: '--sc',
    value: getColorValueFromTheme('--sc'),
  },
  {
    name: 'accent',
    variable: '--a',
    value: getColorValueFromTheme('--a'),
  },
  {
    name: 'accent-focus',
    variable: '--af',
    value: getColorValueFromTheme('--af'),
  },
  {
    name: 'accent-content',
    variable: '--ac',
    value: getColorValueFromTheme('--ac'),
  },
  {
    name: 'neutral',
    variable: '--n',
    value: getColorValueFromTheme('--n'),
  },
  {
    name: 'neutral-focus',
    variable: '--nf',
    value: getColorValueFromTheme('--nf'),
  },
  {
    name: 'neutral-content',
    variable: '--nc',
    value: getColorValueFromTheme('--nc'),
  },
  {
    name: 'base-100',
    variable: '--b1',
    value: getColorValueFromTheme('--b1'),
  },
  {
    name: 'base-200',
    variable: '--b2',
    value: getColorValueFromTheme('--b2'),
  },
  {
    name: 'base-300',
    variable: '--b3',
    value: getColorValueFromTheme('--b3'),
  },
  {
    name: 'base-content',
    variable: '--bc',
    value: getColorValueFromTheme('--bc'),
  },
  {
    name: 'info',
    variable: '--in',
    value: getColorValueFromTheme('--in'),
  },
  {
    name: 'info-content',
    variable: '--inc',
    value: getColorValueFromTheme('--inc'),
  },
  {
    name: 'success',
    variable: '--su',
    value: getColorValueFromTheme('--su'),
  },
  {
    name: 'success-content',
    variable: '--suc',
    value: getColorValueFromTheme('--suc'),
  },
  {
    name: 'warning',
    variable: '--wa',
    value: getColorValueFromTheme('--wa'),
  },
  {
    name: 'warning-content',
    variable: '--wac',
    value: getColorValueFromTheme('--wac'),
  },
  {
    name: 'error',
    variable: '--er',
    value: getColorValueFromTheme('--er'),
  },
  {
    name: 'error-content',
    variable: '--erc',
    value: getColorValueFromTheme('--erc'),
  },
]
