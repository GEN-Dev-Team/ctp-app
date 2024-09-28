import { Component } from '@angular/core';

@Component({
  selector: 'app-multidis-icon',
  standalone: true,
  imports: [],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109 100">
      <g clip-path="url(#clip0_95_926)">
        <path
          d="M12.3541 47.7573C10.6117 49.6657 9.7062 48.7054 9.20808 47.1536C8.45788 44.8197 7.86297 42.4372 7.22368 40.0689C6.82035 38.5758 6.44525 37.0766 6.07217 35.5754C5.51154 33.3185 5.32399 31.2885 7.32452 29.3861C14.1953 22.8586 20.9652 16.2216 27.6868 9.53607C29.1892 8.04093 30.5444 7.14547 32.7123 8.05916C36.3504 9.59279 40.0509 10.9765 43.6325 12.3886C42.8602 16.8922 42.1644 17.2751 38.722 15.7152C37.2054 15.0284 35.6042 14.5219 34.0332 13.9587C32.2969 13.3347 30.9175 13.6507 29.5179 15.0588C23.7765 20.8347 17.7789 26.3635 12.2109 32.2994C11.2066 33.3691 11.3578 36.0292 11.7289 37.7938C12.3521 40.7476 13.5802 43.5717 14.649 46.7302C16.5205 45.4457 18.1036 44.0519 19.9307 43.1605C25.1942 40.5916 29.6389 42.1272 32.3049 47.3724C33.037 48.8108 33.6743 48.9404 35.0073 48.1868C37.7217 46.6532 42.3177 47.4939 44.7457 49.8177C47.4481 52.4028 48.775 57.0523 47.1778 59.8096C46.1816 61.5296 46.4841 62.3116 48.0873 62.9964C53.2762 65.2127 53.5283 74.1734 50.2835 77.1353C47.1839 79.9656 44.1811 82.9011 41.3517 85.5835C44.3626 88.8493 46.8511 91.9206 49.7874 94.4672C50.5315 95.1135 53.0181 94.528 54.1454 93.7216C55.3635 92.8505 56.8598 91.3067 55.0509 89.3294C53.2016 87.3075 51.5742 85.0851 49.745 83.043C48.6298 81.799 48.3697 80.9806 49.7914 79.6212C51.1023 78.3671 51.913 77.8262 53.3327 79.3436C56.5291 82.7654 59.8566 86.0616 63.057 89.4793C65.0475 91.6045 67.7095 91.949 69.5326 90.1438C71.3052 88.3874 71.1439 86.1041 69.1353 84.0316C64.7571 79.5118 60.4354 74.9372 56.0007 70.4761C54.5608 69.0276 54.1454 67.9072 55.8112 66.3229C57.4164 64.7974 58.4228 65.4579 59.7013 66.7504C66.8867 74.0235 74.1023 81.2682 81.3764 88.4522C83.6371 90.6848 85.7929 90.8205 87.6482 89.1937C89.3685 87.6864 89.4108 85.081 87.3115 82.8829C81.3764 76.6754 75.2962 70.6098 69.2764 64.4834C67.9273 63.1098 66.4208 61.8416 65.3399 60.2796C64.8357 59.5543 64.7732 58.0024 65.2169 57.2468C65.9631 55.9765 67.2295 55.0446 68.7844 56.5863C71.9646 59.7366 75.2175 62.8161 78.3938 65.9704C81.086 68.6447 83.7763 71.327 86.3515 74.1126C88.0516 75.9522 89.6246 76.3007 91.5263 74.4652C93.7426 72.3258 94.0552 70.7577 92.1817 68.6163C89.9977 66.1203 87.6261 63.7885 85.3089 61.4121C79.2448 55.1965 73.2614 48.8959 67.042 42.8404C64.9487 40.8002 66.1809 39.5583 67.4292 38.2354C69.0163 36.5519 69.7806 38.4056 70.6478 39.2788C78.5914 47.2832 86.3495 55.4822 94.4968 63.2739C99.4901 68.049 99.9741 74.8339 93.7971 79.7934C93.2364 80.2431 92.7988 81.6977 93.0993 82.2407C95.4769 86.5255 93.4825 90.857 90.6853 93.361C87.4264 96.2784 82.1004 96.0859 78.668 93.282C78.0893 92.8079 77.6416 91.9733 77.0063 91.8173C76.246 91.6289 74.9291 91.6795 74.5803 92.1596C71.275 96.6998 67.4776 97.8181 62.5872 95.4558C61.0384 94.7083 60.1067 94.4976 58.814 96.4161C55.7527 100.958 48.7186 101.157 44.7377 97.1617C42.8037 95.2208 40.9322 93.2172 39.1051 91.175C37.5079 89.3902 36.425 90.8063 35.4872 91.8031C32.6679 94.8035 29.1811 95.7739 25.658 94.0276C23.3953 92.9052 21.786 90.4619 19.8682 88.6264C19.1281 87.9173 18.4424 86.8294 17.5712 86.6289C11.499 85.2431 9.52268 83.0977 8.45385 76.8071C8.29857 75.8975 7.2136 74.684 6.3303 74.4348C0.629194 72.8323 -2.3595 64.6759 2.27681 59.923C4.99124 57.1414 7.76617 54.4206 10.4766 51.6329C11.3417 50.7435 12.0838 49.7366 12.8804 48.7824C12.705 48.44 12.5275 48.0977 12.3521 47.7553L12.3541 47.7573ZM17.6035 81.7403C19.0817 80.9522 20.2675 80.6199 21.0419 79.8622C27.8743 73.1868 34.6624 66.4648 41.39 59.6819C42.9388 58.122 42.7634 55.0405 41.3255 53.6771C39.6799 52.1171 36.8949 52.3562 35.1605 54.1309C33.1479 56.1912 31.0768 58.1929 29.04 60.2289C24.3875 64.8825 19.6221 69.4307 15.1935 74.2909C14.2679 75.3079 14.165 77.5891 14.5159 79.0924C14.7559 80.1195 16.4419 80.8043 17.6035 81.7403ZM28.1889 89.9068C29.5945 89.4854 30.4214 89.4895 30.8408 89.0742C36.1043 83.8736 41.3295 78.6305 46.5144 73.3529C48.1156 71.7241 48.1963 70.1054 46.4256 68.3327C44.6207 66.5276 42.719 66.4263 40.908 67.8201C39.1071 69.2058 37.6309 71.015 35.9974 72.6216C32.6337 75.9279 29.1226 79.0985 25.9807 82.6054C25.0954 83.592 24.7203 85.7395 25.1417 87.0117C25.5592 88.2719 27.2754 89.0964 28.1889 89.9068ZM28.1183 51.8983C28.0558 49.0458 26.9003 47.5729 24.6396 47.4818C23.5123 47.4372 22.0522 47.8444 21.2577 48.596C16.2785 53.3083 11.4446 58.1746 6.56222 62.9923C4.68269 64.846 4.75932 66.7727 6.51987 68.6041C8.29655 70.4518 10.2567 70.4234 12.0717 68.669C17.0287 63.8817 21.9655 59.0721 26.8398 54.1998C27.5396 53.4988 27.8481 52.4007 28.1163 51.8983H28.1183Z"
        />
        <path
          d="M108.511 29.6455C101.426 36.2642 94.269 42.808 87.3195 49.5665C86.0107 50.8408 85.2202 51.1852 83.9477 50.0061C82.6812 48.8331 81.9492 47.7067 83.5706 46.0596C89.1527 40.387 94.6259 34.605 100.135 28.8574C100.26 28.7277 100.311 28.5272 100.543 28.0734C99.4861 26.8315 98.4233 25.4356 97.2133 24.1836C91.5445 18.3205 85.8454 12.4899 80.1241 6.67951C79.6421 6.18924 78.8012 5.51865 78.3151 5.64831C72.5697 7.17992 66.7153 8.47246 61.2037 10.6341C58.3623 11.7484 55.9786 14.295 53.6897 16.5114C50.102 19.9879 46.7987 23.7561 43.324 27.3521C41.392 29.3517 42.3338 31.3371 43.9835 32.3319C45.264 33.1037 47.8575 33.3165 48.9182 32.5142C52.5079 29.7974 55.672 26.5154 59.0036 23.4563C59.5662 22.9396 60.1571 22.4514 60.6935 21.9854C64.5978 24.763 64.5675 25.2269 61.1856 28.2901C58.8826 30.3768 56.7147 32.6195 54.5649 34.8683C51.2475 38.3428 47.5671 39.1714 43.7677 38.1828C36.6428 36.3311 36.2455 26.4911 40.2224 22.6033C45.0079 17.9234 49.5615 13.0045 54.4056 8.39142C55.8354 7.03 57.8077 6.00488 59.7114 5.43356C66.2454 3.47449 72.85 1.75245 79.4546 0.0445846C80.116 -0.125594 81.2091 0.170192 81.683 0.658442C89.9553 9.19977 98.1692 17.7999 106.369 26.4121C106.893 26.9631 107.198 27.7229 107.605 28.3853C107.908 28.8047 108.21 29.2241 108.511 29.6414V29.6455Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_95_926">
          <rect width="108.511" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `,
  styles: ``,
})
export class MultidisIconComponent {}
