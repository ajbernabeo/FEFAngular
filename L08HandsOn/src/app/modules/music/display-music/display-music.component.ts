import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Music } from '../../../shared/models/music';

@Component({
  selector: 'app-display-music',
  templateUrl: './display-music.component.html',
  styleUrls: ['./display-music.component.css']
})
export class DisplayMusicComponent implements OnInit {
  private musicRoute = 'http://localhost:3000/music';
  public musics: Music[];

  constructor(private http: HttpClient) { }

  getMusic() {
    this.http.get<Music[]>(this.musicRoute).subscribe(musics => {
      this.musics = musics;
      console.log('Movies', this.musics);
    });
  }

  ngOnInit() {
    this.getMusic();
  }

}
