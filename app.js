const search = document.getElementById('search').addEventListener('click', function(){
    const inputSearch = document.getElementById('inputAria').value ;
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res => res.json())
    .then(data => display(data) )
 
}) ;


const display =  strCategory =>{
    console.log(console.log(Object.keys(strCategory)))
}


//https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

//console.log(Object.keys(data))