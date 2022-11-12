import { TextCode } from "./styles";

interface TextCodeLanguageProps {
  text: string;
}

function TextCodeLanguage({ text }: TextCodeLanguageProps) {
  return <TextCode>{text ? text : "Undefined"}</TextCode>;
}

export { TextCodeLanguage };
