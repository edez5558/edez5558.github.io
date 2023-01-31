class Bread{
    constructor(name,info,img_url,href){
        this.name = name;
        this.img_url = img_url;
        this.href = href;
        this.info = info;
    }
}

const bTemplate = ["Bread Loaf","Example Text","resource/bread/bread-1.jpg","/products/bread1",
                   "Croissant","Example Text","resource/bread/bread-3.jpg","/products/bread3",
                   "Baguettes crust","Example Text","resource/bread/bread-4.jpg","/products/bread4",
                   "Bread baked crispy","Example Text","resource/bread/bread-5.jpg","/products/bread5",
                   "Cinnaon rolls","Example Text","resource/bread/bread-6.jpg","/products/bread2"];

let breads = [];
const offerImg = document.getElementById("offer-img");
const offerLink = document.getElementById("offer-link");
const offerName = document.getElementById("offer-name"); 

for(let i = 0; i < bTemplate.length; i += 4){
    breads.push(new Bread(bTemplate[i],bTemplate[i+1],bTemplate[i+2],bTemplate[i+3]));
}

let index = 0;
let currentBread;
const timeOffer = 8000;
function changeOffer(){
    if(offerImg == null || breads.length <= 0)
        return;

    offerImg.classList.remove("leave-effect");
    offerImg.classList.remove("entry-effect");

    index = index%breads.length;
    currentBread = breads[index];

    offerImg.src = currentBread.img_url;
    offerLink.href = currentBread.href;
    offerName.innerHTML = currentBread.name;

    offerImg.classList.add("entry-effect");
    offerName.classList.add("text-entry");

    index++;

    setTimeout(changeOffer, timeOffer + 1500);
    setTimeout(() => {
        offerImg.classList.add("leave-effect");
        offerName.classList.remove("text-entry");
    }, timeOffer);
}


changeOffer();
