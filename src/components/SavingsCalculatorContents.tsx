import { Tab } from 'tosslib';
import SavingsProductList from './SavingsProductList';
import { SavingsValues } from 'types/savings';
import { useMemo, useState } from 'react';
import SavingsCalculatorResults from './SavingsCalculatorResult';
import { useSuspenseSavingsProducts } from 'hooks/useSuspenseSavingsProducts';
import { SavingsProduct } from 'schemas/savingsProduct';

export type TabType = 'products' | 'results';

interface SavingsCalculatorContentsProps {
  savingsValues: SavingsValues;
}

export default function SavingsCalculatorContents({ savingsValues }: SavingsCalculatorContentsProps) {
  const [selectedTab, setSelectedTab] = useState<TabType>('products');
  const [selectedSavingsProductId, setSelectedSavingsProductId] = useState<string | null>(null);
  const { data: savingsProducts } = useSuspenseSavingsProducts();

  const { monthlyPaymentAmount, savingsPeriod } = savingsValues;

  const filteredProductList = useMemo(
    () =>
      savingsProducts.filter(
        product =>
          product.minMonthlyAmount < monthlyPaymentAmount &&
          monthlyPaymentAmount < product.maxMonthlyAmount &&
          savingsPeriod === product.availableTerms
      ),
    [savingsProducts, monthlyPaymentAmount, savingsPeriod]
  );

  const isProductsTab = selectedTab === 'products';

  const handleChangeTab = (newValue: string) => {
    setSelectedTab(newValue as TabType);
  };

  const changeSelectedSavingsProduct = (newValue: SavingsProduct) => {
    setSelectedSavingsProductId(newValue.id);
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
        <SavingsProductList
          savingsProducts={filteredProductList}
          selectedSavingsProductId={selectedSavingsProductId}
          changeSelectedSavingsProduct={changeSelectedSavingsProduct}
        />
      ) : (
        <SavingsCalculatorResults />
      )}
    </>
  );
}
