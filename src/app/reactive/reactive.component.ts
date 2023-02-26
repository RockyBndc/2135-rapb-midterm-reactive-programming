import { Component } from '@angular/core';
import { from, of, range } from 'rxjs';
import { filter } from 'rxjs/operators';

//==========================RANGE==========================
const rangeNUM = range(1, 10);
rangeNUM.subscribe((value) => console.log(value));
//Filter: Even Numbers
const rangeEVEN = rangeNUM.pipe(filter((value) => value % 2 === 0));
rangeEVEN.subscribe((value) => console.log('[RANGE] Even Number: ', value));
//Filter: Odd Numbers
const rangeODD = rangeNUM.pipe(filter((value) => value % 2 === 1));
rangeODD.subscribe((value) => console.log('[RANGE] Odd Number: ', value));
//Write the code to display the given output
rangeEVEN.subscribe((value) => console.log(value, ' => ', value * 2));

//==========================OF==========================
const ofNUM = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
ofNUM.subscribe((value) => console.log(value));
//Filter: Even Numbers
const ofEVEN = ofNUM.pipe(filter((value) => value % 2 === 0));
ofEVEN.subscribe((value) => console.log('[OF] Even Number: ', value));
//Filter: Odd Numbers
const ofODD = ofNUM.pipe(filter((value) => value % 2 === 1));
ofODD.subscribe((value) => console.log('[OF] Odd Number: ', value));
//Write the code to display the given output
ofEVEN.subscribe((value) => console.log(value, ' => ', value * 2));

//==========================FROM==========================
const fromNUM = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
fromNUM.subscribe((value) => console.log(value));
//Filter: Even Numbers
const fromEVEN = fromNUM.pipe(filter((value) => value % 2 === 0));
fromEVEN.subscribe((value) => console.log('[FROM] Even Number: ', value));
//Filter: Odd Numbers
const fromODD = fromNUM.pipe(filter((value) => value % 2 === 1));
fromODD.subscribe((value) => console.log('[FROM] Odd Number: ', value));
//Write the code to display the given outputA
fromEVEN.subscribe((value) => console.log(value, ' => ', value * 2));

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {}
