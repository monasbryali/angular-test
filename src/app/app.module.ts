import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule, MatProgressBarModule, MatProgressSpinnerModule} from '@angular/material';
import { TranslateModule ,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgProgressModule } from '@ngx-progressbar/core';
import 'hammerjs';


import { Lead } from 'app/app.component';
import {TestModule}  from '../areas/lead-test/lib/test/test.module';
import { HttpModule } from '@angular/http';
import { MatSnackBarModule } from "@angular/material";
import { ImageCropperModule } from 'ngx-image-cropper';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
    declarations: [
        Lead,
      
    ],
    imports     : [
 CommonModule ,

        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule ,
        MatSnackBarModule,
        MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    TestModule,
 

//        RouterModule.forRoot(appRoutes),
   //     AccountModule,
   NgProgressModule.forRoot(
       
   ),
        TranslateModule.forRoot(
            {
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                    
                  }
            }
        ),
        ImageCropperModule,

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule
        
        ,AppRoutingModule //routing module should be at end
        
        ],
    exports:[MatProgressBarModule,
        MatProgressSpinnerModule,
      TranslateModule],
    providers: [
            MatProgressBarModule,
        MatProgressSpinnerModule
          ],
    bootstrap   :[
        Lead
    ]
})
export class AppModule
{
}

