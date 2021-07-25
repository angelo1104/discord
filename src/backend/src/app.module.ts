import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorModule } from './modules/authors/author.module';
import { join } from 'path';

@Module({
  imports: [
    AuthorModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
