/* eslint-disable react/prop-types */
const StyledFormRow = ({ children }) => {
  return <div className="flex flex-col gap-3 px-5">{children}</div>;
};

const Label = ({ children }) => {
  return (
    <label className="font-bold" htmlFor="">
      {children}
    </label>
  );
};

const Error = ({ children }) => {
  return <span className="text-red-500">{children}</span>;
};

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
