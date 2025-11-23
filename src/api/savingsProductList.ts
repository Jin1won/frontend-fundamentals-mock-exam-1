import { SavingsProduct, savingsProductSchema } from 'schemas/savingsProduct';
import { http, isHttpError } from 'tosslib';
import z from 'zod';

export const getSavingsProductList = async (): Promise<SavingsProduct[]> => {
  try {
    const response = await http.get<SavingsProduct[]>('/api/savings-products');

    const validated = z.array(savingsProductSchema).parse(response);

    return validated;
  } catch (e) {
    if (isHttpError(e)) {
      throw new Error(`적금 상품 조회 실패: ${e.message}`);
    }

    if (e instanceof z.ZodError) {
      throw new Error(`적금 상품 데이터 검증 실패: ${e.message}`);
    }

    throw e;
  }
};
