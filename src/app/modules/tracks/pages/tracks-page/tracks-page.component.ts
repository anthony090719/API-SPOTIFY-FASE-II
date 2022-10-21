import { Component, OnInit, TrackByFunction } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  tracksTrending: Array <TrackModel> = []
  tracksRandom: Array <TrackModel> = []

  ListObservers$: Array<Subscription> = []

  constructor( private tracksService:TrackService ) { }

  ngOnInit(): void {
    this.loadDataAll() //TODO 📌📌
    this.loadDataRandom() //TODO 📌📌
  }
  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.tracksService.getAllTracks$().toPromise()

  }

  loadDataRandom(): void {
    this.tracksService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response
      })
  }

  ngOnDestroy(): void{

  }

}
