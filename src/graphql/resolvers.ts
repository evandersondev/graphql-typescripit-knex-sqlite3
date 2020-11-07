import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import { join } from 'path';

const resolversArray = fileLoader(
  join(__dirname, 'modules', '**', 'resolvers.ts')
);
const resolvers = mergeResolvers(resolversArray);

export default resolvers;
