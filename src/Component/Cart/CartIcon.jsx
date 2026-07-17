
function CartIcon({ itemCount, isCartHovered = false }) {
  
  const isFilled = itemCount > 0;

  // Border color
  const strokeColor = isCartHovered
    ? "#FC8019"
    : isFilled
    ? "#16a34a"
    : "#222";

  // Cart background color
  const fillColor = isCartHovered
    ? "#FC8019"
    : isFilled
    ? "#16a34a"
    : "white";

  // Number color
  const textColor = isCartHovered
    ? "white"
    : isFilled
    ? "white"
    : "#222";

  return (
    <div className="relative w-8 h-8 flex items-center justify-center">
      <svg
        width="26"
        height="27"
        viewBox="0 0 26 27"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cart Body */}
        <path
          d="M5 3 H21 L22 20 H4 Z"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Cart Number */}
        <text
          x="13"
          y="15"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={textColor}
        >
          {itemCount}
        </text>
      </svg>
    </div>
  );
}

export default CartIcon;