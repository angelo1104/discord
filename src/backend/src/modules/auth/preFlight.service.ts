import { Injectable } from '@nestjs/common';
import { verify } from 'hcaptcha';

interface VerifyToken {
  valid: boolean;
}

@Injectable()
export class PreFlightService {
  constructor() {}

  async verifyToken(token: string, secret: string): Promise<VerifyToken> {
    const { success } = await verify(secret, token);

    if (success) {
      return {
        valid: true,
      };
    }

    return {
      valid: false,
    };
  }
}
