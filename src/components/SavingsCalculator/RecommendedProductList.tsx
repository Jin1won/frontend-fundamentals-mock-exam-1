import { SavingsProduct } from 'schemas/savingsProduct';
import { ListRow, colors, Assets } from 'tosslib';

interface RecommendedProductListProps {
  selectedSavingsProductId: string | null;
  savingsProductList: SavingsProduct[];
}

export default function RecommendedProductList({
  selectedSavingsProductId,
  savingsProductList,
}: RecommendedProductListProps) {
  const recommendedSavingsProductList = [...savingsProductList].sort((a, b) => b.annualRate - a.annualRate).slice(0, 2);

  return (
    <>
      {recommendedSavingsProductList.map(savingsProduct => (
        <ListRow
          key={savingsProduct.id}
          contents={
            <ListRow.Texts
              key={savingsProduct.id}
              type="3RowTypeA"
              top={savingsProduct.name}
              topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
              middle={`연 이자율: ${savingsProduct.annualRate}%`}
              middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
              bottom={`${savingsProduct.minMonthlyAmount}원 ~ ${savingsProduct.maxMonthlyAmount}원 | ${savingsProduct.availableTerms}개월`}
              bottomProps={{ fontSize: 13, color: colors.grey600 }}
            />
          }
          right={savingsProduct.id === selectedSavingsProductId ? <Assets.Icon name="icon-check-circle-green" /> : null}
        />
      ))}
    </>
  );
}
