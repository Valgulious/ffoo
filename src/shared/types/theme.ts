export type Color = {
    red: string;
    gray: string;
    black: string;
    white: string;
};

export type Transition = {
    normal: string;
}

export type FontWeight = {
    regular: string;
    medium: string;
    semiBold: string;
    bold: string;
}

export type Theme = {
    colors: Color;
    transition: Transition;
    font: {
        weight: FontWeight,
    }
}
