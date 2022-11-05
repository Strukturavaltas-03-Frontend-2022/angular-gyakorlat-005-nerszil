import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() icon: string= '';


  constructor() { }

  ngOnInit(): void {
  }

}


/*
## 1. Icon
![IconComponent](src/assets/diagrams/icon-component.JPG)
- Feladata: egy megadott Font Awesome-ikont jelenít meg.
- Létrehozás: `ng g c common/icon`
> TUDÁS: ha az a komponens neve, hogy `icon`, az osztály `IconComponent` lesz, a szelektor pedig `app-icon`.

- Bejövő adat: `@Input() icon: string = '';`
> TUDÁS: a bejövő adat, amelyet vár a komponens, az icon neve, amely egy
változó lesz az osztályban.

- Nézet: `<i class="fa" [class]="icon"></i>`
> TUDÁS: itt látszik, hogy alapból Font Awesome-mal dolgozik, és külön meg van adva még egy osztály property binding segítségével, ami a konkrét ikont határozza meg. Ez az icon a
bejövő adat.
*/
