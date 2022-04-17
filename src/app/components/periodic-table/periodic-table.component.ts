import { Component, OnInit } from '@angular/core';
import { ChemElement } from 'src/app/models/chem-element.model';
import { ChemElementService } from 'src/app/services/chem-element.service';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.scss']
})
export class PeriodicTableComponent implements OnInit {
  elementArray: ChemElement[] = [];
  constructor(private elementService: ChemElementService) { }

  ngOnInit(): void {
    this.elementService.getAllElements().subscribe(x => {
      this.elementArray = <ChemElement[]>x;
      console.log(this.elementArray)
    
    });
  }

}
