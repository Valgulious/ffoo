import { FC, PropsWithChildren } from 'react';
import { Global } from '@emotion/react';
import { globalCss } from './styles/globalCss';

export const RootLayout: FC<PropsWithChildren> = (props) => {
    const { children } = props;


    return (
        <>
            <Global styles={globalCss} />
            {children}
        </>
    );
};
