import {Component, Input} from '@angular/core';
import {Bird} from "../models/bird";
import {BirdListComponent} from "../bird-list/bird-list.component";

@Component({
  selector: 'app-bird-list-item',
  standalone: true,
  imports: [],
  templateUrl: './bird-list-item.component.html',
  styleUrl: './bird-list-item.component.css'
})
export class BirdListItemComponent {
  @Input() display?: Bird;
}
