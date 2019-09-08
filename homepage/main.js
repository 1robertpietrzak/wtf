const thirdHeaderJs = document.querySelector('.home__pamietniczek--header-js');
console.log(thirdHeaderJs);
thirdHeaderJs.innerHTML = thirdHeaderJs.innerHTML + ' przez JS.'


function promptt() {
    let imie = prompt("Jak masz na imie?", "");
    document.querySelector('.home__pamietniczek--header-js');
    if (imie) {
        console.log(imie);
        thirdHeaderJs.innerHTML = thirdHeaderJs.innerHTML + ' Przegladasz super strone: ' + imie + ' .';
    }
}



const homeNaviButton = document.querySelector('.home_miniNav--button--js');
homeNaviButton.addEventListener('click', (e) => {
    const homeNav = document.querySelector('.home__nav--js')
    homeNav.classList.toggle('home__mininav');
})