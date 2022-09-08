import { initialState } from "./store";
import { INCREMENT, DECREMENT, RESET } from "./types";

export function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
      break;
    case RESET:
      return { ...state, count: 0 };
      break;

    default:
      return state;
  }
}
