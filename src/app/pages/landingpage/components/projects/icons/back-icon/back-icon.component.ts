import { Component } from '@angular/core';

@Component({
  selector: 'app-back-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="30"
      viewBox="0 0 20 30"
      fill="none"
    >
      <path
        d="M0.659563 16.5933L13.4056 29.3393C14.2866 30.2202 15.7111 30.2202 16.5827 29.3393L18.7008 27.2212C19.5818 26.3402 19.5818 24.9156 18.7008 24.044L9.67549 15L18.7102 5.96532C19.5911 5.08435 19.5911 3.65979 18.7102 2.78819L16.5921 0.660731C15.7111 -0.220243 14.2866 -0.220243 13.4149 0.660731L0.668935 13.4067C-0.221412 14.2877 -0.221412 15.7123 0.659563 16.5933Z"
        fill="#78787D"
      />
    </svg>
  `,
  styles: ``,
})
export class BackIconComponent {}
