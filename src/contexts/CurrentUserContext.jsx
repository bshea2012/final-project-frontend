import React from "react";

export const CurrentUserContext = React.createContext({
  userData: { id: "", email: "", name: "" },
});
