import React from "react";

import classes from "./DashApp.module.css";

type Props = {
  src: string;
};

export const DashApp: React.FunctionComponent<Props> = ({ src }) => (
  <iframe src={src} className={classes.container} />
);
