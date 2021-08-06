import { Controller, Get, Redirect, Res } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    @Redirect('restaurant')
    redirect(){}
}
