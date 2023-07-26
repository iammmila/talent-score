const customStyles = {
  // Style for the selected option
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#038477" : "#F2F6F6",
    color: state.isSelected ? "white" : "#038477",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#038477" : "#F2F6F6",
    color: state.isSelected ? "white" : "#038477",
  }),
};

export { customStyles };
