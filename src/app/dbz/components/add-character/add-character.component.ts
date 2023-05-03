import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    // esto es un metodo

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    // console.log(this.character);
    this.character = { name: '', power: 0 }; // es lo mmismo que lo de abajo pero en 1 linea
    /* this.character.name = '';
    this.character.power = 0; */
  }
}
