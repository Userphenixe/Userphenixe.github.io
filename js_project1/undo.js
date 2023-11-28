function undo() {
    // Check if the event is triggering
    console.log('Mouse left image');

    // Reset the background image URL to the original value
    document.getElementById('image').style.backgroundImage = "url('')";

    // Reset the text of the element with the id of 'image'
    document.getElementById('image').textContent = 'Hover over an image below to display here.';
}
