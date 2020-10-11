import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from '@/app/shared/components/core/forms/select/select';
import { ControllerAccessor } from '@/app/shared/components/core/forms/controller-accessor';

export const CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true
};

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR]
})
export class SelectComponent extends ControllerAccessor {
  @Input() options: SelectOption[] = [];
  @Input('placeholder') placeholder?: string = '';
  @Output() onOptionChange = new EventEmitter();

  onSelectChange(event: string): void {
    this.value = event;
    this.onOptionChange.emit(this.value);
  }

  toString(value: unknown): string {
    return JSON.stringify(value);
  }
}
