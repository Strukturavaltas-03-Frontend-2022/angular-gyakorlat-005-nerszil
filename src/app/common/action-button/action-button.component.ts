import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Input() icon: string = 'fa-pen';

  @Input() btnClass: string = 'btn-info';

  @Input() text: string = '';

  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onUserClicked(): void {
    this.clicked.emit(true);
  }
}

/*
## 2. ActionButton
![ActionButtonComponent](src/assets/diagrams/action-button-component.JPG)
- Feladata: egy ikonnal ellátott Bootstrap-gombot jelenít meg, és lekezeli a
kattintás eseményét.
- Létrehozás: action-button
- Bejövő adat: `@var icon {string}, @default 'fa-pen'`
> TUDÁS: ez a megadási forma egy olyan inputot jelent, amely így néz ki
`@Input() icon: string = 'fa-pen';`

- Bejövő adat: `@var btnClass {string}, @default 'btn-info'`
- Bejövő adat: `@var text {string}, @default ''`
- Kimenő esemény: `@Output() clicked: EventEmitter<boolean> = new EventEmitter();`
> TUDÁS: ezzel az eseménnyel értesíti az action-button a szülő komponensét, hogy
kattintás történt benne. Erre azért van szükség, mert nem lát bele a szülő a
komponensbe. A `<boolean>` azt jelenti, hogy az adat, amely az eseményben
át lesz adva, boolean típusú lesz.

- Metódus:
```typescript
onUserClicked(): void {
  this.clicked.emit(true);
}
```
> TUDÁS: ahhoz, hogy le tudjam kezelni a gombra való kattintást, kell egy
eseménykezelő metódus, amelyet a TypeScript-osztályban definiálok. A következő
kódban azt láthatod, hogyan kötöm össze ezt a metódust a click eseménnyel.
Ennek a metódusnak nincs paramétere, mivel csak a kattintás ténye a lényeges.

- Nézet:
```html
<button (click)="onUserClicked()" class="btn" [class]="btnClass">
  <app-icon [icon]="icon"></app-icon>
  {{ text }}
</button>
```
> TUDÁS: beállítottam egy eseményt, ha a gombra kattintanak, beállítottam a
gomb osztályát, amelyet külső változóból kapok, beszúrtam gyermek komponensként az
app-icon komponenst, és átadtam neki az icon változóban kapott class-nevet,
megjelenítettem a gomb tartalmában a kapott szöveget. Ha nem akarok szöveget,
akkor üres string-et adok át az app-action-button komponensnek.
*/
