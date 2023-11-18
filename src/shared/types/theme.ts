export type Color = {
    neutral0: string;
    neutral200: string;
    neutral400: string;
    neutral600: string;
    neutral900: string;
    red200: string;
    red900: string;
};

export type ColorKey = keyof Color;

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
