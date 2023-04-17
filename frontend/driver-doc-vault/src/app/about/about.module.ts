import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[AboutComponent],    // 

    imports: [RouterModule],    // modules

    exports: [AboutComponent],    // items from decs and imports

    providers: [],


})

export class AboutModule{}