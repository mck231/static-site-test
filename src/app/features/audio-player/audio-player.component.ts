import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public playSong()
  {

    let sound = new Howl({
      src: ['https://firebasestorage.googleapis.com/v0/b/who-is-marco-cabrera.appspot.com/o/pennies.wav?alt=media&token=755552d7-f0f0-49b0-b121-25a20b456a0c'],
      autoplay: false,
      loop: true,
      volume: 0.5,
      onend: function() {
        console.log('Finished!');
      }
    });
  }
}
