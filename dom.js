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