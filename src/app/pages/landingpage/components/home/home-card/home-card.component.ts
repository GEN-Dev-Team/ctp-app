import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
})
export class HomeCardComponent implements OnInit {
  @Input() card: any;
  animatedValue: number = 0;

  ngOnInit() {
    // this.animateValue(0, this.card.value, 2000);
  }

  animateValue(start: number, end: number, duration: number) {
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const step = (end - start) / (duration / stepTime);

    const interval = setInterval(() => {
      this.animatedValue += step;
      if (
        (step > 0 && this.animatedValue >= end) ||
        (step < 0 && this.animatedValue <= end)
      ) {
        this.animatedValue = end;
        clearInterval(interval);
      }
    }, stepTime);
  }
}
