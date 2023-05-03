import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public emitCharacterId: EventEmitter<string> = new EventEmitter();

  @Input(/* si aca colocamos un nombre para accedera esto desde otro componente lo deberiamos de hacer con ese nombre por ejsi el nombre es maxi seria [maxi]
    si no por defecto queda characterList */)
  // characterList es una arreglo de tipo Character, que es una interface, tiene el decorador Input que permite pasar informacion(Un arreglo)

  //Desde otro componente, que en este caso es main-page.
  public characterList: Character[] = [];

  onDeleteCharacter(id?: string): void {
    // if (id!) return;
    this.emitCharacterId.emit(id);
    console.log(id);
  }
}
