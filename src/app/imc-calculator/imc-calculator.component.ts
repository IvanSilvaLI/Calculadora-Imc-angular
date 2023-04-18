import { Component } from '@angular/core';

@Component({
  selector: 'app-imc-calculator',
  templateUrl: './imc-calculator.component.html',
  styleUrls: ['./imc-calculator.component.css'],
})

export class ImcCalculatorComponent {

  peso: number;
  altura: number;
  bmi: number;
  genero: string;
  situation: string;

  calcularIMC() {
    this.bmi = this.peso / (this.altura / 100) ** 2;
    this.calcularSituacao();
  }

  calcularSituacao() {
    if (this.bmi < 16) {
      this.situation = 'Magreza grave';
    } else if (this.bmi < 17) {
      this.situation = 'Magreza moderada';
    } else if (this.bmi < 18.5) {
      this.situation = 'Magreza leve';
    } else if (this.bmi < 25) {
      this.situation = 'Saudável';
    } else if (this.bmi < 30) {
      this.situation = 'Sobrepeso';
    } else if (this.bmi < 35) {
      this.situation = 'Obesidade Grau I';
    } else if (this.bmi < 40) {
      this.situation = 'Obesidade Grau II (considerada severa)';
    } else {
      this.situation = 'Obesidade Grau III (considerada mórbida)';
    }

    if (this.genero === 'homi') {
      this.situation = `Homem - ${this.situation}`;
    } else if (this.genero === 'muie') {
      this.situation = `Mulher - ${this.situation}`;
    }

  }
  Cores() {
    if (this.situation.includes('Magreza')) {
    return 'danger';
    } else if (this.situation.includes('Saudável')) {
    return 'success';
    } else if (this.situation.includes('Sobrepeso')) {
    return 'warning';
    } else {
    return 'danger';
    }
    }

}


