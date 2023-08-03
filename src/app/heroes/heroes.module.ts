import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  exports: [HeroComponent, ListComponent], // Exportar counter componet para usar en el Exterior
  declarations: [HeroComponent, ListComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
