import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { UserService } from '../../services/UserService'

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  speakers: any[] = [];
  members: any[] = []
  constructor(
    public confData: ConferenceData,
    private userService: UserService
  ) { }

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
    this.userService.user$.subscribe((members) => {
      this.members = members
      console.log(this.members);
      
    })
  }
}
