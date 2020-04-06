import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';
import { MusicTileModel } from 'src/app/shared/models/music-tile-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public musicTile: MusicTileModel[]= [];

  ngOnInit(): void {
    this.loadTiles()
  }
  public loadTiles()
  {
    let test: MusicTileModel = new MusicTileModel();
    test.ArtistImage = "https://firebasestorage.googleapis.com/v0/b/who-is-marco-cabrera.appspot.com/o/IMG_2728.JPG?alt=media&token=5a30a258-f00c-4be5-90ee-a13e66c0130b";
   test.AudioTrack = "https://firebasestorage.googleapis.com/v0/b/who-is-marco-cabrera.appspot.com/o/pennies.wav?alt=media&token=755552d7-f0f0-49b0-b121-25a20b456a0c";
   test.MusicImage = "https://firebasestorage.googleapis.com/v0/b/who-is-marco-cabrera.appspot.com/o/penny-stack-1413908505EoY.jpg?alt=media&token=a8cb9ffc-8420-413b-bff1-feabcb40f9cc";
   test.MusicSummary = "Pennies is my first attempt to make a edm track";
   test.SubTitle ="Pennies";
   test.Title = "Mck231";
   this.musicTile.push(test);
   //
   let test2: MusicTileModel = new MusicTileModel();
    test2.ArtistImage = "https://firebasestorage.googleapis.com/v0/b/who-is-marco-cabrera.appspot.com/o/josh.jpg?alt=media&token=9f5eaae3-4da0-41ba-90cf-5d28481886c8";
   test2.AudioTrack = "https://firebasestorage.googleapis.com/v0/b/who-is-marco-cabrera.appspot.com/o/Melodic_Dub_Segin.wav?alt=media&token=466e310e-1a81-449e-98ac-911f6a3b5281";
   test2.MusicImage = "https://firebasestorage.googleapis.com/v0/b/who-is-marco-cabrera.appspot.com/o/seignsign.jpg?alt=media&token=221c0c56-f56f-4722-a7ab-4a5fa31726b4";
   test2.MusicSummary = "This is the song that's going to start his carrier";
   test2.SubTitle ="Melodic dub";
   test2.Title = "sEign";
   this.musicTile.push(test2);
  }

}
