export const request = async (url) => {
    if (checkURL(url)) {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            })
            if (response.status === 200) {
                const data = await response.json()
                if (data && data.meals && data.meals.length > 0) {
                    const meal = data.meals;

                    const mealID = []
                    const mealName = []
                    const instructions = []
                    const ingredients = []
                    const ingredientsImg = []
                    const mealImage = []

                    for (let x = 0; x < meal.length; x++) {
                        mealID.push(meal[x].idMeal)
                        mealName.push(meal[x].strMeal)
                        instructions.push(meal[x].strInstructions)

                        for (let i = 1; i <= 20; i++) {
                            const ingredient = meal[x]['strIngredient' + i];
                            const measure = meal[x]['strMeasure' + i];
                            if (ingredient && ingredient.trim() !== '') {
                                const ingredientImage = `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
                                ingredients.push(`${measure} ${ingredient}`);
                                ingredientsImg.push(ingredientImage);
                            }
                        }

                        mealImage.push(meal[x].strMealThumb)
                    }

                    const dataObj = {
                        mealID: mealID,
                        name: mealName,
                        imageUrl: mealImage,
                        instruction: instructions,
                        ingredients: ingredients,
                        ingredientimg: ingredientsImg,
                    }
                    return dataObj
                }
            } else {
                console.log('Server Error: ', data.error.message)
            }
        } catch (error) {
            console.log('Fetch Error: ', error)
        }
    } else {
        console.log("URL error")
    }


}

const checkURL = (url) => {
    try {
        new URL(url)
        return true
    } catch (error) {
        return false
    }
}