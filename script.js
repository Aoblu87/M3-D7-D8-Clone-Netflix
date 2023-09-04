const body= document.querySelector('body')
const element= document.querySelector('[data-target=carousel]')


window.onload= function(){
    
    
// window.addEventListener('scroll', function(event){

    
        // function scrollSection(){

        //     element.scrollIntoView(true);
        // }
        // scrollSection()
        // element.scrollTo({
        //     top: 0,
        //     left: 0,
        //     behavior: "smooth",
        //   });

    

// })
window.addEventListener('scroll', function(event){

    function scrollFunction() {
        window.scrollTo(100, findPosition(element));
      }
      function findPosition(obj) {
        var currenttop = 0;
        if (obj.offsetParent) {
          do {
            currenttop += obj.offsetTop;
          } while ((obj = obj.offsetParent));
          return [currenttop];
        }
      }
      scrollFunction()


})

    
}







