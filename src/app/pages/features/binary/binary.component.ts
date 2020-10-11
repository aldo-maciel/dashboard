import { Component, OnInit } from '@angular/core';
import { SelectOption } from '@/app/shared/components/core/forms/select/select';

type Binary = {
  operador: number;
  operacao: string;
  divisor: number;
};
const DECIMAL = 2;

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.scss']
})
export class BinaryComponent implements OnInit {
  operations: SelectOption[] = [];
  record: Binary = {} as Binary;
  results = [];

  ngOnInit(): void {
    const operations = ['+', '-', '*', '/', '%'];

    this.operations = operations.map(value => ({ value, desc: value }));
  }

  private calculate(num: number, num2: number): number {
    const operand1 = parseInt(String(num), DECIMAL);
    const operand2 = parseInt(String(num2), DECIMAL);
    const isOperand1Invalid = operand1 > 255 || operand1 < 0;
    const isOperand2Invalid = operand2 > 255 || operand2 < 0;

    if (isOperand2Invalid || isOperand1Invalid) {
      throw new Error(`<span class="binary-error">Operação permitida apenas com valores entre 0 e 255!</span>`);
    }

    switch (this.record.operacao) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        const operation = operand1 / operand2;
        return Number.isFinite(operation) ? 0 : operation;
      case '%':
        return operand1 % operand2;
      default:
        break;
    }
  }

  save(): void {
    let template = '';
    try {
      const { operador, operacao, divisor } = this.record;
      const result = this.calculate(operador, divisor);
      const fullResult = result.toString(DECIMAL).padStart(8, '0');
      const operandStr = `${operador}`;
      const divisorStr = `${divisor}`;

      template = `${operandStr} ${operacao} ${divisorStr} = <span class="binary-result">${fullResult}</span>`;
    } catch (error) {
      template = error.message;
    } finally {
      this.results.unshift(template);

      this.record = {} as Binary;
    }
  }
}
