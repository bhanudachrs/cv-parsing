import { createGlobalStyle } from "styled-components";

export interface Colors {
  themeBackground: string;
	white: string;
	green: string;
	base: string;
	black: string;
	yellow: string;
	neon: string;
	buttonColor: string;
	cardBackground: string;
	whiteSmoke: string;
	gray: string;
	InputBackground: string;
}


export const colors: Colors = {
  themeBackground: '#1B2732',
	white: '#ffffff',
	neon: '#00D7E7',
	green: '#01D14E',
	base: '#313131',
	black: '#2F2F2F',
	yellow: '#FFF300',
	buttonColor: '#F3B723',
	cardBackground: '#2F445A',
	whiteSmoke: '#F5F5F5',
	gray: '#696969',
	InputBackground: '#1B2732',
};

export interface ThemeStarter {
  [propName: string]: string | undefined;
	themeBackground: string;
	white: string;
	green: string;
	base: string;
	black: string;
	yellow: string;
	neon: string;
	buttonColor: string;
	cardBackground: string;
	whiteSmoke: string;
	gray: string;
	InputBackground: string;
}

export const theme: ThemeStarter = {
  themeBackground: colors.themeBackground,
	white: colors.white,
	green: colors.green,
	base: colors.base,
	black: colors.black,
	yellow: colors.yellow,
	neon: colors.neon,
	buttonColor: colors.buttonColor,
	cardBackground: colors.cardBackground,
	whiteSmoke: colors.whiteSmoke,
	gray: colors.gray,
	InputBackground: colors.InputBackground,
};

export interface ScreenSizes {
  mediaXS: number;
	mediaS: number;
	mediaM: number;
	mediaL: number;
	mediaXL: number;
	mediaXXL: number;
	mediaLX: number;
	mediaLXX: number;
}
export const screenSizes: ScreenSizes = {
  mediaXS: 380,
	mediaS: 640,
	mediaM: 800,
	mediaL: 1024,
	mediaXL: 1280,
	mediaXXL: 1480,
	mediaLX: 1800,
	mediaLXX: 2000,
};

export const GlobalStyle = createGlobalStyle`

body {
  background: ${colors.white} !important;
}

@font-face {
  font-family: Bold;
}
@font-face {
  font-family: Light; 
}
@font-face {
  font-family: Medium;
}
@font-face {
  font-family: Regular;
}
@font-face {
  font-family: Extended;
}

@font-face {
  font-family: Extended;
}

`;




