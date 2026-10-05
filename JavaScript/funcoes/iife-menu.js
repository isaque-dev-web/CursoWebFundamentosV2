// let isValid = false

// function init(){
//     let isValid = false
//     console.log("init menu", isValid)
// }

// init()

// (function(){
//     let isValid = true
//     console.log("menu", isValid)

//     function init(){
//         console.log("init do menu")
//     }
//     init()
// })()

// (function(win, doc){
//     let isValid = false
//     win.alert("Olá, mundo!")
//     console.log("menu", isValid)

//     function init(){
//         console.log("init do menu")
//     }
//     init()
// })(window, document)

(function(win, doc){
    "use strict"
    let isValid = false

    console.log("menu", isValid)

    function init(){
        console.log("init do menu")
    }
    init()
})(window, document)