const Button = ({ ...rest }) => {
  return (
    <>
      <button
        type="button"
        className="w-full flex py-10px px-20px rounded-4"
        {...rest}
      />
    </>
  );
};

export default Button;
