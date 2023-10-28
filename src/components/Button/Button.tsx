import className from "classnames";
import type { Props } from "./types";
import "./Button.scss";

export default function Button({ type, children }: Props) {
  return <button className={`btn btn--${type}`}>{children}</button>;
}
