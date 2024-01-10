import {  Directive, Host, inject,  } from '@angular/core';
import { HeaderComponent,  } from '../components/header/header.component';
import { Router } from '@angular/router';
import { FromRootConfigPipe } from '../pipes/from-root-config.pipe';

@Directive({
  selector: 'ace-header[aceAutoConfig]'
})
export class AutoConfigDirective{

  router = inject( Router, {optional:true} );
  pipe = new FromRootConfigPipe();

  constructor(
   /*  @Optional()  */ @Host() header:HeaderComponent,
  ) {
    if(this.router) header.menuItems = this.pipe.transform(this.router.config);
  }

}
