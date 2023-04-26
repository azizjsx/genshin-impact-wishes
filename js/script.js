const loader = document.getElementById('loader');
const main = document.getElementById('main');
//button div opener
const wish = document.getElementById('wish');
const inventory = document.getElementById('inventory');
const shop = document.getElementById('shop');
const settings = document.getElementById('settings');
//div related to buttons
const wish_div = document.getElementById('wish-div');
const inventory_div = document.getElementById('inventory-div');
const shop_div = document.getElementById('shop-div');
const settings_div = document.getElementById('settings-div');
//active div tracker
const active_div = localStorage.getItem('active_div');

paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};
Pace.on('start', function() {
    if(active_div === null) {
        localStorage.setItem('active_div', 'wish');
    }
})
Pace.on('done', function() {
    main.removeAttribute('style');
    main.style.pointerEvents = 'none';
    main.classList.add('fade-in');
    loader.classList.add('fade-out');
    setTimeout(() => {
        if(active_div === 'wish') {
            wish_div.style.display = 'block';
        }
        loader.remove();
        main.removeAttribute('style');
    }, 2000);
});
wish.addEventListener('click', function() {
    wish_div.style.display = 'block';
    inventory_div.style.display = 'none';
    shop_div.style.display = 'none';
    settings_div.style.display = 'none';
});
inventory.addEventListener('click', function() {
    wish_div.style.display = 'none';
    inventory_div.style.display = 'block';
    shop_div.style.display = 'none';
    settings_div.style.display = 'none';
});
shop.addEventListener('click', function() {
    wish_div.style.display = 'none';
    inventory_div.style.display = 'none';
    shop_div.style.display = 'block';
    settings_div.style.display = 'none';
});
settings.addEventListener('click', function() {
    wish_div.style.display = 'none';
    inventory_div.style.display = 'none';
    shop_div.style.display = 'none';
    settings_div.style.display = 'block';
});
