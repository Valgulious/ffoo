import type { Theme as ThemeType } from 'shared/types/theme';

declare module '@emotion/react' {
    export interface Theme extends ThemeType {}
}
