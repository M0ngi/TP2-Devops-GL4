import { Controller, Get, Inject } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchParamsDeco } from './decorators/search-param.decorator';
import { SearchOptions } from './dto/search-options.dto';

@Controller('search')
export class SearchController {
  @Inject() private searchService: SearchService

  @Get('')
  search(@SearchParamsDeco() options: SearchOptions) {
    return this.searchService.search(options);
  }
}
