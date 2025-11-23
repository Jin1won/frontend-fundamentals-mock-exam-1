import { useSuspenseQuery } from '@tanstack/react-query';
import { getSavingsProducts } from 'api/savingsProducts';

export function useSuspenseSavingsProducts() {
  return useSuspenseQuery({
    queryKey: ['savingsProducts'],
    queryFn: getSavingsProducts,
  });
}
