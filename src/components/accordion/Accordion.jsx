import { useState } from "react";
import data from "./data.js";
import "bootstrap/dist/css/bootstrap.min.css";

// Define the Accordion component
export default function Accordian() {
  const [selected, setSelected] = useState(null); // State to keep track of the selected item in single selection mode
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); // State to enable/disable multi-selection mode
  const [multiple, setMultiple] = useState([]); // State to keep track of selected items in multi-selection mode

  // Function to handle single item selection
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId); // Toggle selection: deselect if already selected, otherwise select the item
  }

  // Function to handle multiple item selection
  function handleMultipleSelection(getCurrentId) {
    let cpyMultiple = [...multiple]; // Create a copy of the current multiple selection state
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId); // Find the index of the current item in the multiple selection array

    if (findIndexOfCurrentId === -1) {
      // If the item is not already selected
      cpyMultiple.push(getCurrentId); // Add the item to the selection array
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1); // Remove the item from the selection array
    }

    setMultiple(cpyMultiple); // Update the state with the new selection array
  }

  return (
    <div className="container bg-dark p-3 rounded mt-5">
      {" "}
      {/* Bootstrap container with margin-top */}
      <h1 className="text-primary">Accordion</h1>{" "}
      {/* Heading with Bootstrap text-primary class */}
      <button
        className="btn btn-primary mb-3" // Bootstrap button with margin-bottom
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        Enable Multi Selection
      </button>
      <div className="accordion">
        {" "}
        {/* Bootstrap accordion */}
        {data && data.length > 0 ? ( // Check if there is data to display
          data.map(
            (
              dataItem,
              index // Map through the data array to render each item
            ) => (
              <div className="card" key={index}>
                {" "}
                {/* Bootstrap card */}
                <div
                  onClick={
                    enableMultiSelection // Check if multi-selection mode is enabled
                      ? () => handleMultipleSelection(dataItem.id) // Handle multiple selection
                      : () => handleSingleSelection(dataItem.id) // Handle single selection
                  }
                  className="card-header" // Bootstrap card header
                  style={{ cursor: "pointer" }} // Add cursor pointer for better UX
                >
                  <h3 className="mb-0">{dataItem.title}</h3>{" "}
                  {/* Item title with no margin-bottom */}
                  <span>+</span> {/* Plus icon */}
                </div>
                {enableMultiSelection // Check if multi-selection mode is enabled
                  ? multiple.indexOf(dataItem.id) !== -1 && ( // If item is selected in multi-selection mode, show content
                      <div className="card-body">
                        {" "}
                        {/* Bootstrap card body */}
                        {dataItem.content} {/* Item content */}
                      </div>
                    )
                  : selected === dataItem.id && ( // If item is selected in single-selection mode, show content
                      <div className="card-body">
                        {" "}
                        {/* Bootstrap card body */}
                        {dataItem.content} {/* Item content */}
                      </div>
                    )}
              </div>
            )
          )
        ) : (
          <h1 className="text-light">No data found.</h1> // Message if no data is available
        )}
      </div>
    </div>
  );
}
