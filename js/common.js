
/* Filter */
// var properties = [
//     'name',
//     'mobile',
//     'email',
//     'date',
//     'status',
//     'type',
// ];

// $.each(properties, function (i, val) {

//     var orderClass = '';

//     $(document).on('click', "#" + val, function (e) {
//         e.preventDefault();
//         $('.filter__link.filter__link--active').not(this).removeClass('filter__link--active');
//         $(this).toggleClass('filter__link--active');
//         $('.filter__link').removeClass('asc desc');

//         if (orderClass == 'desc' || orderClass == '') {
//             $(this).addClass('asc');
//             orderClass = 'asc';
//         } else {
//             $(this).addClass('desc');
//             orderClass = 'desc';
//         }

//         var parent = $(this).closest('.header__item');
//         var index = $(".header__item").index(parent);
//         var $table = $('.table-content');
//         var rows = $table.find('.table-row').get();
//         var isSelected = $(this).hasClass('filter__link--active');
//         var isNumber = $(this).hasClass('filter__link--number');

//         rows.sort(function (a, b) {

//             var x = $(a).find('.table-data').eq(index).text();
//             var y = $(b).find('.table-data').eq(index).text();
//             //console.log(index); 
//             /* if (isNumber == true) {

//                 if (isSelected) {
//                     alert('hello');
//                     return x - y;

//                 } else {
//                     alert('bello');
//                     return y - x;

//                 }

//             } else { */
//             if (isSelected) {
//                 if (x < y) return -1;
//                 if (x > y) return 1;

//                 return 0;
//                 alert('zeo');
//             } else {
//                 if (x > y) return -1;
//                 if (x < y) return 1;

//                 return 0;
//                 alert('vro');

//             }
//             //}
//         });

//         $.each(rows, function (index, row) {
//             $table.append(row);
//         });

//         return false;
//     });



// });


// $(document).on('click', ".create-ques", function (e) {
//     $('body').addClass('openside');
//     $('.side-screen').addClass('out');
//     $('.backdrop').addClass('show');
// });

// $(document).on('click', ".side-screen .side-bar--title,.backdrop", function (e) {
//     $('.side-screen').removeClass('out');
//     $('.backdrop').removeClass('show');
// });

// $(document).on('click', ".copy-url", function (e) {
//     copyT();
//     // $(this).html("<i><img src='img/tick.svg'></i> Copied");
//     e.preventDefault();
// });

// $(document).on('click', ".create-link", function (e) {
//     $(this).removeClass('create-link');
//     $(this).addClass('creating-link');
//     $(this).html($('<span>' + 'Creating link...' + '</span><em>' + 'Creating link...' + '</em>'));
//     e.preventDefault();

//     $('.links').removeClass('none');

// });

