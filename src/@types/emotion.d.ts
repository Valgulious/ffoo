import type { Theme as ThemeType } from 'shared/types/theme.ts';

declare module '@emotion/react' {
    export interface Theme extends ThemeType {}
}
