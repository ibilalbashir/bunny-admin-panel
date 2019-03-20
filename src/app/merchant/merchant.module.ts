import { MerchantService } from 'app/shared/services/merchant.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateMerchantComponent } from './create-merchant/create-merchant.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MerchantRoutingModule } from './merchant-routing.module';
import { MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MerchantRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    HttpModule
  ],
  declarations: [CreateMerchantComponent],
  providers: [MerchantService]
})
export class MerchantModule { }
