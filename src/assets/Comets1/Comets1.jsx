import React from "react";

export const Comets1 = ({ className }) => {
  return (
    <svg
      className={`comets-1 ${className}`}
      fill="none"
      height="540"
      viewBox="0 0 540 540"
      width="540"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_f_0_2333)">
        <circle
          className="circle"
          cx="270"
          cy="270"
          fill="url(#paint0_linear_0_2333)"
          r="70"
        />
      </g>

      <g className="g" filter="url(#filter1_f_0_2333)">
        <circle
          className="circle"
          cx="270"
          cy="270"
          fill="url(#paint1_linear_0_2333)"
          r="70"
        />
      </g>

      <circle
        className="circle"
        cx="270"
        cy="270"
        fill="url(#paint2_linear_0_2333)"
        r="70"
      />

      <g className="g" filter="url(#filter2_f_0_2333)">
        <path
          className="path-2"
          d="M270 213.02C295.975 200.441 332.609 235.988 326.048 256.496L316.556 243.842C307.926 232.339 296.284 223.444 282.917 218.142L270 213.02Z"
          fill="#FFC1A1"
        />
      </g>

      <g className="g" filter="url(#filter3_f_0_2333)" opacity="0.3">
        <path
          className="path-2"
          d="M288.047 321.953C247.852 337.812 204.102 294.336 214.219 256.328L231.914 282.87C239.662 294.493 250.39 303.822 262.976 309.882L288.047 321.953Z"
          fill="#45368D"
        />
      </g>

      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="380"
          id="filter0_f_0_2333"
          width="380"
          x="80"
          y="80"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />

          <feGaussianBlur
            className="fe-gaussian-blur"
            result="effect1_foregroundBlur_0_2333"
            stdDeviation="60"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="540"
          id="filter1_f_0_2333"
          width="540"
          x="0"
          y="0"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />

          <feGaussianBlur
            className="fe-gaussian-blur"
            result="effect1_foregroundBlur_0_2333"
            stdDeviation="100"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="106.105"
          id="filter2_f_0_2333"
          width="116.821"
          x="240"
          y="180.391"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />

          <feGaussianBlur
            className="fe-gaussian-blur"
            result="effect1_foregroundBlur_0_2333"
            stdDeviation="15"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="168.979"
          id="filter3_f_0_2333"
          width="175.305"
          x="162.742"
          y="206.328"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />

          <feGaussianBlur
            className="fe-gaussian-blur"
            result="effect1_foregroundBlur_0_2333"
            stdDeviation="25"
          />
        </filter>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_0_2333"
          x1="391.133"
          x2="252.227"
          y1="223.789"
          y2="367.07"
        >
          <stop className="stop" offset="0.118772" stopColor="#FFB590" />

          <stop className="stop" offset="0.419957" stopColor="#FF7F3E" />

          <stop className="stop" offset="1" stopColor="#45368D" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_0_2333"
          x1="391.133"
          x2="252.227"
          y1="223.789"
          y2="367.07"
        >
          <stop className="stop" offset="0.118772" stopColor="#FFB590" />

          <stop className="stop" offset="0.419957" stopColor="#FF7F3E" />

          <stop className="stop" offset="1" stopColor="#45368D" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_0_2333"
          x1="391.133"
          x2="252.227"
          y1="223.789"
          y2="367.07"
        >
          <stop className="stop" offset="0.118772" stopColor="#FFB590" />

          <stop className="stop" offset="0.419957" stopColor="#FF7F3E" />

          <stop className="stop" offset="1" stopColor="#45368D" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Comets1