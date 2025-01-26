const container = document.querySelector('.container')
const get_category_data = document.querySelector('.get-category-data')
const get_ingredient_data = document.querySelector('.get-ingredient-data')

 get_category_data.addEventListener('click',()=>{
   getCategoriesData()
})
get_ingredient_data.addEventListener('click',()=>{
    getIngredientData()
})


async function getCategoriesData() {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch category data");
      }
      const data = await response.json();
      console.log("Category Data:", data);
    } catch (error) {
      console.error("Something went wrong:", error.message);
      console.log("something went wrong");
    }
  }

 
  async function getIngredientData() {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch category data");
      }
      const data = await response.json();
      console.log("Category Data:", data);
    } catch (error) {
      console.error("Something went wrong:", error.message);
      console.log("something went wrong");
    }
  }


  function Render(){
    
  }