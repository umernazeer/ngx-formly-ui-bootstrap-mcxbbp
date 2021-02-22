import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  // catches only the first two inputs, but not the input from formly (config)
  selector: "input"
})
export class InputDirective {
  private _value: string | null;

  constructor(private elementRef: ElementRef<HTMLInputElement>) {
    console.log("created directive");
  }

  get value(): string | null {
    return this._value;
  }

  @Input("value")
  set value(value: string | null) {
    this._value = value;
    this.formatValue(value);
  }

  private formatValue(value: string | null) {
    if (value !== null) {
      this.elementRef.nativeElement.value = this.numberWithCommas(value);
    } else {
      this.elementRef.nativeElement.value = "";
    }
  }

  private unFormatValue() {
    const value = this.elementRef.nativeElement.value;
    this._value = value.replace(/[^\d.-]/g, "");
    if (value) {
      this.elementRef.nativeElement.value = this._value;
    } else {
      this.elementRef.nativeElement.value = "";
    }
  }

  @HostListener("input", ["$event.target.value"])
  onInput(value) {
    this._value = value;
    this.formatValue(value);
  }

  @HostListener("keydown", ["$event.target.value"])
  onKeyDown(value) {
    this._value = value;
    this.formatValue(value);
  }

  @HostListener("blur")
  _onBlur() {
    this.formatValue(this._value); // add commas
  }

  @HostListener("focus")
  onFocus() {
    this.unFormatValue(); // remove commas for editing purpose
  }

  numberWithCommas(val) {
    val = val.toString().replace(/[^0-9\.]/g, "");
    if (val != "") {
      let valArr = val.split(".");
      valArr[0] = parseInt(valArr[0], 10).toLocaleString();
      val = valArr.join(".");
    }

    return val;
  }
}
