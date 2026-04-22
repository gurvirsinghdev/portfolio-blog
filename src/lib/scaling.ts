export const SCALING_VARIABLES = {
  converse: '--scale-converse',
  inverse: '--scale-inverse',
} as const
export type ScalingVariables =
  (typeof SCALING_VARIABLES)[keyof typeof SCALING_VARIABLES]

export const makeCSSCalc = (
  cssWidth: string,
  variable: ScalingVariables,
): string => {
  return `calc(${cssWidth} * var(${variable}))`
}

export const containerScalingStyle = {
  transformOrigin: 'top left',
  scale: makeCSSCalc('100%', SCALING_VARIABLES.converse),
  maxWidth: makeCSSCalc('100%', SCALING_VARIABLES.inverse),
} as const

export const updatePageScaling = function (scaling: string) {
  if (typeof document !== 'undefined')
    document.documentElement.style.setProperty(
      SCALING_VARIABLES.converse,
      scaling,
    )
}
