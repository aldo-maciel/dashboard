import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { InputComponent } from '@/app/shared/components/core/forms/input/input.component';
import { ControllerAccessor } from '@/app/shared/components/core/forms/controller-accessor';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '@angular/flex-layout';
import { SelectComponent } from '@/app/shared/components/core/forms/select/select.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ControllerAccessor, InputComponent, SelectComponent],
  imports: [CommonModule, FormsModule, CdkStepperModule, RouterModule, MatInputModule, FlexModule, MatSelectModule],
  providers: [],
  exports: [InputComponent, SelectComponent]
})
export class ComponentsModule {}
