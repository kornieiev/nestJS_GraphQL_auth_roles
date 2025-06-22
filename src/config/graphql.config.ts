// https://youtu.be/HT6cm4GoSIw?t=23934

import { ApolloDriver } from '@nestjs/apollo';
import { GqlModuleOptions } from '@nestjs/graphql';

export async function getGraphQLConfig(): Promise<GqlModuleOptions> {
  return {
    driver: ApolloDriver,
    autoSchemaFile: true,
  };
}
