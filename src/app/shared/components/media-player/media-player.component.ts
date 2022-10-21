import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //TODO: Programacion reactiva!

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover:'https://th.bing.com/th/id/OIP.XqGuQULBWOTa1RYaabtt5gHaEo?w=275&h=180&c=7&r=0&o=5&pid=1.7',
    album:'Gioli y Assi',
    name:'BEBE (oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response:TrackModel) => {
        console.log('recibiendo cancion', response)
      }
    )
    this.listObservers$ = [observer1$]
  }

 ngOnDestroy(): void {
  this.listObservers$.forEach(u => u.unsubscribe())
  console.log('🔴🔴🔴🔴🔴🔴🔴 BOOM!');
 }
 
}
