import { noop, Subject } from 'rxjs';
import { ControlValueAccessor } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  template: ''
})
export class ControllerAccessor implements ControlValueAccessor {
  private innerValue = null;
  private onTouchedCallback: () => void = noop;
  protected onChangeCallback: (_: unknown) => void = noop;
  protected modelChanged: Subject<unknown> = new Subject<unknown>();
  @Input() id = `selectInputId${Math.ceil(Math.random() * 1000)}`;
  @Input() required = false;
  @Input() disabled = false;
  @Input() name: string;
  @Input('label') text = '';

  get value(): unknown {
    return this.innerValue;
  }

  set value(value: unknown) {
    this.writeValue(value);
  }

  onBlur(): void {
    this.onTouchedCallback();
  }

  writeValue(value: unknown, fireModelChange = true): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCallback(value);
      if (fireModelChange) {
        this.modelChanged.next(this.value);
      }
    }
  }

  registerOnChange(fn: (_: unknown) => void): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedCallback = fn;
  }

  change(): void {
    this.onChangeCallback(this.value);
    this.onTouchedCallback();
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
