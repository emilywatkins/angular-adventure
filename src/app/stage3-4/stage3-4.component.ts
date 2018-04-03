import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stage3-4',
  templateUrl: './stage3-4.component.html',
  styleUrls: ['./stage3-4.component.css'],
  providers: [PlayerService]
})
export class Stage3_4Component implements OnInit {
  playerId: string;
  playerToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((URLParameters) => {
      this.playerId = URLParameters['id'];
    });
    this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  }

}
