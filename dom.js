document.addEventListener('DOMContentLoaded', () => {
    const updateTotalPrice = () => {
        let total = 0;
        document.querySelectorAll('.card').forEach(card => {
            const quantity = parseInt(card.querySelector('.quantity').textContent);
            const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('$', ''));
            total += quantity * unitPrice;
        });
        document.querySelector('.total').textContent = `${total} $`;
    };

    document.querySelectorAll('.fa-plus-circle').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const quantityElement = card.querySelector('.quantity');
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotalPrice();
        });
    });