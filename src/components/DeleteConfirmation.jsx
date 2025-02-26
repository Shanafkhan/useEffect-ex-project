import ProgressBar from "./ProgressBar";
import { useEffect } from "react";
const TIME = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("timer set");
    const time = setTimeout(() => {
      onConfirm();
    }, TIME);
    /**
     * The reason we use this clean-up function is once the timer is set it never goes off, even if we click no
     * so when we click no, before the DOM is removed the clean-up function executes and inside the clean-up function
     * we are removing the timer
     */
    return () => {
      //This is a clean up function that runs before this component is removed from the dom
      clearTimeout(time);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button
          onClick={() => {
            console.log("delete");
            onCancel();
          }}
          className="button-text"
        >
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar time={TIME} />
    </div>
  );
}
