const Eternals=[
    {
        heroname:"Ikaris",
        heropower:"Fly",
        first_appears:"1976",
        the_number_of_appears:244,
        img:"Ikaris.jpg"
    },
    {
        heroname:"Sersi",
        heropower:"Mind Control",
        first_appears:"1963",
        the_number_of_appears:461,
        img:"Sersi.jpg"
    },
    {
        heroname:"Makkari",
        heropower:"Speed",
        first_appears:"1976",
        the_number_of_appears:228,
        img:"Makkari.jpg"
    },
    {
        heroname:"Cosmic Hulk",
        heropower:"Containing The Power Cosmic",
        first_appears:"1962",
        the_number_of_appears:44,
        img:"Hulk.jpg"
    },
    {
        heroname:"Nezarr the Calculator",
        heropower:"Generate Energy Blasts ",
        first_appears:"1977",
        the_number_of_appears:78,
        img:"Nezarr.jpg"
    },

];


let Welcome = document.querySelector(".Welcome");
Welcome.textContent =" Welcome to Eternals Heroes.";
let characters_list = document.querySelector(".characters_list");
let allHeroList = `<ul>`;
Eternals.forEach((hero) => {
    allHeroList += `<li> ${hero.heroname}. The power: ${hero.heropower}</li>`;
});
allHeroList += `</ul>`;
characters_list.innerHTML = allHeroList;




const getInfo = (ele) => {
    let uservalue = document.querySelector("#Heropower").value;
    console.log(uservalue )
    
    let hero = Eternals.find((eternal)=> eternal.heropower.includes(uservalue));
    console.log(hero)
  
    
   if (hero==undefined){

    alert("Please type one kind of heroes power that in the list and start with capital letters.")
    }
   
   else if (hero.heropower == Eternals[0].heropower || hero.heropower == Eternals[1].heropower ||hero.heropower == Eternals[2].heropower ||hero.heropower == Eternals[3].heropower || hero.heropower == Eternals[4].heropower )
   
    {
        console.log(hero.heropower )
        let selectedHeroInfo = document.querySelector(".selectedHeroInfo");
    selectedHeroInfo.innerHTML =` Hero's name is ${hero.heroname}.<br> The type of power is ${hero.heropower}.
    <br> The first appears for ${hero.heroname} was in: ${hero.first_appears}.  
    <br>${hero.heroname}  appears in ${hero.the_number_of_appears} issues.<br>`;
    let HeroPic = document.querySelector(".selectedHeroImg");
    HeroPic.src = hero.img;
    
        }
     
        else {
        alert("Enter Your Favorite Type of Power")
        }

}






