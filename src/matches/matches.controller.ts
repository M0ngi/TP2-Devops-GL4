import { Controller, Get, Inject, Param } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { SearchMatchesParams } from './decorators/search-matches.decorator';
import { GetMatchesOptions } from './dto/get-matches-options.dto';

@Controller('matches')
export class MatchesController {
  @Inject() private leaguesService: MatchesService

  @Get('')
  getMatches(@SearchMatchesParams() options: GetMatchesOptions) {
    return this.leaguesService.getMatches(options);
  }

  @Get('fixtures/league/:id')
  getMatchesFixture(@Param('id') id: number, @SearchMatchesParams() options: GetMatchesOptions) {
    return this.leaguesService.getLeagueMatchesFixture(id, options);
  }
}
