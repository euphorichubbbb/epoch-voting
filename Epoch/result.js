window.addEventListener('load', () => {
    /*const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname');*/

   /* var inc1 = localStorage.getItem('Inc1');
    var inc2 = localStorage.getItem('Inc2');
    var inc3 = localStorage.getItem('Inc3');*/

     var inc1 = sessionStorage.getItem('Inc1');
    
    var inc2 = sessionStorage.getItem('Inc2');
    var inc3 = sessionStorage.getItem('Inc3');

   
    document.getElementById('result-Inc1').innerHTML = inc1;
    document.getElementById('result-Inc2').innerHTML = inc2;
    document.getElementById('result-Inc3').innerHTML = inc3;

   

})
