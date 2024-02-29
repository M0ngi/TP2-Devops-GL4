import { Controller, Get, Inject } from '@nestjs/common';
import { AllLeaguesService } from './all-leagues.service';

@Controller('allLeagues')
export class AllLeaguesController {
  @Inject() private allLeaguesService: AllLeaguesService

  @Get('')
  getAll() {
    return this.allLeaguesService.getAll()
  }

  @Get('popular')
  getPopular() {
    return this.allLeaguesService.getPopular()
  }

  @Get('country')
  getByCountry() {
    return this.allLeaguesService.getByCountry()
  }
}
