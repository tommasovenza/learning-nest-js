import { Controller, Get, Post, Put, Delete } from '@nestjs/common'
import { SongsService } from './songs.service'

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  // Post
  @Post()
  // Create Method
  create() {
    return this.songsService.createSong('create first song => Open Your Eyes!')
  }

  @Get()
  // findAll Method
  findAll() {
    return 'GET => find all songs endpoint'
  }

  @Get(':id')
  // findOne
  findOne() {
    return 'GET => fetch song based on id'
  }

  @Put(':id')
  // update
  update() {
    return 'PUT => update song on the based on id'
  }

  @Delete(':id')
  // delete
  delete() {
    return 'DELETE => delete a song on the based on id'
  }
}
