import { Spacing, Border, ListHeader } from 'tosslib';
import CalculationResult from './CalculationResult';
import { SavingsValues } from 'types/savings';
import { SavingsProduct } from 'schemas/savingsProduct';
import RecommendedProductList from './RecommendedProductList';

interface ResultsProps {
  savingsValues: SavingsValues;
  savingsProductList: SavingsProduct[];
  selectedSavingsProductId: string | null;
}

export default function Results({ savingsValues, savingsProductList, selectedSavingsProductId }: ResultsProps) {
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

      <RecommendedProductList
        selectedSavingsProductId={selectedSavingsProductId}
        savingsProductList={savingsProductList}
      />

      <Spacing size={40} />
    </>
  );
}
