import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControllerAccessor } from '@/app/shared/components/core/forms/controller-accessor';

export const INPUT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputComponent extends ControllerAccessor {
  @ViewChild('inputElement') inputElement: ElementRef;
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() icon = '';
  @Input() maxLength = 99999;
  @Input() max = 99999;
  @Input() autofocus = true;
  @Input() autocomplete = true;

  onKeydown(event: KeyboardEvent): boolean {
    if (this.type === 'number') {
      return !['e', 'E'].includes(event.key);
    }
    return true;
  }

  focus(): void {
    const element = this.inputElement.nativeElement;
    element && element.focus();
  }
}
