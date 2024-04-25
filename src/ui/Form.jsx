/* eslint-disable react/prop-types */
function Form({ children }) {
  return (
    <form
      className="px-8 py-16 flex flex-col gap-4 bg-primary rounded-md w-[80%] sm:w-[30%] "
      action=""
    >
      {children}
    </form>
  );
}

export default Form;
