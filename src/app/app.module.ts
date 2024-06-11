import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CustomValidationDirective } from './directive/custom-validation.directive';
import { customHeadersInterceptor } from './interceptor/custom-headers.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CustomValidationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [provideHttpClient(withInterceptors([customHeadersInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
