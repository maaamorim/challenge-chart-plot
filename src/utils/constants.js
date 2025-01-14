/**
 * Defines how the screen height is divided between sections of the page.
 */
export const SCREEN_SIZE_DIVISON = {
  header: '8vh',
  textEditor: '40vh',
  chart: '44vh',
  footer: '8vh'
}

export const MAX_ALLOWED_VALUES = {
  selectors: 25,
  groups: 25,
  inputs: 150
}

/**
 * Defines options used to configure the chart.
 */
export const CHART_OPTIONS = {
  maintainAspectRatio: false,
  animations: false,
  layout: {
    padding: 30
  },
  plugins: {
    legend: {
      position: 'right',
      align: 'start',
      labels: {
        font: 'Source Sans Pro',
        usePointStyle: true,
        boxWidth: 12
      }
    }
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          drawBorder: false
        }
      }
    ]
  }
}

/**
 * Defines a list of available colors to be picked as chart dataset colors.
 */
export const COLORS = {
  black: '#000000',
  blue: '#0000ff',
  brown: '#a52a2a',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgrey: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkviolet: '#9400d3',
  fuchsia: '#ff00ff',
  gold: '#ffd700',
  green: '#008000',
  indigo: '#4b0082',
  khaki: '#f0e68c',
  lime: '#00ff00',
  magenta: '#ff00ff',
  maroon: '#800000',
  navy: '#000080',
  olive: '#808000',
  orange: '#ffa500',
  pink: '#ffc0cb',
  purple: '#800080',
  violet: '#800080',
  red: '#ff0000',
  silver: '#c0c0c0',
  yellow: '#ffff00'
}
