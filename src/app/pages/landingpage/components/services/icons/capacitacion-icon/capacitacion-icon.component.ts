import { Component } from '@angular/core';

@Component({
  selector: 'app-capacitacion-icon',
  standalone: true,
  imports: [],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 114" fill="none">
      <path
        d="M69.0216 2.02286C86.1593 2.02286 103.3 1.98486 120.437 2.0482C125.168 2.06594 129.002 4.12337 132.068 7.52119C134.923 10.6859 136.008 14.4055 136 18.5305C135.968 36.4191 135.984 54.3051 135.989 72.1936C135.989 77.7832 133.823 82.3541 129.023 85.6506C125.873 87.817 122.275 88.5746 118.441 88.5569C111.912 88.529 105.384 88.5518 98.8555 88.5493C92.396 88.5493 85.9366 88.5416 79.4745 88.5391C75.3167 88.5391 71.1589 88.5391 67.0011 88.5518C65.8078 88.5543 65.6858 88.4302 65.6063 87.2621C65.5161 85.9192 65.3994 84.5763 65.2324 83.2384C65.1263 82.3896 65.365 82.0932 66.3249 82.0957C83.8418 82.1236 101.359 82.1185 118.876 82.1185C121.453 82.1185 123.81 81.5484 125.857 79.909C127.915 78.2621 128.846 76.1311 129.183 73.6835C129.241 73.2629 129.212 72.8296 129.212 72.4014C129.212 54.2189 129.212 36.0339 129.212 17.8514C129.212 14.2839 127.69 11.4967 124.481 9.63437C122.821 8.67153 120.962 8.44095 119.032 8.44602C105.198 8.46882 91.3619 8.45869 77.5282 8.45869C57.9801 8.45869 38.4347 8.47136 18.8866 8.44602C15.9566 8.44095 13.4189 9.20869 11.3745 11.2763C9.60582 13.0626 8.79972 15.2062 8.79707 17.631C8.78911 32.4613 8.79707 47.289 8.79707 62.1193C8.79707 65.6058 8.83949 69.0897 8.78911 72.5762C8.70956 78.0695 12.8462 82.0425 18.5844 82.1084C22.9543 82.1565 27.3242 82.121 31.6942 82.0729C32.5533 82.0628 32.7893 82.344 32.7124 83.1041C32.556 84.6396 32.4419 86.1776 32.32 87.7156C32.2749 88.2807 31.9885 88.5239 31.3892 88.5214C26.6799 88.4986 21.9493 88.7469 17.2638 88.4175C10.335 87.9285 5.50635 84.3381 3.01379 78.1455C2.34027 76.4707 2.06185 74.5551 2.05389 72.7485C1.98495 54.4672 1.99025 36.1834 2.02472 17.9021C2.03533 12.0896 4.60214 7.50345 9.74901 4.35142C12.4007 2.72726 15.3334 1.99246 18.5287 2.00006C35.3561 2.04313 52.1862 2.02033 69.0137 2.02033L69.0216 2.02286Z"
        stroke="#78787D"
        stroke-width="3"
        stroke-miterlimit="10"
      />
      <path
        d="M60.3116 47.4169V49.1517C60.3116 54.2879 60.3678 59.4267 60.2956 64.5604C60.2126 70.385 60.5471 76.1844 61.1438 81.9788C61.5853 86.2678 61.7941 90.5795 62.1553 94.8761C62.4951 98.9104 62.9045 102.94 63.2818 106.972C63.52 109.521 62.0804 111.644 59.7417 112.196C56.8785 112.872 53.9805 110.867 53.7076 107.98C53.4855 105.605 53.341 103.222 53.1376 100.844C52.953 98.6659 52.7175 96.4898 52.5382 94.3113C52.3081 91.5427 52.1261 88.7691 51.896 86.0005C51.6364 82.8411 51.3474 79.6867 51.0665 76.5298C51.0585 76.4441 50.9755 76.3634 50.9568 76.3307C50.055 76.3307 49.196 76.371 48.3451 76.318C47.6761 76.2777 47.6146 76.6534 47.5718 77.1047C47.4326 78.5697 47.2721 80.0322 47.1543 81.4997C46.8065 85.8316 46.4934 90.1634 46.1375 94.4953C45.7682 98.9886 45.3588 103.477 44.9842 107.97C44.7889 110.33 42.3538 112.504 40.0124 112.373C37.2804 112.219 35.1584 110.015 35.3751 107.41C35.6963 103.535 36.1351 99.6694 36.4723 95.7964C36.7211 92.9295 36.8629 90.0576 37.0904 87.1881C37.5212 81.7493 38.0109 76.313 38.4016 70.8717C38.5273 69.1218 38.4149 67.3593 38.4149 65.6018C38.4149 63.4207 38.4337 61.2396 38.423 59.0586C38.4096 56.7741 38.3641 54.4922 38.348 52.2077C38.3347 50.652 38.348 49.0987 38.348 47.5329C37.4382 47.4094 37.3714 48.0473 37.2509 48.5062C36.7693 50.3721 36.3304 52.2506 35.8943 54.1266C35.2815 56.7691 34.6928 59.4166 34.0747 62.0591C33.4298 64.8252 32.7555 67.5887 32.1052 70.3548C31.6931 72.1047 31.0884 73.6528 28.9932 74.2706C26.7481 74.9338 23.9973 73.2822 24 71.0532C24 69.8933 24.2622 68.7208 24.5111 67.5736C24.9633 65.5009 25.4985 63.4434 25.9909 61.3758C26.7267 58.292 27.4492 55.2032 28.1904 52.1195C28.854 49.3559 29.507 46.5874 30.2134 43.8339C30.5639 42.4622 31.5272 41.5066 32.9481 41.1107C35.731 40.3366 38.5247 39.5827 41.3477 38.9549C43.1245 38.559 44.9548 38.3472 46.7744 38.1682C48.0936 38.0396 49.1425 39.1994 48.9766 40.4602C48.3317 45.3518 47.6815 50.241 47.0206 55.1301C46.8761 56.1942 46.67 57.2532 46.5255 58.3173C46.4907 58.5618 46.5175 58.8619 46.6379 59.0712C47.4808 60.5261 48.3558 61.9658 49.3512 63.63C50.3467 61.9709 51.4598 60.5563 52.0458 58.9678C52.3991 58.0122 51.9629 56.7867 51.8238 55.6874C51.4625 52.8356 51.0825 49.9863 50.6892 47.1396C50.3948 45.0064 50.0925 42.8707 49.7446 40.7451C49.485 39.1616 50.4591 37.9715 52.1101 38.2009C54.9438 38.5968 57.8097 38.9599 60.5551 39.6886C65.4118 40.9771 70.1963 42.5152 75.0022 43.9802C77.9938 44.8929 80.9587 45.8813 83.9476 46.7992C85.8957 47.3968 87.1801 49.0382 86.9794 50.8562C86.7867 52.6112 85.4782 53.9475 83.2653 54.2577C82.5936 54.351 81.8283 54.0787 81.146 53.8669C74.6757 51.8446 68.2162 49.7947 61.7512 47.7598C61.3311 47.6287 60.895 47.548 60.3143 47.4068L60.3116 47.4169Z"
        stroke="#78787D"
        stroke-width="3"
        stroke-miterlimit="10"
      />
      <path
        d="M49.0176 17.2246C55.8891 17.3645 60.6824 23.8857 58.4435 30.1168C57.5105 32.7144 56.0904 34.9313 53.7237 36.6095C51.0959 38.4742 47.467 38.7435 44.7521 36.9332C40.8756 34.3486 38.868 30.772 39.0067 26.2295C39.1237 22.4095 42.2358 18.7707 46.1422 17.7737C47.0834 17.5328 48.0573 17.4033 49.0176 17.2246Z"
        stroke="#78787D"
        stroke-width="3"
        stroke-miterlimit="10"
      />
      <path
        d="M110.992 58.0123C110.992 63.0391 111.016 68.0659 110.98 73.0926C110.965 75.274 110.909 75.2714 108.803 75.2587C107.822 75.251 106.838 75.2203 105.859 75.2663C105.229 75.2944 104.988 75.0262 105.005 74.4055C105.012 74.1731 105 73.9407 105 73.7108C105 63.3379 105 52.9625 105 42.5896C105 41.0699 105.002 41.0545 106.442 41.0264C107.582 41.006 108.722 41.0673 109.86 41.0162C110.736 40.9754 111.004 41.3202 110.999 42.2372C110.963 47.4964 110.982 52.7556 110.982 58.0148C110.987 58.0148 110.99 58.0148 110.994 58.0148L110.992 58.0123Z"
        stroke="#78787D"
        stroke-width="2.5"
        stroke-miterlimit="10"
      />
      <path
        d="M93.0199 62.8375C93.0199 59.1084 93.045 55.3794 93.0003 51.6503C92.9892 50.788 93.2627 50.4878 94.2367 50.5361C95.7522 50.6099 97.2788 50.587 98.7971 50.531C99.626 50.5005 100 50.7269 100 51.518C99.986 59.0423 99.9888 66.5641 99.9944 74.0884C99.9944 74.9609 99.6121 75.3144 98.6073 75.2636C97.1644 75.1898 95.7103 75.2 94.2646 75.2585C93.3073 75.2966 93.0003 74.9761 93.0059 74.1189C93.0394 70.3567 93.0199 66.5946 93.0199 62.835V62.8375Z"
        stroke="#78787D"
        stroke-width="2.5"
        stroke-miterlimit="10"
      />
      <path
        d="M80.0223 66.6455C80.0223 64.1841 80.0476 61.7226 80.0064 59.2612C79.9938 58.4821 80.2754 58.1142 81.326 58.1421C83.1266 58.1878 84.9336 58.1802 86.7374 58.1421C87.6108 58.1243 87.9968 58.335 87.9937 59.0861C87.9747 64.146 87.9842 69.2059 88 74.2658C88 74.984 87.5854 75.2732 86.7247 75.2682C84.8798 75.258 83.0349 75.2529 81.19 75.2682C80.2754 75.2758 79.9938 74.9205 80.0001 74.2252C80.0286 71.6978 80.0128 69.1704 80.0128 66.6455H80.0191H80.0223Z"
        stroke="#78787D"
        stroke-width="2.5"
        stroke-miterlimit="10"
      />
    </svg>
  `,
  styles: ``,
})
export class CapacitacionIconComponent {}
