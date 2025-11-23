export const getEstimatedEarningsAmount = (
  monthlyPaymentAmount: number,
  savingsPeriod: number,
  annualRate: number
): number => {
  const result = monthlyPaymentAmount * savingsPeriod * (1 + annualRate * 0.5);
  return Math.round(result);
};

export const getDifference = (targetAmount: number, estimatedEarningsAmount: number): number => {
  const result = targetAmount - estimatedEarningsAmount;
  return Math.round(result);
};

export const getRecommendedMonthlyPayment = (
  targetAmount: number,
  savingsPeriod: number,
  annualRate: number
): number => {
  const result = targetAmount / (savingsPeriod * (1 + annualRate * 0.5));
  return Math.round(result);
};
