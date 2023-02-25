import React from "react";

import classes from "./DashApp.module.css";

type Props = {
  src: string;
};

// TODO: Learn more about iframes and limitations of this approach (for example security)
export const DashApp: React.FunctionComponent<Props> = ({ src }) => (
  <iframe src={src} className={classes.container} />
);
