import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController, IonSlides } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import slideOpts from '../../shared/slide'

@Component({
  selector: "page-tutorial",
  templateUrl: "tutorial.html",
  styleUrls: ["./tutorial.scss"],
})
export class TutorialPage {
  showSkip = true;

  @ViewChild("slides", { static: true }) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage
  ) { }
  slideOpts = slideOpts
  backgrounds = [
    'assets/img/speaker-background.png',
    'assets/img/2982355.png',
    'assets/img/angular-2.png',
  ];
}
