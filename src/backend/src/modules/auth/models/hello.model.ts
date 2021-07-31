import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HelloModel {
  @Field((type) => String)
  message: string;
}
