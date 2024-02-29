import { Controller, Get, Inject, Param } from '@nestjs/common';
import { WorldnewsService } from './worldnews.service';
import { SearchNewsParams } from './decorators/search-team.decorator';
import { GetNewsOptions } from './dto/get-news-options.dto';

@Controller('worldnews')
export class WorldnewsController {
  @Inject() private leaguesService: WorldnewsService

  @Get()
  getNews(@SearchNewsParams() options: GetNewsOptions) {
    return this.leaguesService.getNews(options);
  }

  @Get('league/:id')
  getNewsByLeague(@Param('id') leagueId: number, @SearchNewsParams() options: GetNewsOptions) {
    return this.leaguesService.getNewsByLeague(leagueId, options)
  }
}
