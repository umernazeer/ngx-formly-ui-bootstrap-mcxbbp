import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";

import { AppComponent } from "./app.component";
import { InputDirective } from "./input.directive";
import { FormlyFieldIntlidDirective } from "./formly-field-intlid.directive";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  declarations: [AppComponent, InputDirective, FormlyFieldIntlidDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
