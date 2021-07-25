import { Module } from '@nestjs/common';
import { AuthorResolver } from './authors.resolver';

@Module({
  providers: [AuthorResolver],
})
export class AuthorModule {}
