import { Tab } from 'tosslib';
import SavingsProductList from './SavingsProductList';
import { SavingsValues } from 'types/savings';
import { useState } from 'react';
import SavingsCalculatorResults from './SavingsCalculatorResult';

export type TabType = 'products' | 'results';

interface SavingsCalculatorContentsProps {
  savingsValues: SavingsValues;
}

export default function SavingsCalculatorContents({ savingsValues }: SavingsCalculatorContentsProps) {
  const [selectedTab, setSelectedTab] = useState<TabType>();
  console.log(savingsValues);

  const isProductsTab = selectedTab === 'products';

  const handleChangeTab = (newValue: string) => {
    setSelectedTab(newValue as TabType);
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
      {isProductsTab ? <SavingsProductList /> : <SavingsCalculatorResults />}
    </>
  );
}
