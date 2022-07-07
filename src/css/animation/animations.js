export const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true,
};
export const targetElements =[
    {     
        element: ".title-section",
        animation: {
            delay: 300,
            distance: "0px",
            origin: window.innerWidth > 768 ? "left" : "bottom",
        },
    },
    {
        element: ".about-wrapper__info",
        animation: {
          delay: 1000,
          origin: window.innerWidth > 768 ? "left" : "bottom",
        },
    },
    {     
        element: ".title-section-lower",
        animation: {
            delay: 1000,
            distance: "0px",
            origin: window.innerWidth > 768 ? "left" : "bottom",
        },
    }
]