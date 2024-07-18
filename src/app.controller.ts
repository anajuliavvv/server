import { Body, Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';
import {
  GetAllCodesResponse,
  UpdateCodeParams,
  UpdateCodeResponse,
} from './dto/index.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  async getAllCodes(): Promise<GetAllCodesResponse> {
    return await this.appService.getAllCodes();
  }

  @Put('')
  async updateCode(
    @Body() data: UpdateCodeParams,
  ): Promise<UpdateCodeResponse> {
    return await this.appService.update(data);
  }
}
