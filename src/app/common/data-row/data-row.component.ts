import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {

  @Input() dataRow: User = new User();
  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();



constructor() { }

  ngOnInit(): void {
  }

  onSelectClicked(): void {
    this.selectClick.emit(this.dataRow);
  }
  onUpdateClicked(): void {
    this.selectClick.emit(this.dataRow);
  }
  onDeleteClicked(): void {
    this.selectClick.emit(this.dataRow);
  }
}


/*
## 5. DataRowComponent
![DataRowComponent](src/assets/diagrams/data-row-component.JPG)
- Feladata: egy adatsort jelenít meg a hozzá tartozó gombokkal, lekezeli a
gombokra való kattintást.
- Létrehozás: data-row
- Bejövő adat: `@var dataRow {User}, @default new User()`
- Kimenő esemény: `@var selectClick {EventEmitter<User>}`
- Kimenő esemény: `@var updateClick {EventEmitter<User>}`
- Kimenő esemény: `@var deleteClick {EventEmitter<User>}`
- Metódus: `@method onSelectClicked {void}, selectClick eseményt hívja a dataRow-val`
- Metódus: `@method onUpdateClicked {void}, updateClick eseményt hívja a dataRow-val`
- Metódus: `@method onDeleteClicked {void}, deleteClick eseményt hívja a dataRow-val`
- Nézet: az alábbi kódban a pontok helyére öt app-data-cell kell a szükséges
input változók átadásával. A cellák sorrendje a következő legyen:
id, name, email, address, active.
Utánuk pedig egy app-action-button-group, amelynek mind a három eseményét le kell
kezelni, és össze kell kötni a megfelelő saját metódussal.
```html
<div class="row">
  <div class="col-12 mb-1 pt-1 pb-1 d-flex justify-content-between">
    ...
  </div>
</div>
```
*/
