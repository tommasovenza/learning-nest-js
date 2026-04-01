import { Controller, Get, Post, Put, Delete } from '@nestjs/common'

@Controller('songs')
export class SongsController {
  // Post
  @Post()
  // Create Method
  create() {
    return 'POST => create a new song endpoint'
  }

  @Get()
  // findAll Method
  findAll() {
    return 'GET => find all songs endpoint'
  }

  @Get(':id')
  // findOne
  findOne() {
    return 'GET => fetch song on the based on id'
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
