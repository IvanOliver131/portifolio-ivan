import { InputHTMLAttributes, ReactNode } from "react";

import { IconContainer, InputContainer, RootContainer } from "./styles";

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

export interface TextInputIconProps {
  children: ReactNode;
}

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return <RootContainer>{props.children}</RootContainer>;
}

function TextInputIcon(props: TextInputIconProps) {
  return <IconContainer>{props.children}</IconContainer>;
}

function TextInputInput(props: TextInputInputProps) {
  return <InputContainer {...props} />;
}

TextInputInput.displayName = "TextInput.Input";
TextInputIcon.displayName = "TextInput.Icon";
TextInputRoot.displayName = "TextInput.Root";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
};
