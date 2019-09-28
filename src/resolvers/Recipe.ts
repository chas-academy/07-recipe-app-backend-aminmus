import { objectType } from 'nexus';

const Recipe = objectType({
  name: 'Recipe',
  description: 'Recipe fetched from internal database',
  definition(t) {
    t.string('uri');
    t.string('label');
    t.string('image');
    t.string('source', { description: 'Original source site name' });
    t.string('sourceUrl', { description: 'URL to the original recipe from the source' });
    t.int('servings', { description: 'Number of servings', nullable: true });
    t.float('calories', { description: 'Total energy measured in kcal', nullable: true });
    t.float('totalWeight', { description: 'Total weight measured in grams', nullable: true });

    t.list.string('ingredients');
    t.list.string('healthLabels', { description: 'For example: "vegan" and/or "peanut-free"', nullable: true });
    t.list.string('dietLabels', { description: 'For example: "high-protein" and/or "low-carb"', nullable: true });
  },
});

export default Recipe;
