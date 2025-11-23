import { Tab } from 'tosslib';
import { SavingsValues } from 'types/savings';
import { useMemo, useState } from 'react';
import { useSuspenseSavingsProductList } from 'hooks/useSuspenseSavingsProductList';
import { SavingsProduct } from 'schemas/savingsProduct';
import ProductList from './ProductList';
import Results from './Results';

export type TabType = 'products' | 'results';

interface ContentsProps {
  savingsValues: SavingsValues;
}

export default function Contents({ savingsValues }: ContentsProps) {
  const [selectedTab, setSelectedTab] = useState<TabType>('products');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const { data: products } = useSuspenseSavingsProductList();

  const { monthlyPaymentAmount, savingsPeriod } = savingsValues;

  const filteredProductList = useMemo(
    () =>
      products.filter(
        product =>
          product.minMonthlyAmount < monthlyPaymentAmount &&
          monthlyPaymentAmount < product.maxMonthlyAmount &&
          savingsPeriod === product.availableTerms
      ),
    [products, monthlyPaymentAmount, savingsPeriod]
  );

  const isProductsTab = selectedTab === 'products';

  const handleChangeTab = (newValue: string) => {
    setSelectedTab(newValue as TabType);
  };

  const changeSelectedProduct = (newValue: SavingsProduct) => {
    setSelectedProductId(newValue.id);
  };

  return (
    <>
      <Tab onChange={handleChangeTab}>
        <Tab.Item value="products" selected={isProductsTab}>
          적금 상품
        </Tab.Item>
        <Tab.Item value="results" selected={!isProductsTab}>
          계산 결과
        </Tab.Item>
      </Tab>
      {isProductsTab ? (
        <ProductList
          productList={filteredProductList}
          selectedProductId={selectedProductId}
          changeSelectedProduct={changeSelectedProduct}
        />
      ) : (
        <Results
          savingsValues={savingsValues}
          productList={filteredProductList}
          selectedProductId={selectedProductId}
        />
      )}
    </>
  );
}
