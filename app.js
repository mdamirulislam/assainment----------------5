
const searchFood = () => {
        const input = document.getElementById("inputAria").value ;
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`

        // load data
        fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
      
      
         const displayFood = food =>{
                 const seafoodsContainer = document.getElementById("seafoods-container")
                food.forEach(food => {
                        const div = document.createElement('div')
                        div.innerText = food.strMeal;
                        seafoodsContainer.appendChild(div)
                        
                });
         }
}

















// const searchBtn = () =>{
// const searchInput = document.getElementById('inputAria').value ;
// const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`
// fetch(url)
// .then(res => res.json())
// .then(data => displayFood(data.meals))


// }

// const displayFood = foods =>{
//     const seafoodContainer = document.getElementById('seafoods-container') ;
//  foods.forEach(food => { 
    
     
//     const foodDiv = document.createElement('div')

 
//     const foodInfo = document.createElement('h3')
// foodInfo.innerText = food.strMeal;
// const title = document.createElement('p')
// title.innerText = food.strCategory;
// div.appendChild(foodInfo);
// div.appendChild(title);

//     // const foodInfo = `
    
//     // <h3> aa </h3>
//     // <p> bb </p>
    
//     // `
 
//      foodDiv.innerHTML = foodInfo ;
//      const all =  seafoodContainer.appendChild(foodInfo)
     
//      console.log(all)
    
//  })
   
     
 
//strMeal
// strCategory
//idMeal
//strArea
   
// const name = document.createElement('h3')
// name.innerText = food.strMeal;
// const title = document.createElement('p')
// title.innerText = food.strCategory;
// div.appendChild(name);
// div.appendChild(title);