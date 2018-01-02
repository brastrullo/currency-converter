import { Component, OnInit } from '@angular/core';
import { Rate } from '../rate';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'currency-component',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  selectedBase: string = 'CAD';
  selectedConvert: string = 'USD';
  inputBase: number|string;
  inputConvert: number|string;
  currencyRate: number;
  allowedRates: string[] = ['CAD','USD','EUR'];

  arrBase: Rate[];
  arrConvert: Rate[];

  baseObject: object;
  convertObject: object;

  getRates(): void {
    this.currencyService.getRates(this.selectedBase)
      .subscribe(data => {
        let arr = [];
        Object.entries(data).forEach((key,i) => {
          arr.push({'id': i+1, 'code': key[0], 'rate': Number(key[1])});
        });
        this.arrBase = arr.filter(rate => rate.code !== this.selectedConvert);
        this.arrConvert = arr.filter(rate => rate.code !== this.selectedBase);
        this.currencyRate = this.arrConvert.filter(rates => rates.code === this.selectedConvert)[0].rate;
        console.log(`${this.selectedBase} to ${this.selectedConvert} = ${this.currencyRate}`);
      });
  }

  clearInputs(): void {
    this.inputBase = "";
    this.inputConvert = "";
  }

  focusEvent(e): void {
    let input = e.target.value;
    switch (true) {
      case (input == 0):
        e.target.value = "";
        break;
      case (input != 0 && input.indexOf('.00') !== -1):
        break;
      case (input != 0 && Number(input) % 1 === 0):
        e.target.value += ".00";
        break;
      default:
        break;
    }
  }

  swapRates(e): void {
    let inputs = [this.inputBase, this.inputConvert];
    inputs = inputs.map(n => n ? this.formatNumber(n) : "0.00");

    this.selectedBase = e[1];
    this.selectedConvert = e[0];

    this.inputBase = inputs[1];
    this.inputConvert = inputs[0];

    console.log(inputs);
    this.getRates();
  }

  onSelectBase(base): void {
    this.selectedBase = base['code'];
    this.getRates();
    this.clearInputs();
  }

  onSelectConvert(convert: object): void {
    this.selectedConvert = convert['code'];
    this.currencyRate = convert['rate'];
    this.arrBase = this.arrBase.filter(rate => rate.code !== this.selectedConvert);
    this.arrConvert = this.arrConvert.filter(rate => rate.code !== this.selectedBase);
    console.log(`${this.selectedBase} to ${this.selectedConvert} = ${this.currencyRate}`);
    this.clearInputs();
  }

  onKeyupBase(e): void {
    e = Math.abs(e);
    this.inputBase = e;
    this.inputConvert = this.formatNumber((this.currencyRate*Number(e)));
  }

  onKeyupConvert(e): void {
    e = Math.abs(e);
    this.inputConvert = e;
    this.inputBase = this.formatNumber((e/this.currencyRate));
  }

  formatNumber(num: number|string): string {
    return (Number(num) * 100 / 100).toFixed(2);
  }

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getRates();

    this.baseObject = {
      name: 'base',
      selectedRate: this.selectedBase,
      inputValue: this.inputBase,
      allowedRates: this.allowedRates,
      onKeyup: this.onKeyupBase,
      onSelect: this.onSelectBase,
    }

    this.convertObject = {
      name: 'convert',
      selectedRate: this.selectedConvert,
      inputValue: this.inputConvert,
      allowedRates: this.allowedRates,
      onKeyup: this.onKeyupConvert,
      onSelect: this.onSelectBase,
    }
  }

  ngDoCheck() {
    this.baseObject = {
      selectedRate: this.selectedBase,
      inputValue: this.inputBase,
      allowedRates: this.allowedRates,
    }

    this.convertObject = {
      name: 'convert',
      selectedRate: this.selectedConvert,
      inputValue: this.inputConvert,
      allowedRates: this.allowedRates,
    }
  }
}
