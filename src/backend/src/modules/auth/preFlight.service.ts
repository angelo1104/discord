import { Injectable } from '@nestjs/common';
import { verify } from 'hcaptcha';

interface VerifyToken {
  valid: boolean;
}

@Injectable()
export class PreFlightService {
  async verifyToken(token: string): Promise<VerifyToken> {
    const { success } = await verify(
      '0x50D090BdC2C74dc634d0A1c1728d9BDe247b9674',
      token,
    );

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
