const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (img, title, price) => {
    return `<div class="card">
    <div class="card__photo"><img src="" alt="card"></div>
    <div class="card__text-title">${title}</div>
    <div class="card__text-price">${price}</div>
    </div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price));
    document.querySelector('.card').innerHTML = goodsList.join(' ');
}

renderGoodsList(goods);