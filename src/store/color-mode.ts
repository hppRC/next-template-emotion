import { atom } from 'recoil';

export type ColorMode = 'Light' | 'Dark';

const initialColorMode: ColorMode = `Light`;

export const colorModeState = atom<ColorMode>({
  key: `color-mode`,
  default: initialColorMode,
});
