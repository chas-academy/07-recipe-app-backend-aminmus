import { objectType } from 'nexus';

const Recipe = objectType({
  name: 'Recipe',
  definition(t) {
    t.string('uri');
    t.string('label');
    t.string('image');
    t.int('yield');
    t.float('calories');
    t.float('totalWeight');

    t.list.string('healthLabels');
    t.list.string('dietLabels');
  },
});

export default Recipe;
