function upDate() {
    // Check if the event is triggering
    console.log('Mouse over image');

    // Print information about the previewPic variable
    console.log('Alt: ' + previewPic.alt);
    console.log('Source: ' + previewPic.src);

    // Change the text of the element with the id of 'image'
    document.getElementById('image').textContent = previewPic.alt;

    // Change the background image of the element with the id of 'image'
    document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
}
