import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  @Input() dataList: User[] = [];

  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  constructor() { }

  onSelectClick(dataRow: User): void {
    this.selectClick.emit(dataRow);
  }

  onUpdateClick(dataRow: User): void {
    this.updateClick.emit(dataRow);
  }

  onDeleteClick(dataRow: User): void {
    this.deleteClick.emit(dataRow);
  }

  ngOnInit(): void {
  }

}

/*
## 6. DataListComponent
![DataListComponent](src/assets/diagrams/data-list-component.JPG)
- Feladata: teljes adatlistát jelenít meg, az app-data-row elemeket annyiszor
ismétli meg, ahány eleme van a kapott tömbnek. Lekezeli az akciógombok
kattintásait. Megjeleníti a kiválasztott adatsorhoz tartozó user-detail kártyát.
- Létrehozás: data-list
- Bejövő adat: `@var dataList {User[]}, @default []`
- Kimenő esemény: `@var selectClick {EventEmitter<User>}`
- Kimenő esemény: `@var updateClick {EventEmitter<User>}`
- Kimenő esemény: `@var deleteClick {EventEmitter<User>}`
- Metódus: `@method onSelectClick {void}, selectClick eseményt hívja a dataRow-val`
- Metódus: `@method onUpdateClick {void}, updateClick eseményt hívja a dataRow-val`
- Metódus: `@method onDeleteClick {void}, deleteClick eseményt hívja a dataRow-val`

*/
