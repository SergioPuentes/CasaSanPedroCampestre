import router from "./routes/index"
import {targetElements, defaultProps} from "../src/css/animation/animations"
import initScrollReveal from "../src/css/animation/scripts/scrollReveal"
import initTiltAnimation from "../src/css/animation/scripts/tiltAnimation"
window.addEventListener("load", router)
window.addEventListener("hashchange", router)
initScrollReveal(targetElements, defaultProps);
initTiltAnimation();