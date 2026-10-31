import AsyncStorage from "@react-native-async-storage/async-storage";

import { Meal } from "../types";

const MY_FOOD_KEY = "@MyFood:Key";

const useFoodStorage = () => {
  const handleSaveFood = async ({ calories, name, portion }: Meal) => {
    try {
      const currentSavedFood = await AsyncStorage.getItem(MY_FOOD_KEY);

      if (currentSavedFood !== null) {
        const currentSavedFoodParsed = JSON.parse(currentSavedFood);
        currentSavedFoodParsed.push({
          calories,
          name,
          portion,
        });

        await AsyncStorage.setItem(
          MY_FOOD_KEY,
          JSON.stringify(currentSavedFoodParsed),
        );

        return Promise.resolve();
      }

      await AsyncStorage.setItem(
        MY_FOOD_KEY,
        JSON.stringify([{ calories, name, portion }]),
      );

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const handleGetFoods = () => {};

  return {
    onSaveFood: handleSaveFood,
    onGetFoods: handleGetFoods,
  };
};

//guardar informacion de comidas

//metodo para obtener informacion de la comida

export default useFoodStorage;
