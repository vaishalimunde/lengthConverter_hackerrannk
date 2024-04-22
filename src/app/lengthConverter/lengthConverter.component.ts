
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'length-converter',
  templateUrl: './lengthConverter.component.html',
  styleUrls: ['./lengthConverter.component.scss']
})
export class LengthConverter implements OnInit {
  lengthOptions = [
    {
      id: 0,
      label: 'Kilometre',
      unit: 'km'
    },
    {
      id: 1,
      label: 'Metre',
      unit: 'm'
    },
    {
      id: 2,
      label: 'Centimetre',
      unit: 'cm'
    }
  ];

  input1Value: number;
  input2Value: number;

  selectedUnit1: number = 0; // Kilometre
  selectedUnit2: number = 1; // Metre


  ngOnInit() {

  }

  convertInput1() {
    const value = this.input1Value;
    if (this.selectedUnit1 === 0) {
      // Kilometre to Metre
      this.input2Value = value * 1000;
    } else if (this.selectedUnit1 === 1) {
      // Metre to Centimetre
      this.input2Value = value * 100;
    } else {
      // Centimetre
      this.input2Value = value / 100;
    }
  }

  convertInput2() {
    const value = this.input2Value;
    if (this.selectedUnit2 === 0) {
      // Kilometre to Metre
      this.input1Value = value / 1000;
    } else if (this.selectedUnit2 === 1) {
      // Metre to Centimetre
      this.input1Value = value / 100;
    } else {
      // Centimetre
      this.input1Value = value * 100;
    }
  }
}
