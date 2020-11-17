export function reducer(state, action) {
  switch (action.type) {
    case 'SET_QUESTIONS':
     state.questions = action.payload.questions
      return {...state};

    case 'SET_SCORE':
      state.score = state.score + action.payload.score
      return {...state};
    case "SET_KEY":
      state.key = state.key + 1
      return {...state}
      case "SET_QUESTION_KEY":
        state.questionKey = state.questionKey + 1
        return {...state}

    default:
      return state;
  }
}
