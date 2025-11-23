export const parseNumberInput = (value: string): number => {
  const parsed = parseInt(value.replace(/[^0-9]/g, ''), 10);
  return isNaN(parsed) ? 0 : parsed;
};
