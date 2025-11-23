import ErrorFallback from 'components/ErrorFallback';
import SavingsCalculatorContents from 'components/SavingsCalculatorContents';
import SavingsCalculatorInputs from 'components/SavingsCalculatorInputs';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Border, NavigationBar, Spacing } from 'tosslib';

export function SavingsCalculatorPage() {
  return (
    <>
      <NavigationBar title="적금 계산기" />

      <Spacing size={16} />

      <SavingsCalculatorInputs />

      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>로딩 중...</div>}>
          <SavingsCalculatorContents />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
