import { Module } from '@nestjs/common';
import { PreFlightResolver } from './preFlight.resolver';
import { PreFlightService } from './preFlight.service';

@Module({
  providers: [PreFlightResolver, PreFlightService],
})
export class AuthModule {}
