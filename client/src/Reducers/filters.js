// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'dateAdded',
  startYear:1,
  endYear:1000000
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_RATING':
      return {
        ...state,
        sortBy: 'rating'
      };
    case 'SORT_BY_DATE_ADDED':
      return {
        ...state,
        sortBy: 'dateAdded'
      };
    case 'SET_START_YEAR':
      return {
        ...state,
        startYear: action.startYear
      };
    case 'SET_END_YEAR':
      return {
        ...state,
        endYear: action.endYear
      };
    default:
      return state;
  }
};
