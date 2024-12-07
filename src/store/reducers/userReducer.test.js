import userReducer from "./userReducer";
import { FETCH_USERS } from "../types/userTypes.js";

describe("userReducer", () => {
  const initialState = {
    users: [],
  };

  it("Тест исходного состояния", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("Тест FETCH_USERS", () => {
    const action = {
      type: FETCH_USERS,
      payload: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
      ],
    };
    const expectedState = {
      users: action.payload,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it("Тест возвращения исходного состояния при неизвестном значении", () => {
    const action = { type: "UNKNOWN_ACTION" };
    expect(userReducer(initialState, action)).toEqual(initialState);
  });
});
