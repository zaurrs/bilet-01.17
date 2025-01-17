import { object, string, number, date, InferType } from 'yup';

export const productSchema = object({
  name: string().required(),
  price: number().required().positive(),
  image: string().url().required(),
  category: string().url().nullable(),
});