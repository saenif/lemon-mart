import {NgModule} from '@angular/core';

import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule {
}
