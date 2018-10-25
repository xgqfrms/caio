"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2018-01-01
 *
 * @description search table
 * @augments
 * @example
 *
 */

// const searchTable = (datas = [], debug = false) => {
//     let result = ``;
//     // do something...
//     return result;
// };


// export default searchTable;

// export {
//     searchTable,
// };

let input = document.querySelector(`[data-uid="search-input"]`);
let btn = document.querySelector(`[data-uid="search-btn"]`);

window.SEARCH_VALUE = ``;

// input.addEventListener(`change`, (e) => {
//     // this === e.target
//     let value = e.target.value;
//     window.SEARCH_VALUE = value;
//     console.log(`input value = `, value);
// });

// input.addEventListener(`blur`, (e) => {
//     // this === e.target
//     let value = e.target.value;
//     window.SEARCH_VALUE = value;
//     console.log(`input value = `, value);
// });

// input.addEventListener(`focus`, (e) => {
//     // this === e.target
//     let value = e.target.value;
//     window.SEARCH_VALUE = value;
//     console.log(`input value = `, value);
// });

// input.addEventListener(`keydown`, (e) => {
//     // this === e.target
//     let value = e.target.value;
//     window.SEARCH_VALUE = value;
//     console.log(`keydown & input value = `, value);
// });

// input.addEventListener(`keypress`, (e) => {
//     // this === e.target
//     let value = e.target.value;
//     window.SEARCH_VALUE = value;
//     console.log(`keypress & input value = `, value);
// });

input.addEventListener(`input`, (e) => {
    // this === e.target
    let value = e.target.value;
    window.SEARCH_VALUE = value;
    console.log(`input & input value = `, value);
});

btn.addEventListener(`click`, () => {
    console.log(`window.SEARCH_VALUE = `, window.SEARCH_VALUE);
});
