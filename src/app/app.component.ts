import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  userList: User[] = this.userService.list;

  currentUser: User = new User();

  constructor(
    private userService: UserService,
  ) {

  }
  onSelectUser(user: User): void {
    this.currentUser = user;
  }

  onUpdateUser(user: User): void {
    this.userService.updateUser(user);
  }

  onDeleteUser(user: User): void {
    this.userService.removeUser(user);
  }
}
/*
## 7. AppComponent
![AppComponent](src/assets/diagrams/app-component.JPG)
### Feladatai:
> Nem adok részletes leírást, az eddigi ismereteid szerint dolgozz. Felsorolom,
hogy mit kell tudnia.
- Injektáld be a UserService-t, hogy elérd a benne található user-öket.
- Egy változóba vedd át a user-ök listáját.
- Legyen egy currentUser változód is, ez egy User típus.
- Legyen három metódusod, amelyek lekezelik az akciógombok kattintásait. Az első
az adott user kiválasztását kezeli, a másik kettő pedig meghívja a UserService
update vagy remove metódusát. (Nézd meg a UserService-t!)
*/
