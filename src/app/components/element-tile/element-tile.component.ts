import { Component, Input, OnInit } from '@angular/core';
import { ChemElement } from 'src/app/models/chem-element.model';

@Component({
  selector: 'app-element-tile',
  templateUrl: './element-tile.component.html',
  styleUrls: ['./element-tile.component.scss']
})
export class ElementTileComponent implements OnInit {
  @Input() element: ChemElement = new ChemElement();

  constructor() { }

  ngOnInit(): void {
  }

}
