export const desktop = {
  converse: 4 / 3,
  inverse: 3 / 4
} as const;

export const mobile = {
  converse: 1,
  inverse: 1
} as const;

export const scaling = window.innerWidth > 1280 ? desktop : mobile;

export const makeCSSCalc = (cssWidth: string, scaling_type: typeof scaling[keyof typeof scaling]) => {
  return `calc(${cssWidth}*${scaling_type})`;
}

