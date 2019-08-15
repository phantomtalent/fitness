import { PRESS_CONTROL_BUTTON } from "../../constants";

// import React from "react"; // JSX needs React anyways
// import BarIcon from "@material-ui/icons/LocalBar";
// import HotelIcon from "@material-ui/icons/Hotel";
// import MallIcon from "@material-ui/icons/LocalMall";
// import DiningIcon from "@material-ui/icons/LocalDining";
// import TerrainIcon from "@material-ui/icons/Terrain";

const buttonControl = [];

export const controls = (state = buttonControl, action) => {
  switch (action.type) {
    case PRESS_CONTROL_BUTTON: {
      let newState = state.map(record => ({
        active: false,
        query: record.query,
        icon: record.icon
      }));
      newState[action.payload].active = true;
      return newState;
    }
    default: {
      return state;
    }
  }
};
