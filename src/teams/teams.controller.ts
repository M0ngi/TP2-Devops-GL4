import { Controller, Get, Inject, Param } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { SearchTeamParams } from './decorators/search-team.decorator';
import { GetTeamOptions } from './dto/get-team-options.dto';

@Controller('teams')
export class TeamsController {
  @Inject() private leaguesService: TeamsService

  @Get(':id')
  getTeam(@Param('id') id: number, @SearchTeamParams() options: GetTeamOptions) {
    return this.leaguesService.getTeam(id, options);
  }
}
