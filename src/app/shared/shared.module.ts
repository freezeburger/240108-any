import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AceModule } from 'ace';

@NgModule({
  exports: [
    // Angular
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    // Externe
    AceModule
  ]
})
export class SharedModule { }
