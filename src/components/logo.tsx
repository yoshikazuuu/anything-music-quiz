export function AMQLogo({ size = 100, className = "", ...props }) {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1222.71 591.61"
      width={size}
      height={size * (591.61 / 1222.71)} // Maintain aspect ratio
      className={className}
      {...props}
    >
      <defs>
        <style>
          {`
            .cls-1 {
              font-family: Inter-BlackItalic, Inter;
              font-size: 500px;
              font-style: italic;
              font-variation-settings: 'wght' 900, 'slnt' -10;
              font-weight: 800;
              letter-spacing: -.07em;
            }
          `}
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <text
          className="cls-1 fill-black dark:fill-white"
          transform="translate(11.36 431.82)"
        >
          <tspan x="0" y="0">
            AMQ
          </tspan>
        </text>
      </g>
    </svg>
  );
}
