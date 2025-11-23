import { SavingsPeriod } from 'components/SavingsCalculator/Inputs';

export interface SavingsValues {
  targetAmount: number;
  monthlyPaymentAmount: number;
  savingsPeriod: SavingsPeriod;
}
