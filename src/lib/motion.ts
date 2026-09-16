// Shared motion tokens so no component hardcodes its own duration/easing.
export const duration = {
  fast: 0.2,
  base: 0.4,
  slow: 0.6,
};

export const easeStandard = [0.4, 0, 0.2, 1] as const;
export const easeEmphasized = [0.16, 1, 0.3, 1] as const;
