import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable ()
  export class PlayerService {
    players;

    constructor(private db: AngularFireDatabase) {
      this.players = db.list('players');
    }

    getPlayers() {
      return this.players;
    }

    addPlayer(newPlayer: Player) {
      this.players.push(newPlayer);
    }

    getPlayerById(playerId: string) {
      return this.db.object('players/' + playerId);
    }
  }
