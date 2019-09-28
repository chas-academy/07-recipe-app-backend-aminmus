import { Request } from 'express';
import { Prisma } from './generated/prisma-client';

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  ingredients: Array<string>;
  sourceUrl?: string;
  servings?: number;
  calories?: number;
  totalWeight?: number;
  totalNutrients?: object;
  dietLabels?: Array<string>;
  healthLabels?: Array<string>;
}

export interface SearchFilter {
  dietLabels: Array<string>;
  healthLabels: Array<string>;
}

export interface Context {
  prisma: Prisma;
  request: Request;
}
