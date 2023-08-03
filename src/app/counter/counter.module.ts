import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  exports: [CounterComponent], // Exportar counter componet para usar en el Exterior
  declarations: [CounterComponent],
})
export class CounterModule {}
