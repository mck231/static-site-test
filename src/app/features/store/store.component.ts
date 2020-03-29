import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   //Check if there any unsaved data etc. If yes then as for confirmation
 canExit() : boolean {
  if (confirm("Do you wish to leave the store?")) {
      return true
    } else {
      return false
    }
  }

}
