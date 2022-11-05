import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button-group',
  templateUrl: './action-button-group.component.html',
  styleUrls: ['./action-button-group.component.scss']
})
export class ActionButtonGroupComponent implements OnInit {

  @Output() selectClick: EventEmitter<boolean> = new EventEmitter();

  @Output() updateClick: EventEmitter<boolean> = new EventEmitter();

  @Output() deleteClick: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectButtonClick(): void {
    this.selectClick.emit(true);
  }
  onUpdateButtonClick(): void {
    this.selectClick.emit(true);
  }
  onDeleteButtonClick(): void {
    this.selectClick.emit(true);
  }
}


/*
## 3. ActionButtonGroup
![ActionButtonGroupComponent](src/assets/diagrams/actio-button-group-component.JPG)
- Feladata: több akciógombot foglal egy csoportba, és lekezeli a kattintás
eseményüket.
- Létrehozás: action-button-group
- Kimenő esemény: `@var selectClick {EventEmitter<boolean>}`
> TUDÁS: a komment alapján létrehozott output esemény így néz ki:
`@Output() selectClick: EventEmitter<boolean> = new EventEmitter();`

- Kimenő esemény: `@var updateClick {EventEmitter<boolean>}`
- Kimenő esemény: `@var deleteClick {EventEmitter<boolean>}`
> TUDÁS: a három esemény akkor fog megtörténni, ha a gombcsoporton belül
valamelyik gombra rákattintanak, minden gombhoz a hozzá rendelt funkció
szerint.

- Metódus:
```typescript
onSelectButtonClick(): void {
  this.selectClick.emit(true);
}
```
> TUDÁS: a későbbiekben így fogom a metódusokat megadni, a következő minta
megegyezik a fent láthatóval:
`@method onSelectButtonClick {void}, a selectClick esemény true értékkel`

- Metódus: `@method onUpdateButtonClick {void}, az updateClick esemény`
- Metódus: `@method onDeleteButtonClick {void}, az deleteClick esemény`
- Nézet: `<div class="btn-group">...</div>`
ebben a divben helyezz el három `app-action-button`-t, és mindegyiknek állítsd
be az ikonját és a hozzá tartozó eseményt értelemszerűen. A három gomb:
kiválasztás, frissítés, törlés.
Példa az egyik gombra:
```html
<app-action-button
    [btnClass]="'btn-info'"
    [icon]="'fa-eye'"
    (clicked)="onSelectButtonClick()"
></app-action-button>
```
> TUDÁS: beállítottam a gomb osztályát, a benne megjelenő ikont,és azt is,
hogy mi történjen, ha rákattintanak. Ne feledd, ebből három különböző kell a
három művelethez.
*/
