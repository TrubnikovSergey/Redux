import { taskDeleted } from "./actionTypes";
import { taskUpdated } from "./actionTypes";

export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdated: {
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        ...action.payload,
      };
      return newArray;
    }
    case taskDeleted: {
      console.log(state);
      const newArray = state.filter((item) => item.id !== action.payload.id);
      console.log(newArray);
      return newArray;
    }
    default:
      return state;
  }
}
