import { inputObjectType, enumType } from 'nexus';

export const Filters = inputObjectType({
  name: 'Filters',
  definition(t) {
    t.list.field('healthLabels', { type: 'HealthEnum' });
    t.list.field('dietLabels', { type: 'DietEnum' });
  },
});

export const HealthEnum = enumType({
  name: 'HealthEnum',
  members: {
    vegan: 'vegan',
    vegetarian: 'vegetarian',
    sugarConscious: 'sugar-conscious',
    peanutFree: 'peanut-free',
    treeNutFree: 'tree-nut-free',
    alcoholFree: 'alcohol-free',
  },
});

export const DietEnum = enumType({
  name: 'DietEnum',
  members: {
    balanced: 'balanced',
    highProtein: 'high-protein',
    lowFat: 'low-fat',
    lowCarb: 'low-carb',
  },
});
