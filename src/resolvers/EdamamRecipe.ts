import { objectType } from 'nexus';

const EdamamRecipe = objectType({
  name: 'EdamamRecipe',
  description: 'Recipe directly fetched from the Edamam Recipe API',
  definition(t) {
    t.string('uri');
    t.string('label');
    t.string('image');
    t.int('servings', { nullable: true });
    t.float('calories', { nullable: true });
    t.float('totalWeight', { nullable: true });

    t.list.string('healthLabels', { nullable: true });
    t.list.string('dietLabels', { nullable: true });
  },
});

export default EdamamRecipe;
