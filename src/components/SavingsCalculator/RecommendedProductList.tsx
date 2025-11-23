import { SavingsProduct } from 'schemas/savingsProduct';
import { ListRow, colors, Assets } from 'tosslib';

interface RecommendedProductListProps {
  productList: SavingsProduct[];
  selectedProductId: string | null;
}

export default function RecommendedProductList({ productList, selectedProductId }: RecommendedProductListProps) {
  const recommendedProductList = [...productList].sort((a, b) => b.annualRate - a.annualRate).slice(0, 2);

  return (
    <>
      {recommendedProductList.map(product => (
        <ListRow
          key={product.id}
          contents={
            <ListRow.Texts
              type="3RowTypeA"
              top={product.name}
              topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
              middle={`연 이자율: ${product.annualRate}%`}
              middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
              bottom={`${product.minMonthlyAmount}원 ~ ${product.maxMonthlyAmount}원 | ${product.availableTerms}개월`}
              bottomProps={{ fontSize: 13, color: colors.grey600 }}
            />
          }
          right={product.id === selectedProductId ? <Assets.Icon name="icon-check-circle-green" /> : null}
        />
      ))}
    </>
  );
}
