import { Component, OnInit, Input } from '@angular/core';
import {Howl, Howler} from 'howler';
import { MusicTileModel } from 'src/app/shared/models/music-tile-model';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  constructor() { }

  @Input() inputMusicTile: MusicTileModel;

  ngOnInit(): void {
  }

}
