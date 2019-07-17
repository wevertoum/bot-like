//pega km 
let x = document.getElementsByClassName("Us(t) Va(m) D(ib) My(2px) NetWidth(100%,20px) C(#fff) Ell");
let arrayX = [].slice.call(x);
let y = arrayX.pop()
let z = y.getElementsByTagName("span");
let distanceKm = z[0].innerText;
let distanceKmString = distanceKm.toString();

function myFunction() {
    setTimeout(() => {
    //btn nao da like
    let notBtn = document.querySelector('[aria-label="Não"]');
    //btn da like
    let yesBtn = document.querySelector('[aria-label="Curti"]');
        if(distanceKmString != "a 2 quilômetros daqui"){
            yesBtn.click();
        }else{
            notBtn.click(); 
        }
    }, 3000);
}
setInterval(myFunction, 6000);
