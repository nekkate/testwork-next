import { Extension } from "typescript";

export const defaultTheme: ITheme = {
  colorBlack: "#333333",
  colorOrange: "#FF9F00",
  fontFamily: '"Inter", "Arial", sans-serif',
  colorSnow: "#FAFAFA",
  colorWhite: "#FFFFFF",
  colorHeather: "#B0BEC5",
  colorPattensBlue: "#CFD8DC",
  colorGainsboro: "#D9D9D9",
  colorWhisper2: "#E4E4E4",
  pageWidth: "1366px",
  colorWhisper: "#EBEBEB",
  fontSizeMain: "16px",
  fontSizeTitle: "36px",
  fontSizeSmall: "12px",
  lineHeight: "19px",
  lineHeightTitle: "44px",
  lineHeightSmall: "15px",
  fontWeight: 400,
  paddingBodyTop: "91px",
};

export interface ITheme {
  colorBlack: string;
  colorWhisper: string;
  colorOrange: string;
  fontFamily: string;
  colorSnow: string;
  colorWhite: string;
  colorHeather: string;
  colorPattensBlue: string;
  colorWhisper2: string;
  colorGainsboro: string;
  pageWidth: string;
  fontSizeMain: string;
  fontSizeTitle: string;
  lineHeightSmall: string;
  paddingBodyTop: string;
  lineHeight: string;
  lineHeightTitle: string;
  fontWeight: number;
  fontSizeSmall: string;
}
