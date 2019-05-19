import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { TestRoutingModule } from './test-routing.module';
import { HttpModule } from '@angular/http';
import { NgProgressModule } from '@ngx-progressbar/core';
//import { NgProgressModule } from 'ngx-progressbar';
import { NgProgress } from '@ngx-progressbar/core';
//import { NgProgressHttpModule } from '@ngx-progressbar/http';
//import { NgProgressModule } from 'ngx-progressbar';
import { AboutComponent } from './about/about.component';
import{ListPumpsComponent} from '../components/list-pumps/list-pumps.component';
import{SavePumpsComponent} from '../components/save-pumps/save-pumps.component';
import { DialogComponentComponent } from '../components/dialog-component/dialog-component.component';
import { SnackbarComponentComponent } from '../components/snackbar-component/snackbar-component.component';
import { TranslateModule ,TranslateLoader } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from "@angular/material";
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule,  MatProgressSpinnerModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';

import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }


@NgModule({
  imports: [
  
    CommonModule,
    HttpClientModule,
    TestRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgProgressModule,
    HttpModule,
     TranslateModule,
    //.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
        
    //   }
  //  }), 
 
    //NgProgressHttpModule, 
   // NgProgressModule.forRoot(),

      // Material
      MatSnackBarModule,
      MatRadioModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatTableModule,
      MatDividerModule,
      MatMenuModule,
      MatSliderModule,
      MatFormFieldModule,
      MatDialogModule,
      MatInputModule,
      MatProgressBarModule,
       MatProgressSpinnerModule,

  
    
  ],

  exports:[MatProgressBarModule,
    MatProgressSpinnerModule,
    TranslateModule
  ],
    entryComponents: [
        DialogComponentComponent,
        SnackbarComponentComponent
      ],
providers: [

 // { provide: NgProgress },
        MatProgressBarModule,
    MatProgressSpinnerModule,
   
      ],
     
  declarations: [
    AboutComponent,
    ListPumpsComponent,
    SavePumpsComponent, 
    DialogComponentComponent,
    SnackbarComponentComponent             
  ]
})
export class TestModule { }
