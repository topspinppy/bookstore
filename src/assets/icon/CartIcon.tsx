
interface ICartIcon {
  color?: string
}
function CartIcon({ color = "#000" }: ICartIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="17"
      fill="none"
      viewBox="0 0 19 17"
    >
      <path
        fill={color}
        d="M11.583 16.833a2.084 2.084 0 100-4.167 2.084 2.084 0 000 4.167zm-7.291 0a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166zM17.873 2.17a1.002 1.002 0 000-2.003h-1.199c-.94 0-1.752.652-1.956 1.568l-1.305 5.877a2.004 2.004 0 01-1.957 1.57H3.631L2.13 3.17h9.735a1.002 1.002 0 000-2.002H2.129a2.003 2.003 0 00-1.944 2.49l1.503 6.008a2.003 2.003 0 001.943 1.517h7.825a4.006 4.006 0 003.912-3.137l1.306-5.877h1.199z"
      ></path>
    </svg>
  );
}

export default CartIcon;
