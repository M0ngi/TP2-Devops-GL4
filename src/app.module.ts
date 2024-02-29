import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorldnewsModule } from './worldnews/worldnews.module';
import { TransfersModule } from './transfers/transfers.module';
import { MatchesModule } from './matches/matches.module';
import { LeaguesModule } from './leagues/leagues.module';
import { TeamsModule } from './teams/teams.module';
import { AppConfigModule } from '@app_config/config.module';
import { ApiClientModule } from './api_client/api_client.module';
import { AllLeaguesModule } from './all-leagues/all-leagues.module';
import { SearchModule } from './search/search.module';
import { MongooseModule, MongooseModuleFactoryOptions } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigService } from '@app_config/config.service';

@Module({
  imports: [
    AppConfigModule,
    TeamsModule,
    WorldnewsModule,
    TransfersModule,
    MatchesModule,
    LeaguesModule,
    ApiClientModule,
    AllLeaguesModule,
    SearchModule,
    MongooseModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService,
      ): Promise<MongooseModuleFactoryOptions> => {
        return {
          ...configService.getDatabaseConfig(),
        }
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
