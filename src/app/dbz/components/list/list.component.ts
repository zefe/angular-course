import { Component, EventEmitter, Input, Output } from '@angular/core';

import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  // lista por default
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return; //si no recibo o hay un id no se emite nada
    //TODO: Emitir el ID del personaje
    console.info({ id });
    this.onDelete.emit(id);
  }
}
