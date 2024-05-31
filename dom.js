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
    document.querySelectorAll('.fa-minus-circle').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const quantityElement = card.querySelector('.quantity');
            if (parseInt(quantityElement.textContent) > 0) {
                quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
                updateTotalPrice();
            }
        });
    });
    document.querySelectorAll('.fa-trash-alt').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card-body');
            card.remove();
            updateTotalPrice();
        });
    });

    document.querySelectorAll('.fa-heart').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });

    updateTotalPrice();
});