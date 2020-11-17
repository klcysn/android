export function reducer(state, action) {
  switch (action.type) {
    case 'SET_QUESTIONS':
     state.questions = action.payload.questions
      return {...state};

    case 'SET_SCORE':
      state.score = state.score + action.payload.score
      return {...state};

    default:
      return state;
  }
}
