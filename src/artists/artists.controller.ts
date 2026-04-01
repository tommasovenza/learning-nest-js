import { Controller, Get, Query } from '@nestjs/common'

@Controller('artists')
export class ArtistsController {
  // get decorator
  @Get() // does not have any {}
  findAll(@Query('genre') genre: string) {
    return [{ genre }]
  }
}
