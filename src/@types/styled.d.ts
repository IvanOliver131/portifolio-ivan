/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";

import { lightTheme } from "../styles/themes/light";

type ThemeType = typeof lightTheme & { theme: string };

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
