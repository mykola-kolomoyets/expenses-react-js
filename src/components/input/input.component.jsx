const Input = (props) => {
  const { label, ...other } = props;

  return (
    <div className="new-expense__control">
      <label>{label}</label>
      <input {...other} />
    </div>
  );
};

export { Input };
