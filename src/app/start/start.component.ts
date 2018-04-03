import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, weapon: string, backstory: string) {
    let newPlayer: Player = new Player(name, weapon, backstory);
    console.log("new player object ", newPlayer);
  }

}
