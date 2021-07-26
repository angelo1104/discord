import { Module } from '@nestjs/common';
import { PreFlightResolver } from './preFlight.resolver';
import { PreFlightService } from './preFlight.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigService],
  providers: [PreFlightResolver, PreFlightService],
})
export class AuthModule {}
