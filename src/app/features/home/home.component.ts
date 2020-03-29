import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let sound = new Howl({
      src: ['./././assets/pennies.wav'],
      autoplay: true,
      loop: true,
      volume: 0.5,
      onend: function() {
        console.log('Finished!');
      }
    });
  }
  tiles: Tile[] = [
    {text: '', cols: 3, rows: 2, color: 'lightgreen'},
    {text: '', cols: 1, rows: 2, color: ''}
  ];
  tiles2: Tile[] = [
    {text: '', cols: 4, rows: 1, color: 'lightgrey'},
    {text: 'A DJ?', cols: 1, rows: 2, color: ''}
  ];

}
