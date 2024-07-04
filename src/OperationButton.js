import { ACTIONS } from "./App"; // Import action types from App

// Define and export the OperationButton component
export default function OperationButton({ dispatch, operation }) {
  return (
    // Render a button for the operation
    <button
      // On button click, dispatch an action to choose the operation
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {/* Display the operation symbol on the button */}
      {operation}
    </button>
  );
}
