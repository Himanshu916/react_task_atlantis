/* eslint-disable react/prop-types */

const variations = {
  primary: {
    color: "text-primary",
    backgroundColor: "bg-secondary2",
  },
  secondary: {
    color: "text-primary",
    backgroundColor: "bg-secondary2",
  },
};

function Button({ children, variation = "primary", ...props }) {
  return (
    <button
      {...props}
      className={`${variations[variation].color}   ${variations[variation].backgroundColor}  px-3 py-3 rounded-md mt-3 `}
    >
      {children}
    </button>
  );
}

export default Button;
