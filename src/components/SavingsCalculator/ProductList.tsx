import { SavingsProduct } from 'schemas/savingsProduct';
import { ListRow, colors, Assets } from 'tosslib';

interface ProductListProps {
  productList: SavingsProduct[];
  selectedProductId: string | null;
  changeSelectedProduct: (newValue: SavingsProduct) => void;
}

export default function ProductList({ productList, selectedProductId, changeSelectedProduct }: ProductListProps) {
  return (
    <>
      {productList.map(product => (
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
          onClick={() => changeSelectedProduct(product)}
        />
      ))}
    </>
  );
}
