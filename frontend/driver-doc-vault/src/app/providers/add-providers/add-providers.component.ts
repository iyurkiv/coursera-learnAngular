import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderClass } from 'src/app/models/providers.class';
import { providers } from 'src/app/models/providers.data';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
})
export class AddProvidersComponent implements OnInit {

  submitted = false;
  provider = new ProviderClass();
  providersForm : FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.providersForm = new FormGroup({
      firstname : new FormControl('Christian',[Validators.required, Validators.minLength(2)] ),
      lastname : new FormControl('Hur'),
      position : new FormControl(),
      email : new FormControl('',[Validators.required, Validators.email]),
      phone : new FormControl('',[Validators.required, Validators.pattern('^[2-9]{3}--[0-9]{3}-[0-9]{4}$')]),
      company_name : new FormControl(),
      address : new FormControl(),
      address2 : new FormControl(),
      city : new FormControl(),
      state : new FormControl(),
      postal_code : new FormControl(),
      description : new FormControl(),
      tagline : new FormControl(),
    });
  }
  
  // method to easy access form field controls
  get f(){return this.providersForm.controls;}

  handleSubmit(){
    console.log(this.providersForm.value);

    {
      let newId: number;
      while(true) {
        newId=Math.floor(Math.random() * 10000) +99999;
        if (providers.findIndex(el => el.id == newId) == -1) {
          break;
        }
      }

      let p = this.providersForm.value;
      this.provider.id = newId;
      this.provider.firstname = p.firstname;
      this.provider.lastname = p.lastname;
      this.provider.position = p.position;
      this.provider.company = 
      {
        company_name : p.company_name,
        address : p.address,
        address2 : p.address2,
        city : p.city,
        state : p.state,
        postal_code : p.postal_code,
        phone : p.phone,
        email : p.email,
        description : p.description,
        tagline : p.tagline,
      };

      providers.push(this.provider);
      this.submitted=true;

    }
  }
}
