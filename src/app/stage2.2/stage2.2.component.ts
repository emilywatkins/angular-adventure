import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stage2.2',
  templateUrl: './stage2.2.component.html',
  styleUrls: ['./stage2.2.component.css'],
  providers: [PlayerService]
})
export class Stage2_2Component implements OnInit {
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

  choice1() {
    this.router.navigate(['stage3_3', this.playerId]);
  }

  choice2() {
    this.router.navigate(['stage3_4', this.playerId]);
  }
}
