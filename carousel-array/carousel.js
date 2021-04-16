const IMAGES = [ 
    "p1.jpeg",
    "p2.jpeg",
    "p3.jpeg",
    "p4.jpeg",
    "p5.jpeg"  ]   // In array, prin conventie, identificatorii constanti sunt scrisi cu majuscule .

const TITLES = ["1/5", "2/5", "3/5", "4/5", "5/5"] 

let currentIndex = 0    

 function showImage(n) {
     
     carouselSlides.innerHTML = `<img src=" ${IMAGES[n]}" class="animate__animated animate__slideInDown" />`}

 function showTitle(n){
  carouselTitles.innerHTML = `<h4 class="animate__animated  animate__slideInDown">${TITLES[n]}  </h4> `
 }    
 
 

 function showIndicators( n ){
     dotsIndicators.innerHTML = ``
         for(i = 0 ; i < IMAGES.length; i++ ) {
           if( i == n){
              dotsIndicators.innerHTML += `<i class="fas fa-circle"></i>`}
       else {
        dotsIndicators.innerHTML += `<i class="far fa-circle"></i>`}
     }
 }
   
     
 function next(){
       if(currentIndex < 4){
      currentIndex++
      showImage(currentIndex)
      showTitle(currentIndex)
      showIndicators(currentIndex)
      
     }
 } 
    
    
 function prev(){
     if(currentIndex > 0) {
    currentIndex--
    showImage(currentIndex)
    showTitle(currentIndex)
    showIndicators(currentIndex)
    action(currentIndex)}
}   

  showImage(currentIndex)
  showTitle(currentIndex)
  showIndicators(currentIndex)
  


 function play(){
     setInterval( next ,3000) }
         
     
