import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bird} from "./models/bird";
import {NgForOf, NgIf} from "@angular/common";
import {BirdListComponent} from "./bird-list/bird-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, BirdListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LearningAngler';
  birdList: Bird [] = [
    {id: 1, type: "Cockatoo", name: "Jasper", weight: 1.5, isTamed: true },{id: 2, type: "Jardines Parrot", name: "Pickles", weight: 1, isTamed: true},
    {id: 3, type: "Blue Fronted Amazon", name: "Chico", weight: 3, isTamed: false}, {id: 4, type: "African Grey", name: "Scarlet", weight: 2, isTamed: false}
  ]
}
