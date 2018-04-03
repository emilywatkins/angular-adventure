import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [PlayerService]
})
export class StartComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
    console.log(this.players);
  }

  submitForm(name: string, weapon: string, backstory: string) {
    let newPlayer: Player = new Player(name, weapon, backstory);
    this.playerService.addPlayer(newPlayer);
  }

  startGame(selectedPlayer) {
    this.router.navigate(['stage1', selectedPlayer.$key]);
  }
}
