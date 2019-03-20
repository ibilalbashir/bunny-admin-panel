import { environment } from '../../../environments/environment'

import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../shared/services/merchant.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-merchant',
  templateUrl: './create-merchant.component.html',
  styleUrls: ['./create-merchant.component.scss']
})
export class CreateMerchantComponent implements OnInit {

  createFormGroup: FormGroup;
  categoryObj$: Observable<object>;
  validationStatus;
  image: any;

  constructor(private formBuilder: FormBuilder , private merchantService: MerchantService) {
    this.createFormGroup = formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      merchantDetails: ['', [Validators.required]],
      website: [''],
      budgetBunnyCommission: ['', [Validators.required]],
      bunnyUserReturnCommission: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      logo: ['']
    })
  }

  ngOnInit() {
    this.categoryObj$ = this.merchantService.getCategories();
    const temp = JSON.parse(localStorage.getItem('user'));

    console.log('access token is', temp['id'])
  }

  createMerchantFn() {
    if (this.createFormGroup.valid) {
      this.validationStatus = true;
    }
  const temp = this.createFormGroup.value;

  console.log(temp)
    temp.logo = environment.url + '/attachments/myContainer/download/' + this.image ;
    this.merchantService.createMerchant(temp).subscribe(res => {
      swal('Merchant created successfully')
    }, err => {
      swal('Merchant not created')
    })
  }
  onFileChanged(event) {
    const file = event.target.files[0];
    console.log('file is', file)
    const uploadData = new FormData();
  uploadData.append('myFile', file, file.name);
    this.merchantService.uploadImage(uploadData).subscribe(res => {

        this.image = res['result'].files['myFile'][0].name;
        console.log('image upload response', this.image);
    }, err => {
      console.log(err)
    })
  }




}
