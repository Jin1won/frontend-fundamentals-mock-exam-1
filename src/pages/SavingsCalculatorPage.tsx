import ErrorFallback from 'components/ErrorFallback';
import SavingsCalculatorContents from 'components/SavingsCalculatorContents';
import SavingsCalculatorInputs, { SavingsPeriod } from 'components/SavingsCalculatorInputs';
import { ChangeEvent, Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Border, NavigationBar, Spacing } from 'tosslib';
import { SavingsValues } from 'types/savings';
import { parseNumberInput } from 'utils/parse/number';

export function SavingsCalculatorPage() {
  const [savingsValues, setSavingsValues] = useState<SavingsValues>({
    targetAmount: 0,
    monthlyPaymentAmount: 0,
    savingsPeriod: 6,
  });

  const handleChangeTargetAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseNumberInput(e.target.value);

    setSavingsValues(prev => ({
      ...prev,
      targetAmount: newValue,
    }));
  };

  const handleChangeMountlyPaymentAmout = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseNumberInput(e.target.value);

    setSavingsValues(prev => ({
      ...prev,
      monthlyPaymentAmount: newValue,
    }));
  };

  const handleChangeSavingsPeriod = (newValue: SavingsPeriod) => {
    setSavingsValues(prev => ({
      ...prev,
      savingsPeriod: newValue,
    }));
  };

  return (
    <>
      <NavigationBar title="적금 계산기" />

      <Spacing size={16} />

      <SavingsCalculatorInputs
        savingsValues={savingsValues}
        onChangeTargetAmount={handleChangeTargetAmount}
        onChangeMountlyPaymentAmout={handleChangeMountlyPaymentAmout}
        onChangeSavingsPeriod={handleChangeSavingsPeriod}
      />

      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>로딩 중...</div>}>
          <SavingsCalculatorContents savingsValues={savingsValues} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
