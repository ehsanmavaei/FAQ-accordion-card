console.log('HELLO');

const test = () => {
	console.log('this is a test');
};
 const faqs = document.querySelectorAll(".faq");


 faqs.forEach(faq=>{
	 faq.addEventListener("click",() =>{
		faq.children[0].children[1].classList.toggle('svg')
	faq.children[0].children[0].classList.toggle('bold')
	
		 faq.classList.toggle('active')
	 })
 })

//  const svgs = document.querySelectorAll(".svg");

//  faqs.forEach(svg=>{
// 	 svg.addEventListener("click",() =>{
// 		 svg.classList.toggle('svg')
// 	 })
//  })