function addToOrder(item, price) {
    alert(`${item} has been added to your order. Price: $${price}`);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});