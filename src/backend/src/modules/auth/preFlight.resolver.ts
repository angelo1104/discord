import { Args, Query, Resolver } from '@nestjs/graphql';
import { PreFlightModel } from './models/preFlight.model';

@Resolver((of) => PreFlightModel)
export class PreFlightResolver {
  @Query((returns) => PreFlightModel)
  async preflightUsername(
    @Args('token', { type: () => String }) token: string,
    @Args('username', { type: () => String }) username: string,
  ) {
    return {
      validCaptcha: true,
      validUsername: false,
    };
  }
}
