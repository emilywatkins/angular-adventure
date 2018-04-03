import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-stage2',
  templateUrl: './stage2.1.component.html',
  styleUrls: ['./stage2.1.component.css'],
  providers: [PlayerService]
})
export class Stage2_1Component implements OnInit {
  playerId: string;
  playerToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.route.params.forEach((URLParameters) => {
      this.playerId = URLParameters['id'];
    });
    this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  }
}
