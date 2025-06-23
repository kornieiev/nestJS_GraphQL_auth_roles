// https://youtu.be/HT6cm4GoSIw?t=23934

import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { isDev } from 'src/utils/is-dev.utils';

export async function getGraphQLConfig(
  ConfigService: ConfigService,
): Promise<ApolloDriverConfig> {
  return {
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
    playground: isDev(ConfigService), // закроет доступ к playground, если режим разработки не development // https://youtu.be/HT6cm4GoSIw?t=24652
    context: ({ req, res }) => ({ req, res }),
  };
}
