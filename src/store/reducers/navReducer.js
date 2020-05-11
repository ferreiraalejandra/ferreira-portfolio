
const initialState = {
  currentTab: 'home'
}

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE TAB":
      return {currentTab: action.tabName}
    default:
      return state
  }
};

export default navReducer;