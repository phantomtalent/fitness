import React from "react";
import "../app.css";
import Tooltip from "@material-ui/core/Tooltip";

const Buttons = ({ controls, onClick }) => {
  console.warn(controls);

  return (
    <div className="Landing__form__buttons">
      {controls
        ? controls.map((button, id) => {
            const active = button.active ? "active" : "";
            return (
              <Tooltip key={button.query} title={button.query} placement="top">
                <button
                  type="button"
                  className={`Landing__form__button ${active}`}
                  onClick={onClick(button.query, id)}
                >
                  {button.icon}
                </button>
              </Tooltip>
            );
          })
        : null}
    </div>
  );
};

export default Buttons;
