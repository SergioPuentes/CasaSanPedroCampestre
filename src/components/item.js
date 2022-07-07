const returnItem = (data)=>{
    return `<div class="item-info">
    <h3>${data.name}</h3>
    <p>${data.ingredients}</p>
    <span>$ ${data.price}</span>
</div>`
}
export default returnItem;