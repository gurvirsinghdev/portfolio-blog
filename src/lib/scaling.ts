export const makeScalingFactor = (scaling: number) => ({
  converse: scaling,
  inverse: 1 / scaling,
})
export type ScalingFactor = ReturnType<typeof makeScalingFactor>

export const mobileScaling = makeScalingFactor(1)
export const makeCSSCalc = (cssWidth: string, scaling_type: number) =>
  `calc(${cssWidth}*${scaling_type})`

export const useClientAwareScaling = function (
  scaling: ScalingFactor,
  max_size: number = 1280,
): ScalingFactor {
  return window.innerWidth > max_size ? scaling : mobileScaling
}
