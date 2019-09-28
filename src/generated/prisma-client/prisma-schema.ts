// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregatedietLabel {
  count: Int!
}

type AggregatehealthLabel {
  count: Int!
}

type AggregateRecipe {
  count: Int!
}

type AggregateRecipeList {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type dietLabel {
  id: ID!
  label: String!
}

type dietLabelConnection {
  pageInfo: PageInfo!
  edges: [dietLabelEdge]!
  aggregate: AggregatedietLabel!
}

input dietLabelCreateInput {
  id: ID
  label: String!
}

input dietLabelCreateManyInput {
  create: [dietLabelCreateInput!]
  connect: [dietLabelWhereUniqueInput!]
}

type dietLabelEdge {
  node: dietLabel!
  cursor: String!
}

enum dietLabelOrderByInput {
  id_ASC
  id_DESC
  label_ASC
  label_DESC
}

type dietLabelPreviousValues {
  id: ID!
  label: String!
}

input dietLabelScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  AND: [dietLabelScalarWhereInput!]
  OR: [dietLabelScalarWhereInput!]
  NOT: [dietLabelScalarWhereInput!]
}

type dietLabelSubscriptionPayload {
  mutation: MutationType!
  node: dietLabel
  updatedFields: [String!]
  previousValues: dietLabelPreviousValues
}

input dietLabelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: dietLabelWhereInput
  AND: [dietLabelSubscriptionWhereInput!]
  OR: [dietLabelSubscriptionWhereInput!]
  NOT: [dietLabelSubscriptionWhereInput!]
}

input dietLabelUpdateDataInput {
  label: String
}

input dietLabelUpdateInput {
  label: String
}

input dietLabelUpdateManyDataInput {
  label: String
}

input dietLabelUpdateManyInput {
  create: [dietLabelCreateInput!]
  update: [dietLabelUpdateWithWhereUniqueNestedInput!]
  upsert: [dietLabelUpsertWithWhereUniqueNestedInput!]
  delete: [dietLabelWhereUniqueInput!]
  connect: [dietLabelWhereUniqueInput!]
  set: [dietLabelWhereUniqueInput!]
  disconnect: [dietLabelWhereUniqueInput!]
  deleteMany: [dietLabelScalarWhereInput!]
  updateMany: [dietLabelUpdateManyWithWhereNestedInput!]
}

input dietLabelUpdateManyMutationInput {
  label: String
}

input dietLabelUpdateManyWithWhereNestedInput {
  where: dietLabelScalarWhereInput!
  data: dietLabelUpdateManyDataInput!
}

input dietLabelUpdateWithWhereUniqueNestedInput {
  where: dietLabelWhereUniqueInput!
  data: dietLabelUpdateDataInput!
}

input dietLabelUpsertWithWhereUniqueNestedInput {
  where: dietLabelWhereUniqueInput!
  update: dietLabelUpdateDataInput!
  create: dietLabelCreateInput!
}

input dietLabelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  AND: [dietLabelWhereInput!]
  OR: [dietLabelWhereInput!]
  NOT: [dietLabelWhereInput!]
}

input dietLabelWhereUniqueInput {
  id: ID
  label: String
}

type healthLabel {
  id: ID!
  label: String!
}

type healthLabelConnection {
  pageInfo: PageInfo!
  edges: [healthLabelEdge]!
  aggregate: AggregatehealthLabel!
}

input healthLabelCreateInput {
  id: ID
  label: String!
}

input healthLabelCreateManyInput {
  create: [healthLabelCreateInput!]
  connect: [healthLabelWhereUniqueInput!]
}

type healthLabelEdge {
  node: healthLabel!
  cursor: String!
}

enum healthLabelOrderByInput {
  id_ASC
  id_DESC
  label_ASC
  label_DESC
}

type healthLabelPreviousValues {
  id: ID!
  label: String!
}

input healthLabelScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  AND: [healthLabelScalarWhereInput!]
  OR: [healthLabelScalarWhereInput!]
  NOT: [healthLabelScalarWhereInput!]
}

type healthLabelSubscriptionPayload {
  mutation: MutationType!
  node: healthLabel
  updatedFields: [String!]
  previousValues: healthLabelPreviousValues
}

input healthLabelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: healthLabelWhereInput
  AND: [healthLabelSubscriptionWhereInput!]
  OR: [healthLabelSubscriptionWhereInput!]
  NOT: [healthLabelSubscriptionWhereInput!]
}

input healthLabelUpdateDataInput {
  label: String
}

input healthLabelUpdateInput {
  label: String
}

input healthLabelUpdateManyDataInput {
  label: String
}

input healthLabelUpdateManyInput {
  create: [healthLabelCreateInput!]
  update: [healthLabelUpdateWithWhereUniqueNestedInput!]
  upsert: [healthLabelUpsertWithWhereUniqueNestedInput!]
  delete: [healthLabelWhereUniqueInput!]
  connect: [healthLabelWhereUniqueInput!]
  set: [healthLabelWhereUniqueInput!]
  disconnect: [healthLabelWhereUniqueInput!]
  deleteMany: [healthLabelScalarWhereInput!]
  updateMany: [healthLabelUpdateManyWithWhereNestedInput!]
}

input healthLabelUpdateManyMutationInput {
  label: String
}

input healthLabelUpdateManyWithWhereNestedInput {
  where: healthLabelScalarWhereInput!
  data: healthLabelUpdateManyDataInput!
}

input healthLabelUpdateWithWhereUniqueNestedInput {
  where: healthLabelWhereUniqueInput!
  data: healthLabelUpdateDataInput!
}

input healthLabelUpsertWithWhereUniqueNestedInput {
  where: healthLabelWhereUniqueInput!
  update: healthLabelUpdateDataInput!
  create: healthLabelCreateInput!
}

input healthLabelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  AND: [healthLabelWhereInput!]
  OR: [healthLabelWhereInput!]
  NOT: [healthLabelWhereInput!]
}

input healthLabelWhereUniqueInput {
  id: ID
  label: String
}

scalar Json

scalar Long

type Mutation {
  createRecipe(data: RecipeCreateInput!): Recipe!
  updateRecipe(data: RecipeUpdateInput!, where: RecipeWhereUniqueInput!): Recipe
  updateManyRecipes(data: RecipeUpdateManyMutationInput!, where: RecipeWhereInput): BatchPayload!
  upsertRecipe(where: RecipeWhereUniqueInput!, create: RecipeCreateInput!, update: RecipeUpdateInput!): Recipe!
  deleteRecipe(where: RecipeWhereUniqueInput!): Recipe
  deleteManyRecipes(where: RecipeWhereInput): BatchPayload!
  createRecipeList(data: RecipeListCreateInput!): RecipeList!
  updateRecipeList(data: RecipeListUpdateInput!, where: RecipeListWhereUniqueInput!): RecipeList
  updateManyRecipeLists(data: RecipeListUpdateManyMutationInput!, where: RecipeListWhereInput): BatchPayload!
  upsertRecipeList(where: RecipeListWhereUniqueInput!, create: RecipeListCreateInput!, update: RecipeListUpdateInput!): RecipeList!
  deleteRecipeList(where: RecipeListWhereUniqueInput!): RecipeList
  deleteManyRecipeLists(where: RecipeListWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createdietLabel(data: dietLabelCreateInput!): dietLabel!
  updatedietLabel(data: dietLabelUpdateInput!, where: dietLabelWhereUniqueInput!): dietLabel
  updateManydietLabels(data: dietLabelUpdateManyMutationInput!, where: dietLabelWhereInput): BatchPayload!
  upsertdietLabel(where: dietLabelWhereUniqueInput!, create: dietLabelCreateInput!, update: dietLabelUpdateInput!): dietLabel!
  deletedietLabel(where: dietLabelWhereUniqueInput!): dietLabel
  deleteManydietLabels(where: dietLabelWhereInput): BatchPayload!
  createhealthLabel(data: healthLabelCreateInput!): healthLabel!
  updatehealthLabel(data: healthLabelUpdateInput!, where: healthLabelWhereUniqueInput!): healthLabel
  updateManyhealthLabels(data: healthLabelUpdateManyMutationInput!, where: healthLabelWhereInput): BatchPayload!
  upserthealthLabel(where: healthLabelWhereUniqueInput!, create: healthLabelCreateInput!, update: healthLabelUpdateInput!): healthLabel!
  deletehealthLabel(where: healthLabelWhereUniqueInput!): healthLabel
  deleteManyhealthLabels(where: healthLabelWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  recipe(where: RecipeWhereUniqueInput!): Recipe
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe]!
  recipesConnection(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RecipeConnection!
  recipeList(where: RecipeListWhereUniqueInput!): RecipeList
  recipeLists(where: RecipeListWhereInput, orderBy: RecipeListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RecipeList]!
  recipeListsConnection(where: RecipeListWhereInput, orderBy: RecipeListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RecipeListConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  dietLabel(where: dietLabelWhereUniqueInput!): dietLabel
  dietLabels(where: dietLabelWhereInput, orderBy: dietLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [dietLabel]!
  dietLabelsConnection(where: dietLabelWhereInput, orderBy: dietLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): dietLabelConnection!
  healthLabel(where: healthLabelWhereUniqueInput!): healthLabel
  healthLabels(where: healthLabelWhereInput, orderBy: healthLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [healthLabel]!
  healthLabelsConnection(where: healthLabelWhereInput, orderBy: healthLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): healthLabelConnection!
  node(id: ID!): Node
}

type Recipe {
  id: ID!
  label: String!
  uri: String!
  image: String!
  source: String!
  sourceUrl: String!
  servings: Int!
  ingredients: Json!
  calories: Float!
  totalWeight: Float!
  healthLabels(where: healthLabelWhereInput, orderBy: healthLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [healthLabel!]
  dietLabels(where: dietLabelWhereInput, orderBy: dietLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [dietLabel!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RecipeConnection {
  pageInfo: PageInfo!
  edges: [RecipeEdge]!
  aggregate: AggregateRecipe!
}

input RecipeCreateInput {
  id: ID
  label: String!
  uri: String!
  image: String!
  source: String!
  sourceUrl: String!
  servings: Int!
  ingredients: Json!
  calories: Float!
  totalWeight: Float!
  healthLabels: healthLabelCreateManyInput
  dietLabels: dietLabelCreateManyInput
}

input RecipeCreateManyInput {
  create: [RecipeCreateInput!]
  connect: [RecipeWhereUniqueInput!]
}

type RecipeEdge {
  node: Recipe!
  cursor: String!
}

type RecipeList {
  id: ID!
  name: String!
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe!]
  owner: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RecipeListConnection {
  pageInfo: PageInfo!
  edges: [RecipeListEdge]!
  aggregate: AggregateRecipeList!
}

input RecipeListCreateInput {
  id: ID
  name: String!
  recipes: RecipeCreateManyInput
  owner: UserCreateOneWithoutRecipeListsInput!
}

input RecipeListCreateManyWithoutOwnerInput {
  create: [RecipeListCreateWithoutOwnerInput!]
  connect: [RecipeListWhereUniqueInput!]
}

input RecipeListCreateWithoutOwnerInput {
  id: ID
  name: String!
  recipes: RecipeCreateManyInput
}

type RecipeListEdge {
  node: RecipeList!
  cursor: String!
}

enum RecipeListOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RecipeListPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input RecipeListScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RecipeListScalarWhereInput!]
  OR: [RecipeListScalarWhereInput!]
  NOT: [RecipeListScalarWhereInput!]
}

type RecipeListSubscriptionPayload {
  mutation: MutationType!
  node: RecipeList
  updatedFields: [String!]
  previousValues: RecipeListPreviousValues
}

input RecipeListSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RecipeListWhereInput
  AND: [RecipeListSubscriptionWhereInput!]
  OR: [RecipeListSubscriptionWhereInput!]
  NOT: [RecipeListSubscriptionWhereInput!]
}

input RecipeListUpdateInput {
  name: String
  recipes: RecipeUpdateManyInput
  owner: UserUpdateOneRequiredWithoutRecipeListsInput
}

input RecipeListUpdateManyDataInput {
  name: String
}

input RecipeListUpdateManyMutationInput {
  name: String
}

input RecipeListUpdateManyWithoutOwnerInput {
  create: [RecipeListCreateWithoutOwnerInput!]
  delete: [RecipeListWhereUniqueInput!]
  connect: [RecipeListWhereUniqueInput!]
  set: [RecipeListWhereUniqueInput!]
  disconnect: [RecipeListWhereUniqueInput!]
  update: [RecipeListUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [RecipeListUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [RecipeListScalarWhereInput!]
  updateMany: [RecipeListUpdateManyWithWhereNestedInput!]
}

input RecipeListUpdateManyWithWhereNestedInput {
  where: RecipeListScalarWhereInput!
  data: RecipeListUpdateManyDataInput!
}

input RecipeListUpdateWithoutOwnerDataInput {
  name: String
  recipes: RecipeUpdateManyInput
}

input RecipeListUpdateWithWhereUniqueWithoutOwnerInput {
  where: RecipeListWhereUniqueInput!
  data: RecipeListUpdateWithoutOwnerDataInput!
}

input RecipeListUpsertWithWhereUniqueWithoutOwnerInput {
  where: RecipeListWhereUniqueInput!
  update: RecipeListUpdateWithoutOwnerDataInput!
  create: RecipeListCreateWithoutOwnerInput!
}

input RecipeListWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  recipes_every: RecipeWhereInput
  recipes_some: RecipeWhereInput
  recipes_none: RecipeWhereInput
  owner: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RecipeListWhereInput!]
  OR: [RecipeListWhereInput!]
  NOT: [RecipeListWhereInput!]
}

input RecipeListWhereUniqueInput {
  id: ID
}

enum RecipeOrderByInput {
  id_ASC
  id_DESC
  label_ASC
  label_DESC
  uri_ASC
  uri_DESC
  image_ASC
  image_DESC
  source_ASC
  source_DESC
  sourceUrl_ASC
  sourceUrl_DESC
  servings_ASC
  servings_DESC
  ingredients_ASC
  ingredients_DESC
  calories_ASC
  calories_DESC
  totalWeight_ASC
  totalWeight_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RecipePreviousValues {
  id: ID!
  label: String!
  uri: String!
  image: String!
  source: String!
  sourceUrl: String!
  servings: Int!
  ingredients: Json!
  calories: Float!
  totalWeight: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input RecipeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  uri: String
  uri_not: String
  uri_in: [String!]
  uri_not_in: [String!]
  uri_lt: String
  uri_lte: String
  uri_gt: String
  uri_gte: String
  uri_contains: String
  uri_not_contains: String
  uri_starts_with: String
  uri_not_starts_with: String
  uri_ends_with: String
  uri_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  source: String
  source_not: String
  source_in: [String!]
  source_not_in: [String!]
  source_lt: String
  source_lte: String
  source_gt: String
  source_gte: String
  source_contains: String
  source_not_contains: String
  source_starts_with: String
  source_not_starts_with: String
  source_ends_with: String
  source_not_ends_with: String
  sourceUrl: String
  sourceUrl_not: String
  sourceUrl_in: [String!]
  sourceUrl_not_in: [String!]
  sourceUrl_lt: String
  sourceUrl_lte: String
  sourceUrl_gt: String
  sourceUrl_gte: String
  sourceUrl_contains: String
  sourceUrl_not_contains: String
  sourceUrl_starts_with: String
  sourceUrl_not_starts_with: String
  sourceUrl_ends_with: String
  sourceUrl_not_ends_with: String
  servings: Int
  servings_not: Int
  servings_in: [Int!]
  servings_not_in: [Int!]
  servings_lt: Int
  servings_lte: Int
  servings_gt: Int
  servings_gte: Int
  calories: Float
  calories_not: Float
  calories_in: [Float!]
  calories_not_in: [Float!]
  calories_lt: Float
  calories_lte: Float
  calories_gt: Float
  calories_gte: Float
  totalWeight: Float
  totalWeight_not: Float
  totalWeight_in: [Float!]
  totalWeight_not_in: [Float!]
  totalWeight_lt: Float
  totalWeight_lte: Float
  totalWeight_gt: Float
  totalWeight_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RecipeScalarWhereInput!]
  OR: [RecipeScalarWhereInput!]
  NOT: [RecipeScalarWhereInput!]
}

type RecipeSubscriptionPayload {
  mutation: MutationType!
  node: Recipe
  updatedFields: [String!]
  previousValues: RecipePreviousValues
}

input RecipeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RecipeWhereInput
  AND: [RecipeSubscriptionWhereInput!]
  OR: [RecipeSubscriptionWhereInput!]
  NOT: [RecipeSubscriptionWhereInput!]
}

input RecipeUpdateDataInput {
  label: String
  uri: String
  image: String
  source: String
  sourceUrl: String
  servings: Int
  ingredients: Json
  calories: Float
  totalWeight: Float
  healthLabels: healthLabelUpdateManyInput
  dietLabels: dietLabelUpdateManyInput
}

input RecipeUpdateInput {
  label: String
  uri: String
  image: String
  source: String
  sourceUrl: String
  servings: Int
  ingredients: Json
  calories: Float
  totalWeight: Float
  healthLabels: healthLabelUpdateManyInput
  dietLabels: dietLabelUpdateManyInput
}

input RecipeUpdateManyDataInput {
  label: String
  uri: String
  image: String
  source: String
  sourceUrl: String
  servings: Int
  ingredients: Json
  calories: Float
  totalWeight: Float
}

input RecipeUpdateManyInput {
  create: [RecipeCreateInput!]
  update: [RecipeUpdateWithWhereUniqueNestedInput!]
  upsert: [RecipeUpsertWithWhereUniqueNestedInput!]
  delete: [RecipeWhereUniqueInput!]
  connect: [RecipeWhereUniqueInput!]
  set: [RecipeWhereUniqueInput!]
  disconnect: [RecipeWhereUniqueInput!]
  deleteMany: [RecipeScalarWhereInput!]
  updateMany: [RecipeUpdateManyWithWhereNestedInput!]
}

input RecipeUpdateManyMutationInput {
  label: String
  uri: String
  image: String
  source: String
  sourceUrl: String
  servings: Int
  ingredients: Json
  calories: Float
  totalWeight: Float
}

input RecipeUpdateManyWithWhereNestedInput {
  where: RecipeScalarWhereInput!
  data: RecipeUpdateManyDataInput!
}

input RecipeUpdateWithWhereUniqueNestedInput {
  where: RecipeWhereUniqueInput!
  data: RecipeUpdateDataInput!
}

input RecipeUpsertWithWhereUniqueNestedInput {
  where: RecipeWhereUniqueInput!
  update: RecipeUpdateDataInput!
  create: RecipeCreateInput!
}

input RecipeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  label: String
  label_not: String
  label_in: [String!]
  label_not_in: [String!]
  label_lt: String
  label_lte: String
  label_gt: String
  label_gte: String
  label_contains: String
  label_not_contains: String
  label_starts_with: String
  label_not_starts_with: String
  label_ends_with: String
  label_not_ends_with: String
  uri: String
  uri_not: String
  uri_in: [String!]
  uri_not_in: [String!]
  uri_lt: String
  uri_lte: String
  uri_gt: String
  uri_gte: String
  uri_contains: String
  uri_not_contains: String
  uri_starts_with: String
  uri_not_starts_with: String
  uri_ends_with: String
  uri_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  source: String
  source_not: String
  source_in: [String!]
  source_not_in: [String!]
  source_lt: String
  source_lte: String
  source_gt: String
  source_gte: String
  source_contains: String
  source_not_contains: String
  source_starts_with: String
  source_not_starts_with: String
  source_ends_with: String
  source_not_ends_with: String
  sourceUrl: String
  sourceUrl_not: String
  sourceUrl_in: [String!]
  sourceUrl_not_in: [String!]
  sourceUrl_lt: String
  sourceUrl_lte: String
  sourceUrl_gt: String
  sourceUrl_gte: String
  sourceUrl_contains: String
  sourceUrl_not_contains: String
  sourceUrl_starts_with: String
  sourceUrl_not_starts_with: String
  sourceUrl_ends_with: String
  sourceUrl_not_ends_with: String
  servings: Int
  servings_not: Int
  servings_in: [Int!]
  servings_not_in: [Int!]
  servings_lt: Int
  servings_lte: Int
  servings_gt: Int
  servings_gte: Int
  calories: Float
  calories_not: Float
  calories_in: [Float!]
  calories_not_in: [Float!]
  calories_lt: Float
  calories_lte: Float
  calories_gt: Float
  calories_gte: Float
  totalWeight: Float
  totalWeight_not: Float
  totalWeight_in: [Float!]
  totalWeight_not_in: [Float!]
  totalWeight_lt: Float
  totalWeight_lte: Float
  totalWeight_gt: Float
  totalWeight_gte: Float
  healthLabels_every: healthLabelWhereInput
  healthLabels_some: healthLabelWhereInput
  healthLabels_none: healthLabelWhereInput
  dietLabels_every: dietLabelWhereInput
  dietLabels_some: dietLabelWhereInput
  dietLabels_none: dietLabelWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RecipeWhereInput!]
  OR: [RecipeWhereInput!]
  NOT: [RecipeWhereInput!]
}

input RecipeWhereUniqueInput {
  id: ID
  uri: String
}

type Subscription {
  recipe(where: RecipeSubscriptionWhereInput): RecipeSubscriptionPayload
  recipeList(where: RecipeListSubscriptionWhereInput): RecipeListSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  dietLabel(where: dietLabelSubscriptionWhereInput): dietLabelSubscriptionPayload
  healthLabel(where: healthLabelSubscriptionWhereInput): healthLabelSubscriptionPayload
}

type User {
  id: ID!
  password: String!
  name: String!
  email: String!
  recipeLists(where: RecipeListWhereInput, orderBy: RecipeListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RecipeList!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  password: String!
  name: String!
  email: String!
  recipeLists: RecipeListCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutRecipeListsInput {
  create: UserCreateWithoutRecipeListsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutRecipeListsInput {
  id: ID
  password: String!
  name: String!
  email: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  password: String!
  name: String!
  email: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  password: String
  name: String
  email: String
  recipeLists: RecipeListUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  password: String
  name: String
  email: String
}

input UserUpdateOneRequiredWithoutRecipeListsInput {
  create: UserCreateWithoutRecipeListsInput
  update: UserUpdateWithoutRecipeListsDataInput
  upsert: UserUpsertWithoutRecipeListsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutRecipeListsDataInput {
  password: String
  name: String
  email: String
}

input UserUpsertWithoutRecipeListsInput {
  update: UserUpdateWithoutRecipeListsDataInput!
  create: UserCreateWithoutRecipeListsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  recipeLists_every: RecipeListWhereInput
  recipeLists_some: RecipeListWhereInput
  recipeLists_none: RecipeListWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`