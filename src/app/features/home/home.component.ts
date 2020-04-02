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
    
  }
  tiles: Tile[] = [
    {text: '', cols: 3, rows: 2, color: 'lightgreen'},
    {text: '', cols: 1, rows: 2, color: ''}
  ];
  tiles2: Tile[] = [
    {text: '', cols: 4, rows: 1, color: 'lightgrey'},
    {text: 'A DJ?', cols: 1, rows: 3, color: ''},
    {text: '', cols: 4, rows: 1, color: 'lightgrey'},
  ];

}
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }
