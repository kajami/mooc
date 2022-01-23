const FilterInput = (props) => {
    return (
      <div>
        filter shown with:{" "}
        <input value={props.filterText} onChange={props.handleFilterName} />
      </div>
    );
  };

  export default FilterInput;