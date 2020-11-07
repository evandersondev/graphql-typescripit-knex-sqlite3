import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import { join } from 'path';

const typesArray = fileLoader(join(__dirname, 'modules', '**', '*.gql'));
const typeDefs = mergeTypes(typesArray);

export default typeDefs;
