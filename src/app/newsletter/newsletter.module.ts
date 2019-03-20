import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsletterRoutingModule } from './newsletter-routing.module';
import { NewsletterContainerComponent } from './newsletter-container/newsletter-container.component';

@NgModule({
  imports: [
    CommonModule,
    NewsletterRoutingModule
  ],
  declarations: [NewsletterContainerComponent]
})
export class NewsletterModule { }
