$(document).ready(() => {
  let total = 0;
  
  $('#menu img').each( (index, img) => {
    const oldUrl = img.src;
    const newUrl = img.id;

    const rolloverImage = new Image();
    rolloverImage.src = newUrl;

    $(img).hover(
      () => img.src = newUrl,
      () => img.src = oldUrl,

    )
  })
  
  $('#menu img').click( e => {
    e.preventDefault();
    const itemName = e.target.alt;
    console.log(itemName);
    let price = 0;
    switch (itemName) {
      case 'espresso':
        price = 1.95;
        break;
      case 'latte':
        price = 2.95;
        break;
      case 'cappuccino':
        price = 3.45;
        break;
      case 'coffee':
        price = 1.75;
        break;
      case 'biscotti':
        price = 1.95;
        break;
      case 'scone':
        price = 2.95;
        break;
    }
    
    total += price;
    $('section select').append(`<option>${itemName} - $${price.toFixed(2)}</option>`);
    $('#total').text(`Total: $${total.toFixed(2)}`);
  })

  $('#place_order').click( () => {
    $('#order_form').submit();
  })

  $('#clear_order').click( () => {
    $('#order').empty();
    $('#total').text('');
    total = 0;
  })
});