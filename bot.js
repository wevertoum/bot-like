function myFunction() {

    //pega km 
    let x = document.getElementsByClassName("Us(t) Va(m) D(ib) My(2px) NetWidth(100%,20px) C(#fff) Ell");
    let arrayX = [].slice.call(x);
    let y = arrayX.pop()
    let z = y.getElementsByTagName("span");
    let distanceKm = z[0].innerText;

    //btn nao da like
    let notBtn = document.querySelector('[aria-label="Não"]');
    //btn da like
    let yesBtn = document.querySelector('[aria-label="Curti"]');

    if (distanceKm == "a 2 quilômetros daqui") {
        notBtn.click();
    } else {
        yesBtn.click();
    }
}
setInterval(myFunction, 6000);
