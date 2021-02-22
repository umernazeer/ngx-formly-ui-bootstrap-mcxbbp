import { Directive, Input } from "@angular/core";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Directive({
  // this is the selector needed, to render an intlId in formly-field from field.key (or other attribute)
  // so that it is easier to find with Cypress
  selector: "input"
})
export class FormlyFieldIntlidDirective {
  // @Input() field: FormlyFieldConfig;
  constructor() {
    console.error("formly-field-intlid directive", this);
  }
}
