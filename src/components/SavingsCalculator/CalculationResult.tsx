import { SavingsProduct } from 'schemas/savingsProduct';
import { ListRow, colors } from 'tosslib';
import { SavingsValues } from 'types/savings';
import { getEstimatedEarningsAmount, getDifference, getRecommendedMonthlyPayment } from 'utils/calculation/savings';
import { formatNumberWithComma } from 'utils/format/number';

interface CalculationResultProps {
  savingsValues: SavingsValues;
  productList: SavingsProduct[];
  selectedProductId: string | null;
}

export default function CalculationResult({ savingsValues, productList, selectedProductId }: CalculationResultProps) {
  const selectedProduct = productList.find(product => product.id === selectedProductId);

  if (!selectedProduct) {
    return <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} />;
  }

  const { targetAmount, monthlyPaymentAmount, savingsPeriod } = savingsValues;
  const { annualRate } = selectedProduct;

  const estimatedEarningsAmount = getEstimatedEarningsAmount(monthlyPaymentAmount, savingsPeriod, annualRate);
  const diffrence = getDifference(targetAmount, estimatedEarningsAmount);
  const recommendedMonthlyPayment = getRecommendedMonthlyPayment(targetAmount, savingsPeriod, annualRate);

  const resultItems = [
    { label: '예상 수익', value: estimatedEarningsAmount },
    { label: '목표 금액과의 차이', value: diffrence },
    { label: '추천 월 납입액', value: recommendedMonthlyPayment },
  ];

  return (
    <>
      {resultItems.map(item => (
        <ListRow
          key={item.label}
          contents={
            <ListRow.Texts
              type="2RowTypeA"
              top={item.label}
              topProps={{ color: colors.grey600 }}
              bottom={`${formatNumberWithComma(item.value)}원`}
              bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
            />
          }
        />
      ))}
    </>
  );
}
