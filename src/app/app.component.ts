import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: "input",
      type: "input",
      templateOptions: {
        label: "Input",
        placeholder: "Input placeholder",
        required: true
      }
    }
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }
}
