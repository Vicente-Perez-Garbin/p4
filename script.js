const STORAGE_KEY = "night-cart-items";
const PREFS_KEY = "night-cart-preferences";
const DISCOUNT_COUPON = "ATILANOPONMEUN10";

const PRODUCTS = [
  {
    id: "azucar-salsa",
    name: "Salsa al Ritmo del famosísimo y mundialmente conocido Perro Español",
    venue: "Azucar · Lunes",
    price: 12,
    description: "Entrada para bailar salsa con actitud patriotica, pasos elegantes y energia de perro espanol en la pista.",
    image: "assets/media/imagen-azucar.jpeg"
  },
  {
    id: "maracas-hawaianos",
    name: "Pack Maracas Tropical + Macarena Trajeados",
    venue: "Maracas · Martes",
    price: 28,
    description: "Experiencia tropical en playa con show de baile de la macarena en traje para tu mesa.",
    image: "assets/media/imagen-maracas.jpeg"
  },
  {
    id: "coconut-bonocopas",
    name: "Entrada Festival Coconut: Batalla FMS",
    venue: "Coconut · Miercoles",
    price: 34,
    description: "Entrada para escenario estilo festival con batalla improvisada de rap tipo FMS y patrocinio de JD.",
    image: "assets/media/imagen-coconut.jpeg"
  },
  {
    id: "kharma-olivo",
    name: "Experiencia Kharma Ramo de Olivo",
    venue: "Kharma (Jaen) · Jueves",
    price: 22,
    description: "Servicio tematico de animacion andaluza con performance de ramo de olivo.",
    image: "assets/media/imagen-kharma.jpeg"
  },
  {
    id: "code-vip-ibuprofeno",
    name: "Mesa Techno + Kit Bienestar",
    venue: "CODE/Fabrik · Viernes",
    price: 180,
    description: "Reservado con botella y kit de bienestar en mesa (agua fria y ibuprofeno).",
    image: "assets/media/imagen-fabrik.jpeg"
  },
  {
    id: "barcelo-reservado",
    name: "Entrada Reggaeton Classics con Reservado y Botella",
    venue: "Barcelo · Sabado",
    price: 160,
    description: "Pack para 4 personas con reservado, acceso VIP y botella incluida.",
    image: "assets/media/imagen-barcelo.jpeg"
  },
  {
    id: "jowke-show",
    name: "Resaca Pool Party Domingo",
    venue: "Jowke · Domingo",
    price: 45,
    description: "Pool party de domingo para curar la resaca con agua, musica y ambiente de terraza.",
    image: "assets/media/imagen-jowke.jpeg"
  }
];

function getCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function formatPrice(value) {
  return `${value.toFixed(2).replace(".", ",")} EUR`;
}

function getPreferences() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    return raw ? JSON.parse(raw) : { coupon: "", access: "lista" };
  } catch {
    return { coupon: "", access: "lista" };
  }
}

function savePreferences(preferences) {
  localStorage.setItem(PREFS_KEY, JSON.stringify(preferences));
}

function normalizeCoupon(value) {
  return value.trim().toUpperCase();
}

function getDiscountPercent(couponValue) {
  return normalizeCoupon(couponValue) === DISCOUNT_COUPON ? 0.5 : 0;
}

function addToCart(productId) {
  const cart = getCart();
  const item = cart.find((entry) => entry.id === productId);

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart(cart);
}

function removeFromCart(productId) {
  const cart = getCart();
  const item = cart.find((entry) => entry.id === productId);

  if (!item) {
    return;
  }

  item.quantity -= 1;

  const filtered = cart.filter((entry) => entry.quantity > 0);
  saveCart(filtered);
}

function buildProductsPage() {
  const tableBody = document.getElementById("products-table-body");
  const productsGrid = document.getElementById("products-grid");
  const feedback = document.getElementById("cart-feedback");

  if (!tableBody || !productsGrid) {
    return;
  }

  PRODUCTS.forEach((product) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
      <td>${product.name}</td>
      <td>${product.venue}</td>
      <td>${formatPrice(product.price)}</td>
      <td><button class="btn btn-small" data-add="${product.id}">Anadir</button></td>
    `;
    tableBody.appendChild(tableRow);

    const card = document.createElement("article");
    card.className = "card product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p><strong>${product.venue}</strong></p>
      <p>${product.description}</p>
      <p><strong>${formatPrice(product.price)}</strong></p>
      <button class="btn" data-add="${product.id}">Anadir al carrito</button>
    `;
    productsGrid.appendChild(card);
  });

  document.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-add");
      addToCart(id);
      if (feedback) {
        const product = PRODUCTS.find((entry) => entry.id === id);
        feedback.textContent = `${product.name} anadido al carrito.`;
      }
    });
  });
}

function buildCartPage() {
  const cartBody = document.getElementById("cart-body");
  const cartSubtotal = document.getElementById("cart-subtotal");
  const cartDiscount = document.getElementById("cart-discount");
  const cartTotal = document.getElementById("cart-total");
  const cartEmpty = document.getElementById("cart-empty");
  const form = document.getElementById("checkout-preferences-form");
  const couponInput = document.getElementById("cupon");
  const couponFeedback = document.getElementById("coupon-feedback");

  if (!cartBody || !cartSubtotal || !cartDiscount || !cartTotal || !cartEmpty || !form || !couponInput || !couponFeedback) {
    return;
  }

  const preferences = getPreferences();
  couponInput.value = preferences.coupon || "";

  const renderCart = () => {
    cartBody.innerHTML = "";

    const cart = getCart();
    let subtotal = 0;

    cart.forEach((entry) => {
      const product = PRODUCTS.find((item) => item.id === entry.id);

      if (!product) {
        return;
      }

      const rowSubtotal = product.price * entry.quantity;
      subtotal += rowSubtotal;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${product.name}</td>
        <td>${entry.quantity}</td>
        <td>${formatPrice(product.price)}</td>
        <td>${formatPrice(rowSubtotal)}</td>
        <td><button class="btn btn-small" data-remove="${product.id}">Eliminar</button></td>
      `;
      cartBody.appendChild(row);
    });

    const discountPercent = getDiscountPercent(couponInput.value);
    const discountAmount = subtotal * discountPercent;
    const total = subtotal - discountAmount;

    cartSubtotal.textContent = formatPrice(subtotal);
    cartDiscount.textContent = formatPrice(discountAmount);
    cartTotal.textContent = formatPrice(total);
    cartEmpty.style.display = cartBody.children.length === 0 ? "block" : "none";

    document.querySelectorAll("[data-remove]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.getAttribute("data-remove");
        removeFromCart(id);
        renderCart();
      });
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const couponValue = couponInput.value.trim();
    savePreferences({ coupon: couponValue });

    if (getDiscountPercent(couponValue) > 0) {
      couponFeedback.textContent = "Cupón aplicado correctamente: 50% de descuento.";
    } else if (couponValue.length > 0) {
      couponFeedback.textContent = "Cupón no válido.";
    } else {
      couponFeedback.textContent = "Preferencias guardadas.";
    }

    renderCart();
  });

  couponInput.addEventListener("change", () => {
    const couponValue = couponInput.value.trim();
    savePreferences({ coupon: couponValue });
    renderCart();
  });

  renderCart();
}

function buildContactPage() {
  const productoSelect = document.getElementById("producto");
  if (productoSelect) {
    PRODUCTS.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productoSelect.appendChild(option);
    });
  }

  const esProductoCheckbox = document.getElementById("es-producto");

  function updateProductSelect() {
    if (esProductoCheckbox.checked) {
      productoSelect.disabled = false;
    } else {
      productoSelect.disabled = true;
    }
  }

  if (esProductoCheckbox) {
    esProductoCheckbox.addEventListener("change", updateProductSelect);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");

  if (page === "productos") {
    buildProductsPage();
  }

  if (page === "carrito") {
    buildCartPage();
  }

  if (page === "contacto") {
    buildContactPage();
  }
});
