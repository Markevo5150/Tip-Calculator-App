import "./Button.scss";
type Types = "VeryDarkCyan" | "StrongCyan";

interface Props {
  type: Types;
  children: string;
}

export interface Props {
  type?: Types;
  children: string;
}
