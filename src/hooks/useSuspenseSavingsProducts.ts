import { useSuspenseQuery } from '@tanstack/react-query';
import { getSavingsProducts } from 'api/savingsProduct';

export function useSuspenseSavingsProducts() {
  return useSuspenseQuery({
    queryKey: ['savingsProducts'],
    queryFn: getSavingsProducts,
  });
}
