import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SpeakerListPage } from './speaker-list';
import { SpeakerListPageRoutingModule } from './speaker-list-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SpeakerListPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [SpeakerListPage],
})
export class SpeakerListModule {}
