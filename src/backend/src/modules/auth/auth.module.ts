import { Module } from '@nestjs/common';
import { PreFlightResolver } from './preFlight.resolver';

@Module({
  providers: [PreFlightResolver],
})
export class AuthModule {}
