import {Component, Input} from '@angular/core';
import {Bird} from "../models/bird";
import {BirdListItemComponent} from "../bird-list-item/bird-list-item.component";

@Component({
  selector: 'app-bird-list',
  standalone: true,
  imports: [
    BirdListItemComponent
  ],
  templateUrl: './bird-list.component.html',
  styleUrl: './bird-list.component.css'
})
export class BirdListComponent {
  birdList: Bird [] = [
    {id: 1, type: "Cockatoo", name: "Jasper", weight: 1.5, isTamed: true },{id: 2, type: "Jardines Parrot", name: "Pickles", weight: 1, isTamed: true},
    {id: 3, type: "Blue Fronted Amazon", name: "Chico", weight: 3, isTamed: false}, {id: 4, type: "African Grey", name: "Scarlet", weight: 2, isTamed: false}
  ]
}

