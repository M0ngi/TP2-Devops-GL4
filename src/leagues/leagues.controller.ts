import { Controller, Get, Inject, Param } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { SearchLeagueParams } from './decorators/search-league.decorator';
import { GetLeagueOptions } from './dto/get-league-options.dto';

@Controller('leagues')
export class LeaguesController {
  @Inject() private leaguesService: LeaguesService

  constructor() { }

  @Get(':id')
  getLeague(@Param('id') id: number, @SearchLeagueParams() options: GetLeagueOptions) {
    return this.leaguesService.getLeague(id, options);
  }

  @Get(':id/overview')
  getLeagueOverview(@Param('id') id: number, @SearchLeagueParams() options: GetLeagueOptions) {
    return this.leaguesService.getLeagueOverview(id, options);
  }

  @Get(':id/table')
  getLeagueTable(@Param('id') id: number, @SearchLeagueParams() options: GetLeagueOptions) {
    return this.leaguesService.getLeagueTable(id, options);
  }

  @Get(':id/playoff')
  getLeaguePlayoff(@Param('id') id: number, @SearchLeagueParams() options: GetLeagueOptions) {
    return this.leaguesService.getLeaguePlayoff(id, options);
  }

  @Get(':id/matches')
  getLeagueMatches(@Param('id') id: number, @SearchLeagueParams() options: GetLeagueOptions) {
    return this.leaguesService.getLeagueMatches(id, options);
  }

  @Get(':id/stats')
  getLeagueStats(@Param('id') id: number, @SearchLeagueParams() options: GetLeagueOptions) {
    return this.leaguesService.getLeagueStats(id, options);
  }
}
