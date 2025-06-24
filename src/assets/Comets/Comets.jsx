import React from "react";

export const Comets = ({ className }) => {
  return (
    <svg
      className={`comets ${className}`}
      fill="none"
      height="960"
      viewBox="0 0 960 960"
      width="960"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_f_0_2481)">
        <ellipse
          className="ellipse-7"
          cx="480"
          cy="480"
          fill="url(#paint0_linear_0_2481)"
          rx="80"
          ry="79.9999"
        />
      </g>

      <g className="g" filter="url(#filter1_f_0_2481)">
        <ellipse
          className="ellipse-7"
          cx="480"
          cy="480"
          fill="url(#paint1_linear_0_2481)"
          rx="80"
          ry="79.9999"
        />
      </g>

      <ellipse
        className="ellipse-7"
        cx="480"
        cy="480"
        fill="url(#paint2_linear_0_2481)"
        rx="80"
        ry="79.9999"
      />

      <g className="g" filter="url(#filter2_f_0_2481)">
        <path
          className="path-2"
          d="M480 414.879C509.686 400.504 551.553 441.129 544.054 464.566L542.736 462.809C526.642 441.354 504.93 424.767 480 414.879Z"
          fill="#FFC1A1"
        />
      </g>

      <g className="g" filter="url(#filter3_f_0_2481)" opacity="0.3">
        <path
          className="path-2"
          d="M500.625 539.375C454.688 557.5 404.688 507.812 416.25 464.375L426.327 479.491C441.825 502.736 463.28 521.394 488.452 533.514L500.625 539.375Z"
          fill="#45368D"
        />
      </g>

      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="400"
          id="filter0_f_0_2481"
          width="400"
          x="280"
          y="280"
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
            result="effect1_foregroundBlur_0_2481"
            stdDeviation="60.0001"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="960"
          id="filter1_f_0_2481"
          width="960"
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
            result="effect1_foregroundBlur_0_2481"
            stdDeviation="200"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="136.691"
          id="filter2_f_0_2481"
          width="148.938"
          x="438"
          y="369.875"
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
            result="effect1_foregroundBlur_0_2481"
            stdDeviation="21"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="278.833"
          id="filter3_f_0_2481"
          width="286.062"
          x="314.563"
          y="364.375"
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
            result="effect1_foregroundBlur_0_2481"
            stdDeviation="50.0001"
          />
        </filter>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_0_2481"
          x1="618.437"
          x2="459.687"
          y1="427.187"
          y2="590.937"
        >
          <stop className="stop" offset="0.118772" stopColor="#FFB590" />

          <stop className="stop" offset="0.419957" stopColor="#FF7F3E" />

          <stop className="stop" offset="1" stopColor="#45368D" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_0_2481"
          x1="618.437"
          x2="459.687"
          y1="427.187"
          y2="590.937"
        >
          <stop className="stop" offset="0.118772" stopColor="#FFB590" />

          <stop className="stop" offset="0.419957" stopColor="#FF7F3E" />

          <stop className="stop" offset="1" stopColor="#45368D" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_0_2481"
          x1="618.437"
          x2="459.687"
          y1="427.187"
          y2="590.937"
        >
          <stop className="stop" offset="0.118772" stopColor="#FFB590" />

          <stop className="stop" offset="0.419957" stopColor="#FF7F3E" />

          <stop className="stop" offset="1" stopColor="#45368D" />
        </linearGradient>
      </defs>
    </svg>
  );
};
