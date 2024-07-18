import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import {
  GetAllCodesResponse,
  UpdateCodeParams,
  UpdateCodeResponse,
} from './dto/index.dto';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private prismaService: PrismaService) {}

  async onModuleInit() {
    const requiredCodeValues: number[] = [
      75, 100, 150, 250, 300, 350, 400, 500,
    ];
    const codes = await this.prismaService.code.findMany();
    const presentValues = codes.map((code) => code.value);
    for (const requiredValue of requiredCodeValues) {
      if (presentValues.includes(requiredValue)) continue;
      await this.prismaService.code.create({
        data: {
          value: requiredValue,
          code: 'TEST',
          isActive: true,
        },
      });
    }
  }

  async getAllCodes(): Promise<GetAllCodesResponse> {
    const codes = await this.prismaService.code.findMany();
    return { codes };
  }

  async update({
    id,
    code,
    value,
  }: UpdateCodeParams): Promise<UpdateCodeResponse> {
    const updatedCode = await this.prismaService.code.update({
      where: {
        id,
      },
      data: {
        code,
        value,
      },
    });
    return { code: updatedCode };
  }
}
