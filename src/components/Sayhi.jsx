import React, { useEffect } from "react";
import bubble from "../images/faizan /rectangle.png";
export default function SayHi({ content }) {
  return (
    <div className="pb-8 pt-16 p-4">
      <div className="container pb-8 sm:pb-0 text-white mx-auto max-w-2xl grid md:grid-cols-5 grid-cols-1 gap-8 px-8 pt-8 rounded-2xl bg-gradient-to-br dark:from-[#1E1C32]/70 from-[#FFE9F4]/30 to-[#EAF3FF]/30 dark:to-[#2B161D]/70">
        <div className="col-span-2">
          <div className="tgrad font-bold text-[44px]">Have an idea?</div>
          <p className="text-[18px] dark:text-white/70 text-black/70 mt-4">
            Want to create something awesome? Let’s get in touch and build
            something awesome!
          </p>
          <div className="flex items-center justify-start mt-4">
            <a target="_blank" className="flex">
              <svg
                width="98"
                height="20"
                viewBox="0 0 98 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_11_944)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.57384 0.416687C1.15235 0.416687 0 1.57477 0 3.00334C0 4.4319 1.15235 5.58999 2.57384 5.58999C3.99533 5.58999 5.14768 4.4319 5.14768 3.00334C5.14768 1.57477 3.99533 0.416687 2.57384 0.416687ZM1.4346 3.00334C1.4346 2.37102 1.94466 1.85843 2.57384 1.85843C3.20302 1.85843 3.71308 2.37102 3.71308 3.00334C3.71308 3.63565 3.20302 4.14825 2.57384 4.14825C1.94466 4.14825 1.4346 3.63565 1.4346 3.00334Z"
                    fill="url(#paint0_linear_11_944)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.7131 6.01403C12.0457 6.01403 10.4466 6.67971 9.26757 7.8646C8.08852 9.04952 7.42615 10.6565 7.42615 12.3323V18.8625C7.42615 19.2606 7.7473 19.5834 8.14345 19.5834H11.8565C12.2527 19.5834 12.5738 19.2606 12.5738 18.8625V12.3323C12.5738 12.0286 12.6938 11.7374 12.9075 11.5227C13.1212 11.3079 13.4109 11.1874 13.7131 11.1874C14.0152 11.1874 14.305 11.3079 14.5187 11.5227C14.7323 11.7374 14.8523 12.0286 14.8523 12.3323V18.8625C14.8523 19.2606 15.1735 19.5834 15.5696 19.5834H19.2827C19.6788 19.5834 20 19.2606 20 18.8625V12.3323C20 10.6565 19.3377 9.04952 18.1586 7.8646C16.9796 6.67971 15.3805 6.01403 13.7131 6.01403ZM13.7131 7.45577C12.4262 7.45577 11.192 7.96955 10.282 8.88402C9.37199 9.79861 8.86074 11.0389 8.86074 12.3323V18.1416H11.1392V12.3323C11.1392 11.6462 11.4104 10.9883 11.8931 10.5032C12.3757 10.0181 13.0304 9.74561 13.7131 9.74561C14.3957 9.74561 15.0503 10.0181 15.5331 10.5032C16.0157 10.9883 16.2869 11.6462 16.2869 12.3323V18.1416H18.5654V12.3323C18.5654 11.0389 18.0542 9.79861 17.1442 8.88402C16.2342 7.96955 15 7.45577 13.7131 7.45577Z"
                    fill="url(#paint1_linear_11_944)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 7.66779C0 7.26967 0.321146 6.94692 0.7173 6.94692H4.43038C4.82653 6.94692 5.14768 7.26967 5.14768 7.66779V18.8625C5.14768 19.2606 4.82653 19.5833 4.43038 19.5833H0.7173C0.321146 19.5833 0 19.2606 0 18.8625V7.66779ZM1.4346 8.38868V18.1416H3.71308V8.38868H1.4346Z"
                    fill="url(#paint2_linear_11_944)"
                  />
                </g>
                <path
                  d="M31.5511 2.45455V17H29.4276V2.45455H31.5511ZM34.068 17V6.09091H36.1916V17H34.068ZM35.1405 4.40767C34.7712 4.40767 34.4539 4.28456 34.1888 4.03835C33.9283 3.7874 33.7981 3.48911 33.7981 3.14347C33.7981 2.79309 33.9283 2.49479 34.1888 2.24858C34.4539 1.99763 34.7712 1.87216 35.1405 1.87216C35.5098 1.87216 35.8247 1.99763 36.0851 2.24858C36.3502 2.49479 36.4828 2.79309 36.4828 3.14347C36.4828 3.48911 36.3502 3.7874 36.0851 4.03835C35.8247 4.28456 35.5098 4.40767 35.1405 4.40767ZM40.8321 10.5227V17H38.7085V6.09091H40.7468V7.86648H40.8818C41.1327 7.28883 41.5257 6.82481 42.0608 6.47443C42.6005 6.12405 43.28 5.94886 44.0991 5.94886C44.8425 5.94886 45.4935 6.10511 46.0522 6.41761C46.611 6.72538 47.0442 7.18466 47.352 7.79545C47.6597 8.40625 47.8136 9.16146 47.8136 10.0611V17H45.69V10.3168C45.69 9.52604 45.4841 8.90814 45.0721 8.46307C44.6602 8.01326 44.0944 7.78835 43.3747 7.78835C42.8823 7.78835 42.4443 7.89489 42.0608 8.10795C41.682 8.32102 41.3813 8.63352 41.1588 9.04545C40.941 9.45265 40.8321 9.94508 40.8321 10.5227ZM52.2747 13.2997L52.2605 10.7074H52.6299L56.9764 6.09091H59.5191L54.5617 11.3466H54.2279L52.2747 13.2997ZM50.3216 17V2.45455H52.4452V17H50.3216ZM57.2108 17L53.3046 11.8153L54.7676 10.331L59.8174 17H57.2108ZM65.3669 17.2202C64.2921 17.2202 63.3664 16.9905 62.5899 16.5312C61.8181 16.0672 61.2216 15.4162 60.8002 14.5781C60.3835 13.7353 60.1752 12.7481 60.1752 11.6165C60.1752 10.4991 60.3835 9.5142 60.8002 8.66193C61.2216 7.80966 61.8087 7.14441 62.5615 6.66619C63.3191 6.18797 64.2045 5.94886 65.2178 5.94886C65.8333 5.94886 66.4299 6.05066 67.0075 6.25426C67.5852 6.45786 68.1037 6.77746 68.5629 7.21307C69.0222 7.64867 69.3844 8.21449 69.6496 8.91051C69.9147 9.6018 70.0473 10.4422 70.0473 11.4318V12.1847H61.3754V10.5938H67.9663C67.9663 10.035 67.8527 9.54025 67.6254 9.10938C67.3982 8.67377 67.0786 8.33049 66.6666 8.07955C66.2594 7.8286 65.7812 7.70312 65.232 7.70312C64.6354 7.70312 64.1145 7.84991 63.6695 8.14347C63.2291 8.43229 62.8882 8.81108 62.6467 9.27983C62.41 9.74384 62.2916 10.2481 62.2916 10.7926V12.0355C62.2916 12.7647 62.4195 13.3849 62.6752 13.8963C62.9356 14.4077 63.2978 14.7983 63.7618 15.0682C64.2258 15.3333 64.768 15.4659 65.3882 15.4659C65.7907 15.4659 66.1576 15.4091 66.4891 15.2955C66.8205 15.1771 67.107 15.0019 67.3485 14.7699C67.5899 14.5379 67.7746 14.2514 67.9024 13.9105L69.9124 14.2727C69.7514 14.8646 69.4626 15.383 69.0459 15.8281C68.634 16.2685 68.1155 16.6117 67.4905 16.858C66.8702 17.0994 66.1624 17.2202 65.3669 17.2202ZM76.1473 17.2131C75.2666 17.2131 74.4806 16.9882 73.7893 16.5384C73.1028 16.0838 72.563 15.4375 72.17 14.5994C71.7818 13.7566 71.5876 12.7457 71.5876 11.5668C71.5876 10.3878 71.7841 9.37926 72.1771 8.54119C72.5749 7.70312 73.1194 7.06155 73.8107 6.61648C74.5019 6.1714 75.2856 5.94886 76.1615 5.94886C76.8386 5.94886 77.3831 6.0625 77.795 6.28977C78.2117 6.51231 78.5337 6.77273 78.7609 7.07102C78.9929 7.36932 79.1729 7.6321 79.3007 7.85938H79.4286V2.45455H81.5521V17H79.4783V15.3026H79.3007C79.1729 15.5346 78.9882 15.7997 78.7467 16.098C78.51 16.3963 78.1833 16.6567 77.7666 16.8793C77.35 17.1018 76.8102 17.2131 76.1473 17.2131ZM76.6161 15.402C77.2268 15.402 77.7429 15.241 78.1643 14.919C78.5905 14.5923 78.9125 14.1402 79.1303 13.5625C79.3528 12.9848 79.4641 12.3125 79.4641 11.5455C79.4641 10.7879 79.3552 10.125 79.1374 9.55682C78.9196 8.98864 78.6 8.54593 78.1786 8.22869C77.7571 7.91146 77.2363 7.75284 76.6161 7.75284C75.9768 7.75284 75.4442 7.91856 75.018 8.25C74.5919 8.58144 74.2699 9.03362 74.0521 9.60653C73.8391 10.1795 73.7325 10.8258 73.7325 11.5455C73.7325 12.2746 73.8414 12.9304 74.0592 13.5128C74.277 14.0952 74.599 14.5568 75.0251 14.8977C75.456 15.2339 75.9863 15.402 76.6161 15.402ZM84.243 17V6.09091H86.3666V17H84.243ZM85.3155 4.40767C84.9461 4.40767 84.6289 4.28456 84.3638 4.03835C84.1033 3.7874 83.9731 3.48911 83.9731 3.14347C83.9731 2.79309 84.1033 2.49479 84.3638 2.24858C84.6289 1.99763 84.9461 1.87216 85.3155 1.87216C85.6848 1.87216 85.9997 1.99763 86.2601 2.24858C86.5252 2.49479 86.6578 2.79309 86.6578 3.14347C86.6578 3.48911 86.5252 3.7874 86.2601 4.03835C85.9997 4.28456 85.6848 4.40767 85.3155 4.40767ZM91.0071 10.5227V17H88.8835V6.09091H90.9218V7.86648H91.0568C91.3077 7.28883 91.7007 6.82481 92.2358 6.47443C92.7755 6.12405 93.455 5.94886 94.2741 5.94886C95.0175 5.94886 95.6685 6.10511 96.2272 6.41761C96.786 6.72538 97.2192 7.18466 97.527 7.79545C97.8347 8.40625 97.9886 9.16146 97.9886 10.0611V17H95.865V10.3168C95.865 9.52604 95.6591 8.90814 95.2471 8.46307C94.8352 8.01326 94.2694 7.78835 93.5497 7.78835C93.0573 7.78835 92.6193 7.89489 92.2358 8.10795C91.857 8.32102 91.5563 8.63352 91.3338 9.04545C91.116 9.45265 91.0071 9.94508 91.0071 10.5227Z"
                  fill="url(#paint3_linear_11_944)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_11_944"
                    x1="-3.01075"
                    y1="0.416689"
                    x2="20.8231"
                    y2="1.42877"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.86" />
                    <stop
                      offset="0.228"
                      stop-color="#62A4F1"
                      stop-opacity="0.79"
                    />
                    <stop
                      offset="0.581089"
                      stop-color="#7F4BEE"
                      stop-opacity="0.77"
                    />
                    <stop offset="1" stop-color="#157FFB" stop-opacity="0.75" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_11_944"
                    x1="-3.01075"
                    y1="0.416689"
                    x2="20.8231"
                    y2="1.42877"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.86" />
                    <stop
                      offset="0.228"
                      stop-color="#62A4F1"
                      stop-opacity="0.79"
                    />
                    <stop
                      offset="0.581089"
                      stop-color="#7F4BEE"
                      stop-opacity="0.77"
                    />
                    <stop offset="1" stop-color="#157FFB" stop-opacity="0.75" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_11_944"
                    x1="-3.01075"
                    y1="0.416689"
                    x2="20.8231"
                    y2="1.42877"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.86" />
                    <stop
                      offset="0.228"
                      stop-color="#62A4F1"
                      stop-opacity="0.79"
                    />
                    <stop
                      offset="0.581089"
                      stop-color="#7F4BEE"
                      stop-opacity="0.77"
                    />
                    <stop offset="1" stop-color="#157FFB" stop-opacity="0.75" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_11_944"
                    x1="17.1613"
                    y1="-6"
                    x2="102.403"
                    y2="1.80503"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.86" />
                    <stop
                      offset="0.228"
                      stop-color="#62A4F1"
                      stop-opacity="0.79"
                    />
                    <stop
                      offset="0.581089"
                      stop-color="#7F4BEE"
                      stop-opacity="0.77"
                    />
                    <stop offset="1" stop-color="#157FFB" stop-opacity="0.75" />
                  </linearGradient>
                  <clipPath id="clip0_11_944">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a target="_blank" className="flex items-center ml-8">
              <svg
                width="148"
                height="21"
                viewBox="0 0 148 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.66667 1.66675C1.18054 1.66675 0 2.90135 0 4.37508V15.6251C0 17.0988 1.18054 18.3334 2.66667 18.3334H17.3333C18.8195 18.3334 20 17.0988 20 15.6251V4.37508C20 2.90135 18.8195 1.66675 17.3333 1.66675H2.66667ZM2.14934 3.4864C2.3026 3.38895 2.48089 3.33341 2.66667 3.33341H17.3333C17.5188 3.33341 17.6969 3.38879 17.85 3.486L9.99942 9.7665L2.14934 3.4864ZM1.66667 5.23463V15.6251C1.66667 16.2138 2.13612 16.6667 2.66667 16.6667H17.3333C17.8638 16.6667 18.3333 16.2138 18.3333 15.6251V5.23372L10.52 11.4844C10.2157 11.7278 9.78317 11.7278 9.47883 11.4844L1.66667 5.23463Z"
                  fill="url(#paint0_linear_0_1)"
                />
                <path
                  d="M31.5511 10.5227V17H29.4276V2.45455H31.5227V7.86648H31.6577C31.9134 7.27936 32.304 6.81297 32.8295 6.46733C33.3551 6.12169 34.0417 5.94886 34.8892 5.94886C35.6373 5.94886 36.2907 6.10275 36.8494 6.41051C37.4129 6.71828 37.8485 7.17756 38.1562 7.78835C38.4688 8.39441 38.625 9.15199 38.625 10.0611V17H36.5014V10.3168C36.5014 9.51657 36.2955 8.89631 35.8835 8.45597C35.4716 8.01089 34.8987 7.78835 34.1648 7.78835C33.6629 7.78835 33.2131 7.89489 32.8153 8.10795C32.4223 8.32102 32.1122 8.63352 31.8849 9.04545C31.6624 9.45265 31.5511 9.94508 31.5511 10.5227ZM41.1188 17V6.09091H43.2424V17H41.1188ZM42.1912 4.40767C41.8219 4.40767 41.5047 4.28456 41.2395 4.03835C40.9791 3.7874 40.8489 3.48911 40.8489 3.14347C40.8489 2.79309 40.9791 2.49479 41.2395 2.24858C41.5047 1.99763 41.8219 1.87216 42.1912 1.87216C42.5606 1.87216 42.8754 1.99763 43.1359 2.24858C43.401 2.49479 43.5336 2.79309 43.5336 3.14347C43.5336 3.48911 43.401 3.7874 43.1359 4.03835C42.8754 4.28456 42.5606 4.40767 42.1912 4.40767ZM54.5164 20.956C53.0486 20.956 51.7465 20.7547 50.6101 20.3523C49.4785 19.9545 48.5244 19.3674 47.7479 18.5909C46.9714 17.8191 46.3819 16.8722 45.9794 15.75C45.577 14.6278 45.3758 13.3471 45.3758 11.9077C45.3758 10.5062 45.5794 9.24669 45.9865 8.12926C46.3937 7.01184 46.9856 6.06013 47.7621 5.27415C48.5434 4.48343 49.4927 3.87973 50.6101 3.46307C51.7276 3.0464 52.9965 2.83807 54.4169 2.83807C55.7758 2.83807 56.9738 3.05114 58.0107 3.47727C59.0476 3.90341 59.9188 4.48816 60.6243 5.23153C61.3346 5.9749 61.8696 6.82718 62.2294 7.78835C62.5893 8.74953 62.7692 9.76515 62.7692 10.8352C62.7692 11.5833 62.7219 12.3149 62.6272 13.0298C62.5325 13.7401 62.3573 14.384 62.1016 14.9616C61.8507 15.5346 61.4861 15.9938 61.0079 16.3395C60.5344 16.6804 59.9188 16.858 59.1613 16.8722C58.7588 16.8864 58.3682 16.839 57.9894 16.7301C57.6106 16.6212 57.2886 16.446 57.0235 16.2045C56.7583 15.9583 56.5973 15.6458 56.5405 15.267H56.4553C56.3417 15.5464 56.1523 15.8068 55.8871 16.0483C55.622 16.285 55.2834 16.4744 54.8715 16.6165C54.4643 16.7538 53.9908 16.8106 53.451 16.7869C52.8544 16.7633 52.317 16.6283 51.8388 16.3821C51.3606 16.1359 50.951 15.795 50.6101 15.3594C50.274 14.9238 50.0159 14.4077 49.836 13.8111C49.6561 13.2145 49.5661 12.5516 49.5661 11.8224C49.5661 11.1217 49.6679 10.4943 49.8715 9.94034C50.0751 9.38163 50.3521 8.90104 50.7025 8.49858C51.0576 8.09138 51.4648 7.76941 51.924 7.53267C52.3833 7.29593 52.8687 7.14678 53.38 7.08523C53.8772 7.02841 54.3341 7.04261 54.7508 7.12784C55.1674 7.21307 55.5131 7.34328 55.7877 7.51847C56.067 7.69366 56.2422 7.88542 56.3133 8.09375H56.4056V7.2983H58.1527V13.8892C58.1527 14.2633 58.2498 14.5805 58.4439 14.8409C58.6428 15.1013 58.9245 15.2315 59.2891 15.2315C59.72 15.2315 60.0562 15.0729 60.2976 14.7557C60.5438 14.4384 60.7167 13.9508 60.8161 13.2926C60.9203 12.6345 60.9723 11.7917 60.9723 10.7642C60.9723 10.0445 60.8753 9.36742 60.6812 8.73295C60.4918 8.09375 60.21 7.5161 59.836 7C59.4667 6.47917 59.0121 6.03172 58.4723 5.65767C57.9326 5.28362 57.317 4.99479 56.6258 4.79119C55.9392 4.58759 55.1793 4.4858 54.3459 4.4858C53.2143 4.4858 52.2081 4.66098 51.3275 5.01136C50.4468 5.35701 49.7034 5.85653 49.0973 6.50994C48.496 7.16335 48.0391 7.94697 47.7266 8.8608C47.4188 9.76989 47.265 10.7902 47.265 11.9219C47.265 13.1009 47.4236 14.1473 47.7408 15.0611C48.058 15.9702 48.5268 16.7372 49.1471 17.3622C49.7673 17.9872 50.5344 18.4607 51.4482 18.7827C52.362 19.1094 53.4155 19.2727 54.6087 19.2727C55.139 19.2727 55.6598 19.2254 56.1712 19.1307C56.6826 19.0407 57.1371 18.9366 57.5348 18.8182C57.9373 18.7045 58.238 18.6122 58.4368 18.5412L58.934 20.0966C58.6404 20.2339 58.2498 20.3688 57.7621 20.5014C57.2792 20.634 56.7536 20.7429 56.1854 20.8281C55.622 20.9134 55.0656 20.956 54.5164 20.956ZM53.863 15.0469C54.4785 15.0469 54.9733 14.9238 55.3473 14.6776C55.7261 14.4313 55.9984 14.0644 56.1641 13.5767C56.3346 13.0843 56.4198 12.4688 56.4198 11.7301C56.4151 11.0104 56.3227 10.4375 56.1428 10.0114C55.9676 9.58049 55.693 9.27273 55.3189 9.08807C54.9496 8.89867 54.4738 8.80398 53.8914 8.80398C53.3563 8.80398 52.8994 8.93419 52.5206 9.1946C52.1466 9.45502 51.8601 9.80776 51.6613 10.2528C51.4671 10.6979 51.3677 11.1927 51.363 11.7372C51.3677 12.3101 51.4482 12.8499 51.6044 13.3565C51.7654 13.8584 52.0258 14.2656 52.3857 14.5781C52.7503 14.8906 53.2427 15.0469 53.863 15.0469ZM72.9495 8.75426L71.0247 9.09517C70.9443 8.84896 70.8164 8.61458 70.6412 8.39205C70.4708 8.16951 70.2388 7.98722 69.9452 7.84517C69.6516 7.70312 69.2847 7.6321 68.8443 7.6321C68.243 7.6321 67.7411 7.76705 67.3387 8.03693C66.9362 8.30208 66.735 8.64536 66.735 9.06676C66.735 9.43134 66.8699 9.72491 67.1398 9.94744C67.4097 10.17 67.8453 10.3523 68.4466 10.4943L70.1796 10.892C71.1834 11.1241 71.9315 11.4815 72.4239 11.9645C72.9163 12.4474 73.1625 13.0748 73.1625 13.8466C73.1625 14.5 72.9731 15.0824 72.5943 15.5938C72.2203 16.1004 71.6971 16.4981 71.0247 16.7869C70.3571 17.0758 69.583 17.2202 68.7023 17.2202C67.4807 17.2202 66.484 16.9598 65.7122 16.4389C64.9405 15.9134 64.467 15.1676 64.2918 14.2017L66.3443 13.8892C66.4722 14.4242 66.735 14.8291 67.1327 15.1037C67.5304 15.3736 68.0489 15.5085 68.6881 15.5085C69.3841 15.5085 69.9405 15.3641 70.3571 15.0753C70.7738 14.7817 70.9821 14.4242 70.9821 14.0028C70.9821 13.6619 70.8543 13.3755 70.5986 13.1435C70.3477 12.9115 69.9618 12.7363 69.4409 12.6179L67.5943 12.2131C66.5764 11.9811 65.8235 11.6117 65.3358 11.1051C64.8529 10.5985 64.6114 9.95691 64.6114 9.1804C64.6114 8.53646 64.7913 7.97301 65.1512 7.49006C65.511 7.0071 66.0082 6.63068 66.6426 6.3608C67.2771 6.08617 68.0039 5.94886 68.823 5.94886C70.002 5.94886 70.93 6.20455 71.6071 6.71591C72.2842 7.22254 72.7317 7.90199 72.9495 8.75426ZM78.3321 17.2415C77.6408 17.2415 77.0158 17.1136 76.4571 16.858C75.8984 16.5975 75.4557 16.2211 75.129 15.7287C74.807 15.2363 74.646 14.6326 74.646 13.9176C74.646 13.3021 74.7644 12.7955 75.0012 12.3977C75.2379 12 75.5575 11.6851 75.96 11.4531C76.3624 11.2211 76.8122 11.0459 77.3094 10.9276C77.8065 10.8092 78.3132 10.7192 78.8293 10.6577C79.4827 10.5819 80.013 10.5204 80.4202 10.473C80.8274 10.4209 81.1233 10.3381 81.308 10.2244C81.4926 10.1108 81.585 9.92614 81.585 9.67045V9.62074C81.585 9.00047 81.4098 8.51989 81.0594 8.17898C80.7137 7.83807 80.1976 7.66761 79.5111 7.66761C78.7961 7.66761 78.2327 7.82623 77.8208 8.14347C77.4136 8.45597 77.1318 8.80398 76.9756 9.1875L74.9798 8.73295C75.2166 8.07008 75.5622 7.53504 76.0168 7.12784C76.4761 6.71591 77.004 6.41761 77.6006 6.23295C78.1972 6.04356 78.8245 5.94886 79.4827 5.94886C79.9183 5.94886 80.3799 6.00095 80.8676 6.10511C81.3601 6.20455 81.8193 6.3892 82.2455 6.65909C82.6763 6.92898 83.0291 7.31487 83.3037 7.81676C83.5783 8.31392 83.7156 8.96023 83.7156 9.75568V17H81.6418V15.5085H81.5565C81.4192 15.7831 81.2133 16.053 80.9387 16.3182C80.664 16.5833 80.3113 16.8035 79.8804 16.9787C79.4495 17.1539 78.9334 17.2415 78.3321 17.2415ZM78.7938 15.5369C79.3809 15.5369 79.8828 15.4209 80.2994 15.1889C80.7208 14.9569 81.0404 14.6539 81.2583 14.2798C81.4808 13.901 81.5921 13.4962 81.5921 13.0653V11.6591C81.5163 11.7348 81.3695 11.8059 81.1517 11.8722C80.9387 11.9337 80.6948 11.9882 80.4202 12.0355C80.1456 12.0781 79.878 12.1184 79.6176 12.1562C79.3572 12.1894 79.1394 12.2178 78.9642 12.2415C78.5523 12.2936 78.1759 12.3812 77.835 12.5043C77.4988 12.6274 77.2289 12.8049 77.0253 13.0369C76.8264 13.2642 76.727 13.5672 76.727 13.946C76.727 14.4716 76.9211 14.8693 77.3094 15.1392C77.6976 15.4044 78.1924 15.5369 78.7938 15.5369ZM86.2041 17V6.09091H88.2567V7.82386H88.3703C88.5692 7.23674 88.9196 6.77509 89.4214 6.43892C89.9281 6.09801 90.501 5.92756 91.1402 5.92756C91.2728 5.92756 91.429 5.93229 91.6089 5.94176C91.7936 5.95123 91.938 5.96307 92.0422 5.97727V8.00852C91.957 7.98485 91.8054 7.95881 91.5876 7.9304C91.3698 7.89725 91.152 7.88068 90.9342 7.88068C90.4323 7.88068 89.9849 7.98722 89.5919 8.20028C89.2036 8.40862 88.8959 8.69981 88.6686 9.07386C88.4413 9.44318 88.3277 9.86458 88.3277 10.3381V17H86.2041ZM93.5399 17V6.09091H95.6635V17H93.5399ZM94.6123 4.40767C94.243 4.40767 93.9258 4.28456 93.6606 4.03835C93.4002 3.7874 93.27 3.48911 93.27 3.14347C93.27 2.79309 93.4002 2.49479 93.6606 2.24858C93.9258 1.99763 94.243 1.87216 94.6123 1.87216C94.9817 1.87216 95.2965 1.99763 95.5569 2.24858C95.8221 2.49479 95.9547 2.79309 95.9547 3.14347C95.9547 3.48911 95.8221 3.7874 95.5569 4.03835C95.2965 4.28456 94.9817 4.40767 94.6123 4.40767ZM98.1804 17V6.09091H100.219V7.86648H100.354C100.581 7.26515 100.953 6.7964 101.469 6.46023C101.985 6.11932 102.603 5.94886 103.322 5.94886C104.052 5.94886 104.662 6.11932 105.155 6.46023C105.652 6.80114 106.019 7.26989 106.256 7.86648H106.369C106.63 7.28409 107.044 6.82008 107.612 6.47443C108.18 6.12405 108.857 5.94886 109.643 5.94886C110.633 5.94886 111.44 6.259 112.065 6.87926C112.695 7.49953 113.01 8.43466 113.01 9.68466V17H110.886V9.88352C110.886 9.14489 110.685 8.60985 110.283 8.27841C109.88 7.94697 109.4 7.78125 108.841 7.78125C108.15 7.78125 107.612 7.99432 107.229 8.42045C106.845 8.84186 106.653 9.384 106.653 10.0469V17H104.537V9.74858C104.537 9.15672 104.352 8.68087 103.983 8.32102C103.614 7.96117 103.133 7.78125 102.541 7.78125C102.139 7.78125 101.767 7.88778 101.426 8.10085C101.09 8.30919 100.818 8.60038 100.609 8.97443C100.406 9.34848 100.304 9.78172 100.304 10.2741V17H98.1804ZM116.915 17.1349C116.527 17.1349 116.193 16.9976 115.914 16.723C115.635 16.4437 115.495 16.1075 115.495 15.7145C115.495 15.3262 115.635 14.9948 115.914 14.7202C116.193 14.4408 116.527 14.3011 116.915 14.3011C117.304 14.3011 117.637 14.4408 117.917 14.7202C118.196 14.9948 118.336 15.3262 118.336 15.7145C118.336 15.9749 118.269 16.214 118.137 16.4318C118.009 16.6449 117.839 16.8153 117.626 16.9432C117.412 17.071 117.176 17.1349 116.915 17.1349ZM120.84 17V6.09091H122.879V7.86648H123.014C123.241 7.26515 123.612 6.7964 124.129 6.46023C124.645 6.11932 125.263 5.94886 125.982 5.94886C126.711 5.94886 127.322 6.11932 127.815 6.46023C128.312 6.80114 128.679 7.26989 128.915 7.86648H129.029C129.29 7.28409 129.704 6.82008 130.272 6.47443C130.84 6.12405 131.517 5.94886 132.303 5.94886C133.293 5.94886 134.1 6.259 134.725 6.87926C135.355 7.49953 135.67 8.43466 135.67 9.68466V17H133.546V9.88352C133.546 9.14489 133.345 8.60985 132.942 8.27841C132.54 7.94697 132.059 7.78125 131.501 7.78125C130.809 7.78125 130.272 7.99432 129.889 8.42045C129.505 8.84186 129.313 9.384 129.313 10.0469V17H127.197V9.74858C127.197 9.15672 127.012 8.68087 126.643 8.32102C126.273 7.96117 125.793 7.78125 125.201 7.78125C124.799 7.78125 124.427 7.88778 124.086 8.10085C123.75 8.30919 123.478 8.60038 123.269 8.97443C123.066 9.34848 122.964 9.78172 122.964 10.2741V17H120.84ZM142.878 17.2202C141.803 17.2202 140.877 16.9905 140.101 16.5312C139.329 16.0672 138.732 15.4162 138.311 14.5781C137.894 13.7353 137.686 12.7481 137.686 11.6165C137.686 10.4991 137.894 9.5142 138.311 8.66193C138.732 7.80966 139.319 7.14441 140.072 6.66619C140.83 6.18797 141.715 5.94886 142.729 5.94886C143.344 5.94886 143.941 6.05066 144.518 6.25426C145.096 6.45786 145.614 6.77746 146.074 7.21307C146.533 7.64867 146.895 8.21449 147.16 8.91051C147.426 9.6018 147.558 10.4422 147.558 11.4318V12.1847H138.886V10.5938H145.477C145.477 10.035 145.363 9.54025 145.136 9.10938C144.909 8.67377 144.589 8.33049 144.177 8.07955C143.77 7.8286 143.292 7.70312 142.743 7.70312C142.146 7.70312 141.625 7.84991 141.18 8.14347C140.74 8.43229 140.399 8.81108 140.158 9.27983C139.921 9.74384 139.802 10.2481 139.802 10.7926V12.0355C139.802 12.7647 139.93 13.3849 140.186 13.8963C140.446 14.4077 140.809 14.7983 141.273 15.0682C141.737 15.3333 142.279 15.4659 142.899 15.4659C143.301 15.4659 143.668 15.4091 144 15.2955C144.331 15.1771 144.618 15.0019 144.859 14.7699C145.101 14.5379 145.285 14.2514 145.413 13.9105L147.423 14.2727C147.262 14.8646 146.973 15.383 146.557 15.8281C146.145 16.2685 145.626 16.6117 145.001 16.858C144.381 17.0994 143.673 17.2202 142.878 17.2202Z"
                  fill="url(#paint1_linear_0_1)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_1"
                    x1="-3.01075"
                    y1="1.66675"
                    x2="20.8093"
                    y2="2.82997"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.86" />
                    <stop
                      offset="0.228"
                      stop-color="#62A4F1"
                      stop-opacity="0.79"
                    />
                    <stop
                      offset="0.581089"
                      stop-color="#7F4BEE"
                      stop-opacity="0.77"
                    />
                    <stop offset="1" stop-color="#157FFB" stop-opacity="0.75" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_1"
                    x1="9.78495"
                    y1="-6"
                    x2="150.898"
                    y2="15.7142"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.86" />
                    <stop
                      offset="0.228"
                      stop-color="#62A4F1"
                      stop-opacity="0.79"
                    />
                    <stop
                      offset="0.581089"
                      stop-color="#7F4BEE"
                      stop-opacity="0.77"
                    />
                    <stop offset="1" stop-color="#157FFB" stop-opacity="0.75" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div className=" row-start-1 md:col-start-3  overflow-hidden md:h-[17rem] col-span-3 flex items-center justify-center relative pl-12">
          <img src={bubble} className="w-[24rem]  object-cover" />
        </div>
      </div>
    </div>
  );
}
