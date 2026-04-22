export const makeScalingFactor = (scaling: number) => ({
  converse: scaling,
  inverse: 1 / scaling
});

export const mobileScaling = makeScalingFactor(1);
export const makeCSSCalc = (cssWidth: string, scaling_type: number) =>
  `calc(${cssWidth}*${scaling_type})`

