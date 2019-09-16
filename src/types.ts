export interface Recipe {
  uri: string;
  label: string;
  image?: string;
  yield?: number;
  calories?: number;
  totalWeight?: number;
  totalNutrients?: object;
  ingredients?: Array<object>;
  dietLabels?: Enumerator<string>;
  healthLabels?: Enumerator<string>;
}

export interface SearchFilter {
  mealType: Enumerator<string>;
  health: Array<string>;
}
