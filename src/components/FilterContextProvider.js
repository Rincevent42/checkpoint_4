import React from 'react';
import FilterContext from './FilterContext';

class FilterContextProvider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: ''
    };
  }

  updateFilter = (filter) => {
    this.setState({ filter });
  };
  

  render () {
    return (
      <FilterContext.Provider value={{
        ...this.state,
        updateFilter: this.updateFilter,
      }}
      >
        {this.props.children}
      </FilterContext.Provider>
    );
  }
}

export default FilterContextProvider;
