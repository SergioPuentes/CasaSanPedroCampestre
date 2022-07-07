import getHash from "../utils/getHash"
import resolveRoutes from "../utils/resolveRoutes";
import menu from "../utils/getProduct"
import nada from "../components/nada";
const routes = {
    "#specialty":nada,
    '/:id': menu
};
const router = async () => {
    const content = document.getElementById("menu-selected")
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : nada;
    content.parentNode 
    content.removeChild(content.firstChild || null)
    content.innerHTML = await render()
}
export default router;