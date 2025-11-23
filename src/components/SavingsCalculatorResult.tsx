import { Spacing, ListRow, colors, Border, ListHeader } from 'tosslib';
import CalculationResult from './CalculationResult';
import { SavingsValues } from 'types/savings';
import { SavingsProduct } from 'schemas/savingsProduct';

interface SavingsCalculatorResultsProps {
  savingsValues: SavingsValues;
  savingsProductList: SavingsProduct[];
  selectedSavingsProductId: string | null;
}

export default function SavingsCalculatorResults({
  savingsValues,
  savingsProductList,
  selectedSavingsProductId,
}: SavingsCalculatorResultsProps) {
  return (
    <>
      <Spacing size={8} />

      <CalculationResult
        savingsValues={savingsValues}
        savingsProductList={savingsProductList}
        selectedSavingsProductId={selectedSavingsProductId}
      />

      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />

      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />

      <ListRow
        contents={
          <ListRow.Texts
            type="3RowTypeA"
            top={'기본 정기적금'}
            topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
            middle={`연 이자율: 3.2%`}
            middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
            bottom={`100,000원 ~ 500,000원 | 12개월`}
            bottomProps={{ fontSize: 13, color: colors.grey600 }}
          />
        }
        onClick={() => {}}
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="3RowTypeA"
            top={'고급 정기적금'}
            topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
            middle={`연 이자율: 2.8%`}
            middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
            bottom={`50,000원 ~ 1,000,000원 | 24개월`}
            bottomProps={{ fontSize: 13, color: colors.grey600 }}
          />
        }
        onClick={() => {}}
      />

      <Spacing size={40} />
    </>
  );
}
