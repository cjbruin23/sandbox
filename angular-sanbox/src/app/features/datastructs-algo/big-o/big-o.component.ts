import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-o',
  templateUrl: './big-o.component.html',
  styleUrls: ['./big-o.component.scss'],
})
export class BigOComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // This has a space complexity of O(1)
  // Space complexity does not account for input size
  // Only defining variable i adds to space complexity, which the let will let go of the value in memory for each iteration
  spaceComplexity1(n): void {
    for (let i = 0; i < n.length; i++) {
      console.log('booooo');
    }
  }

  // This has space complexity of 0(n)
  // hiArray grows with each iteration, adding to memory
  // The variable i is let go because we ignore constants for BigO
  // If we didn't it would be O(n+1)
  spaceComplexity2(n): string[] {
    let hiArray = [];
    for (let i = 0; i < n.length; i++) {
      hiArray[i] = 'hi';
    }
    return hiArray;
  }

  // This is O(1) time complexity, because length is a property
  // May be different for another language
  whatIsTheLengthOfAString(): number {
    return 'sadfsdfsadsdf'.length;
  }
}
