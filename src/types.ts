import { Prisma } from './generated/prisma-client';

export interface Recipe {
  uri: string;
  label: string;
  image?: string;
  yield?: number;
  calories?: number;
  totalWeight?: number;
  totalNutrients?: object;
  ingredients?: Array<object>;
  dietLabels?: Array<string>;
  healthLabels?: Array<string>;
}

export interface SearchFilter {
  healthLabels: Array<string>;
  dietLabels: Array<string>;
}

export interface Context {
  prisma: Prisma;
}
