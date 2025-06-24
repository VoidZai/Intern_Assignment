import React from 'react'

const Comets2 = ({ className }) => {
  return (
    <svg
      className={`comets-2 ${className}`}
      fill="none"
      height="720"
      viewBox="0 0 720 720"
      width="720"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_f_0_2507)">
        <circle
          className="circle"
          cx="360"
          cy="360"
          fill="url(#paint0_linear_0_2507)"
          r="59.9999"
        />
      </g>

      <g className="g" filter="url(#filter1_f_0_2507)">
        <circle
          className="circle"
          cx="360"
          cy="360"
          fill="url(#paint1_linear_0_2507)"
          r="59.9999"
        />
      </g>

      <circle
        className="circle"
        cx="360"
        cy="360"
        fill="url(#paint2_linear_0_2507)"
        r="59.9999"
      />

      <g className="g" filter="url(#filter2_f_0_2507)">
        <path
          className="path-2"
          d="M360 311.159C382.264 300.378 413.664 330.847 408.04 348.425L406.864 346.923C395.022 331.811 379.643 319.845 362.084 312.081L360 311.159Z"
          fill="#FBD3CD"
        />
      </g>

      <g className="g" filter="url(#filter3_f_0_2507)" opacity="0.4">
        <path
          className="path-2"
          d="M372.516 411.094C338.063 424.687 300.563 387.422 309.235 354.844L316.793 366.181C328.415 383.615 344.507 397.608 363.386 406.698L372.516 411.094Z"
          fill="#604BC5"
        />
      </g>

      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="300"
          id="filter0_f_0_2507"
          width="300"
          x="210"
          y="210"
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
            result="effect1_foregroundBlur_0_2507"
            stdDeviation="45"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="720"
          id="filter1_f_0_2507"
          width="720"
          x="0.000213623"
          y="0.000213623"
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
            result="effect1_foregroundBlur_0_2507"
            stdDeviation="150"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="102.519"
          id="filter2_f_0_2507"
          width="111.703"
          x="328.5"
          y="277.406"
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
            result="effect1_foregroundBlur_0_2507"
            stdDeviation="15.75"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="209.124"
          id="filter3_f_0_2507"
          width="214.547"
          x="232.969"
          y="279.844"
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
            result="effect1_foregroundBlur_0_2507"
            stdDeviation="37.5"
          />
        </filter>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_0_2507"
          x1="472.734"
          x2="354.14"
          y1="306.328"
          y2="437.812"
        >
          <stop className="stop" stopColor="#FFE5D8" />

          <stop className="stop" offset="0.123865" stopColor="#FFD2BB" />

          <stop className="stop" offset="1" stopColor="#604BC5" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_0_2507"
          x1="472.734"
          x2="354.14"
          y1="306.328"
          y2="437.812"
        >
          <stop className="stop" stopColor="#FFE5D8" />

          <stop className="stop" offset="0.123865" stopColor="#FFD2BB" />

          <stop className="stop" offset="1" stopColor="#604BC5" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_0_2507"
          x1="472.734"
          x2="354.14"
          y1="306.328"
          y2="437.812"
        >
          <stop className="stop" stopColor="#FFE5D8" />

          <stop className="stop" offset="0.123865" stopColor="#FFD2BB" />

          <stop className="stop" offset="1" stopColor="#604BC5" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Comets2