import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { PreFlightModel } from './models/preFlight.model';
import { PreFlightService } from './preFlight.service';
import { ConfigService } from '@nestjs/config';
import { HelloModel } from './models/hello.model';

@Resolver((of) => PreFlightModel)
export class PreFlightResolver {
  constructor(
    private readonly preflightService: PreFlightService,
    private configService: ConfigService,
  ) {}

  @Query((returns) => HelloModel)
  async hello() {
    return {
      message: 'hello, there',
    };
  }

  @Mutation((returns) => PreFlightModel)
  async preflightUsername(
    @Args('token', { type: () => String }) token: string,
    @Args('username', { type: () => String }) username: string,
  ) {
    try {
      const secret = this.configService.get<string>('captchaSecret');

      const { valid } = await this.preflightService.verifyToken(token, secret);

      return {
        validCaptcha: valid,
        validUsername: username.length > 1 && username.length < 33,
      };
    } catch (error) {
      throw new Error('Internal server error.');
    }
  }
}
