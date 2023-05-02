
const STATUS_MAP = {
  shelf: {
      color: 'green',
      canReserve: true,
      canCheckout: true,
      canCheckIn: false,
  },
  reserved: {
      color: 'blue',
      canReserve: false,
      canCheckout: true,
      canCheckIn: false,
  },
  overdue: {
      color: 'red',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
  },
  checkedOut: {
      color: 'orange',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
  }
}

// Color variables

const shelfColor = STATUS_MAP.shelf.color
const reservedColor = STATUS_MAP.reserved.color
const overdueColor = STATUS_MAP.overdue.color
const checkedOutColor = STATUS_MAP.checkedOut.color

// book 1 status text color
{
    const _status= document.querySelector('#book1 span')

    let bookOneStatusColor = _status.style 
    bookOneStatusColor.color=overdueColor   
}

{
    const _status= document.querySelector('#book2 span')

    let bookTwoStatusColor = _status.style
    bookTwoStatusColor.color= reservedColor 
}

{
    const _status= document.querySelector('#book3 span')
    
    let bookThreeStatusColor = _status.style
    bookThreeStatusColor.color=shelfColor
}





// Get all book elements
const bookElements = document.querySelectorAll('div[id^="book"]');

// Loop through each book element
bookElements.forEach((bookElement) => {
  // Get the status element and status text
  const statusElement = bookElement.querySelector('.status');
  const statusText = statusElement.textContent.trim().toLowerCase(); ///////////////

  // Get the buttons
  const reserveButton = bookElement.querySelector('.reserve');
  const checkoutButton = bookElement.querySelector('.checkout');
  const checkinButton = bookElement.querySelector('.checkin');

  // Get the status properties from the STATUS_MAP object
  const statusProperties = STATUS_MAP[statusText];

  // Update button properties based on status properties
  reserveButton.disabled = !statusProperties.canReserve;
  checkoutButton.disabled = !statusProperties.canCheckout;
  checkinButton.disabled = !statusProperties.canCheckIn;

  // Set button colors to black and grayscale
  reserveButton.disabled? reserveButton.style.color = 'grey': reserveButton.style.color = 'black';
  checkoutButton.disabled? checkoutButton.style.color = 'grey': checkoutButton.style.color = 'black';
  checkinButton.disabled? checkinButton.style.color = 'grey': checkinButton.style.color = 'black';
 
});

