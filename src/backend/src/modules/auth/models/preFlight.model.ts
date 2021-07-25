import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PreFlightModel {
  @Field((type) => Boolean)
  validCaptcha: boolean;

  @Field((type) => Boolean)
  validUsername: boolean;
}
