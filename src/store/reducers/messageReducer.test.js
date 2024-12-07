import messageReducer from "./messageReducer"; // Путь к вашему редьюсеру
import { FETCH_MESSAGES, SEND_MESSAGE } from "../types/messageTypes.js";

describe("messageReducer", () => {
  const initialMessageState = {
    messages: [],
  };

  it("should return the initial state", () => {
    expect(messageReducer(undefined, {})).toEqual(initialMessageState);
  });

  it("should handle FETCH_MESSAGES", () => {
    const action = {
      type: FETCH_MESSAGES,
      payload: [
        { id: 1, text: "Hello" },
        { id: 2, text: "World" },
      ],
    };
    const expectedState = {
      messages: action.payload,
    };
    expect(messageReducer(initialMessageState, action)).toEqual(expectedState);
  });

  it("should handle SEND_MESSAGE", () => {
    const initialState = {
      messages: [{ id: 1, text: "Hello" }],
    };
    const action = {
      type: SEND_MESSAGE,
      payload: { id: 2, text: "World" },
    };
    const expectedState = {
      messages: [...initialState.messages, action.payload],
    };
    expect(messageReducer(initialState, action)).toEqual(expectedState);
  });

  it("should return the current state for unknown actions", () => {
    const action = { type: "UNKNOWN_ACTION" };
    expect(messageReducer(initialMessageState, action)).toEqual(
      initialMessageState,
    );
  });
});
