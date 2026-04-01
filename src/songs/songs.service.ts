import { Injectable } from '@nestjs/common'

@Injectable()
export class SongsService {
  // local DB
  // local array
  private readonly songs: string[] = []

  // method for create a new song
  createSong(song) {
    // push song in songs array as it was a DB
    this.songs.push(song)
    return this.songs
  }

  // method that returns local DB array with all songs
  findAll() {
    return this.songs
  }
}
