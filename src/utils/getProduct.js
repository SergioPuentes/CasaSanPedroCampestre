import getHash from "../utils/getHash"
import returnItem from "../components/item"
import entradas from "../products/entradas";
import ensaladas from "../products/ensaladas";
import carnesPescadosYPicadas from "../products/carnesPescadosYPicadas";
import platosTipicos from "../products/platosTipicos"
import pastasYRaviolis from "../products/pastasYRaviolis"
import pizzasYHamburguesas from "../products/pizzasYHamburguesas"
import menuInfantil from "../products/menuInfantil"
import postres from "../products/postres"
import bebidas from "../products/bebidas"
import bebidasCalientes from "../products/bebidasCalientes"
import nada from "../components/nada"
let title = ""
const data = ()=>{
    let hash = getHash()
    if(hash == 1){
        title = "Entradas"
        return entradas
    }else if(hash == 2){
        title = "Ensaladas"
        return ensaladas
    }else if(hash == 3){
        title = "Carnes, Pescados y Picadas"
        return carnesPescadosYPicadas
    }else if(hash == 4){
        title = "Platos Tipicos (Fines de semana)"
        return platosTipicos
    }else if(hash == 5){
        title = "Pastas y Raviolis"
        return pastasYRaviolis
    }else if(hash == 6){
        title = "Pizzas y Hamburguesas"
        return pizzasYHamburguesas
    }else if(hash == 7){
        title = "Menú Infantil"
        return menuInfantil
    }else if(hash == 8){
        title = "Postres"
        return postres
    }else if(hash == 9){
        title = "Bebidas"
        return  bebidas
    }else if(hash==10){
        title = "Bebidas Calientes"
        return bebidasCalientes
    }
}
const menu = async ()=>{
    if(await location.hash=="#specialty"){
        return nada()
    }else{
        const info = await data()
        return `<div class="item-container" id="/${location.hash}">
        <div class="close-icon"><a href="/#specialty"><img rel="icon" src="https://icon-library.com/images/svg-close-icon/svg-close-icon-4.jpg" width="20px"></a></div>
        <div>
        <h2>${title}</h2>
        <div>
        ${info.map(item =>returnItem(item))}
        </div>
        </div>
        </div>`
    }
}
export default menu;