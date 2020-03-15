
export const shuffleAndPick = (array, amount) => {
    return array.sort(() => 0.5 - Math.random()).slice(0, amount);
  };