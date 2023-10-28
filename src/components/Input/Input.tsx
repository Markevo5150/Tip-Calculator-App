import classNames from "classnames";
import type { Props } from "./types";
import "./Button.scss";

export function Button({ type = "red" }: Props) {
  return (
    <button
      className={classNames("btn", {
        [`btn--${type}`]: type,
      })}
    >
      <div className="skill">
        <div className="left">
          <img className="icon" src="/assets/images/icon-reaction.svg" alt="" />
          <span className="title"></span>
        </div>
        <div className="right">
          <span className="points">80</span>
          <span className="fraction">/100</span>
        </div>
      </div>
    </button>
  );
}
