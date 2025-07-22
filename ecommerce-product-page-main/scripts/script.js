document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cartModal');
    const addToCartBtn = document.querySelector('.add-to-cart');
    const decreaseBtn = document.querySelector('.decrease');
    const quantityValue = document.querySelector('.quantity-value');
    const increaseBtn = document.querySelector('.increase');
    const cartQuantity = document.getElementById('cartQuantity');
    const cartTotal = document.getElementById('cartTotal');
    const cartItem = document.getElementById('cartItem');
    const cartStatus = document.getElementById('cartStatus');
    const checkoutBtn = document.getElementById('checkoutBtn');
    let quantity = 0;

    cartIcon.addEventListener('click', () => {
        cartModal.classList.toggle('show');
    });

    addToCartBtn.addEventListener('click', () => {
        if (quantity > 0) {
            cartStatus.style.display = 'none';
            cartItem.style.display = 'flex';
            checkoutBtn.style.display = 'block';
            cartQuantity.textContent = quantity;
            cartTotal.textContent = (125.00 * quantity).toFixed(2);
        }
    });

    decreaseBtn.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantityValue.textContent = quantity;
            if (quantity === 0) {
                cartItem.style.display = 'none';
                cartStatus.style.display = 'block';
                checkoutBtn.style.display = 'none';
            } else {
                cartQuantity.textContent = quantity;
                cartTotal.textContent = (125.00 * quantity).toFixed(2);
            }
        }
    });

    increaseBtn.addEventListener('click', () => {
        quantity++;
        quantityValue.textContent = quantity;
    });

    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainSneaker');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const images = ['images/products/sneaker1.jpg', 'images/products/sneaker2.jpg', 'images/products/sneaker3.jpg', 'images/products/sneaker4.jpg'];
    let currentImageIndex = 0;

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentImageIndex = index;
            mainImage.src = images[currentImageIndex];
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        mainImage.src = images[currentImageIndex];
        updateThumbnails();
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        mainImage.src = images[currentImageIndex];
        updateThumbnails();
    });

    function updateThumbnails() {
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnails[currentImageIndex].classList.add('active');
    }

    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
        if (cartModal.classList.contains('show')) {
            if (e.key === 'Escape') cartModal.classList.remove('show');
        }
    });
});