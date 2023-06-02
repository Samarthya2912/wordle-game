function getBackgroundColorArray(attemptString: string, targetWord: string): string[] {
  let colorArray = [];

  for (let i = 0; i < attemptString.length; i++) {
    if (attemptString[i] === " ") colorArray.push("white");
    else if (attemptString[i].toUpperCase() !== targetWord[i].toUpperCase())
      colorArray.push("red");
    else colorArray.push("green");
  }

  return colorArray;
}

export default getBackgroundColorArray;
