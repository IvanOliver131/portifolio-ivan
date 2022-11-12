import { ReactNode } from "react";

import { TextLabel } from "./styles";

export interface TextProps {
  children: ReactNode;
}

export function Text({ children }: TextProps) {
  return <TextLabel>{children}</TextLabel>;
}
