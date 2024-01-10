import { NgModule } from '@angular/core';
import { AceNotifierService } from './services/ace-notifier.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';
import { ModalComponent } from './components/modal/modal.component';
import { ZoomDirective } from './directives/zoom.directive';
import { FromRootConfigPipe } from './pipes/from-root-config.pipe';
import { AutoConfigDirective } from './directives/auto-config.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    ImageComponent,
    ModalComponent,
    ZoomDirective,
    FromRootConfigPipe,
    AutoConfigDirective
  ],
  providers:[
    AceNotifierService
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    ImageComponent,
    ModalComponent,
    ZoomDirective,
    FromRootConfigPipe,
    AutoConfigDirective
  ]
})
export class AceModule { }
