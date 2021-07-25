import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Author } from './models/author.model';

@Resolver((of) => Author)
export class AuthorResolver {
  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return 'hello';
  }

  @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return { authorId: id };
  }
}
