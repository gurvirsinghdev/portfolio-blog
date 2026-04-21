export const scaling = {
  converse: 4 / 3,
  inverse: 3 / 4
} as const;

export const makeCSSCalc = (cssWidth: string, scaling_type: typeof scaling[keyof typeof scaling]) => {
  return `calc(${cssWidth}*${scaling_type})`;
}

