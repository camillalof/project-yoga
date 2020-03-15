
export const randomizer = (array) => {
    
  const randomNumber = Math.floor((Math.random() * array.length));

  return array[randomNumber]
}

//ger 1 st random pose
