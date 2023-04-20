import { Component, OnInit, Provider } from '@angular/core';
import { providers } from '../models/providers.data';
import { ProviderService } from '../services/provider.service';
import { ProviderClass } from '../models/providers.class';


@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styles: [
  ]
})
export class ProvidersComponent implements OnInit {
  providers : ProviderClass;
  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.providerService.getProviders()
      .subscribe(
        data => {
          this.providers = data;
        },
        error => {
          console.log(error);
        }
      );
  }
}
