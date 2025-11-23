import { Tab } from 'tosslib';
import SavingsProductList from './SavingsProductList';
// import SavingsCalculatorResults from './SavingsCalculatorResult';

export default function SavingsCalculatorContents() {
  return (
    <>
      <Tab onChange={() => {}}>
        <Tab.Item value="products" selected={true}>
          적금 상품
        </Tab.Item>
        <Tab.Item value="results" selected={false}>
          계산 결과
        </Tab.Item>
      </Tab>
      <SavingsProductList />
      {/* <SavingsCalculatorResults /> */}
    </>
  );
}
