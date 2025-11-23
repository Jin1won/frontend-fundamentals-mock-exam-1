import { useSuspenseQuery } from '@tanstack/react-query';
import { getSavingsProductList } from 'api/savingsProductList';

export function useSuspenseSavingsProductList() {
  return useSuspenseQuery({
    queryKey: ['savingsProductList'],
    queryFn: getSavingsProductList,
  });
}
