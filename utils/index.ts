export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "4537d61bc2mshc13bbb531fe1f90p13d0afjsnf6d55cd38052",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers }
  );

  const result = await response.json();

  return result;
}
