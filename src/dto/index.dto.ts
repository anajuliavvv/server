import { Code } from '@prisma/client';

export class GetAllCodesResponse {
  codes: Code[];
}

export class UpdateCodeParams {
  id: number;
  code?: string;
  value?: number;
}

export class UpdateCodeResponse {
  code: Code;
}
