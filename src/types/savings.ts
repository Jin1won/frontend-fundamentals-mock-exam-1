import { SavingsPeriod } from 'components/SavingsCalculator/SavingsCalculatorInputs';

export interface SavingsValues {
  targetAmount: number;
  monthlyPaymentAmount: number;
  savingsPeriod: SavingsPeriod;
}
