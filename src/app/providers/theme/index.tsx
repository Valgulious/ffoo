import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';
import { theme } from 'shared/styles/theme';

export const ThemeProvider: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
