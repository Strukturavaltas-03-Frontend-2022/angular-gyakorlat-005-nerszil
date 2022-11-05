import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss']
})
export class DataCellComponent implements OnInit {

  @Input() data: User = new User;

  @Input() key: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

/*
## 4. DataCellComponent
![DataCellComponent](src/assets/diagrams/data-cell-component.JPG)
- Feladata: input mezőt jelenít meg a kapott objektum és a kapott kulcs alapján
beállított értékkel.
- Létrehozás: data-cell
- Bejövő adat: `@var data {User}, @default new User()`
- Bejövő adat: `@var key {string}, @default ''`
- Nézet: legyen egy dived, adj neki fentről 1em margót. Ebben helyezz el egy
input mezőt, formázd meg Bootstrap-pel. Az input mezőt így kösd össze az adattal:
`[(ngModel)]="data[key]"`
> TUDÁS: az ngModel egy speciális Angular-direktíva. Kétirányú adatkötést tesz
lehetővé, azaz nem csak átvesz adatot az osztálytól, hanem módosítani is tudja
azt. Jele banana in the box, azaz property és event binding egyszerre. Tipikusan
form elemekhez használják, mint az input, select vagy textarea.
*/
