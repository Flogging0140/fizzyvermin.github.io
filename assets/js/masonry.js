

$(document).ready(function () {
  // Init Masonry
  var $grid = $('.grid').masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: '.grid-item',
  });
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });
});

// // Custom masonary
// document.addEventListener('DOMContentLoaded', () => {
//   var elem = document.querySelector('.grid');
//   var msnry = new Masonry(elem, {
//     // options
//     itemSelector: '.grid-item',
//     columnWidth: 200
//   });

//   // element argument can be a selector string
//   //   for an individual element
//   var msnry = new Masonry('.grid', {
//     // options
//   });
// });