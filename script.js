// Программы мобильности
const programs = [
    { id: 1, name: "Внутриуниверситетская мобильность", description: "Перемещение между кампусами НИУ ВШЭ." },
    { id: 2, name: "Международная мобильность", description: "Обучение в зарубежных университетах." },
    { id: 3, name: "Российская мобильность", description: "Обмен с другими вузами России." }
];

// Избранное (аналог корзины)
let cart = [];

// Элементы DOM
const programList = document.getElementById("program-list");
const cartList = document.getElementById("cart-list");
const checkoutBtn = document.getElementById("checkout-btn");
const orderForm = document.getElementById("order-form");

// Функция для добавления программ на страницу
function renderPrograms() {
    programs.forEach(program => {
        const programDiv = document.createElement("div");
        programDiv.className = "program";
        programDiv.innerHTML = `
            <div class="program-info">
                <h3>${program.name}</h3>
                <p>${program.description}</p>
            </div>
            <button onclick="addToCart(${program.id})">Добавить</button>
        `;
        programList.appendChild(programDiv);
    });
}

// Функция для добавления программы в избранное
function addToCart(programId) {
    const program = programs.find(p => p.id === programId);
    if (!cart.includes(program)) {
        cart.push(program);
        renderCart();
    }
}

// Функция для отображения избранного
function renderCart() {
    cartList.innerHTML = "";
    cart.forEach(program => {
        const listItem = document.createElement("li");
        listItem.textContent = program.name;
        cartList.appendChild(listItem);
    });
    checkoutBtn.disabled = cart.length === 0;
    
    // Обновляем скрытый параметр для отправки
    if (cart.length > 0) {
        orderForm.querySelector('input[name="q"]').value = "search " + cart.map(program => program.name).join(', ');
    }
}

// Инициализация
renderPrograms();
