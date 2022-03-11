const generate = (highestMain, highestBonus, lowest) => {
  const result = [];

  const bonus = Math.floor(
    Math.random() * (highestBonus + 1 - lowest) + lowest
  );
  const max = highestMain + 1;
  const min = lowest;
  const resultSection = document.getElementById("result");

  for (i = result.length; i < 5; i++) {
    const random = Math.floor(Math.random() * (max - min) + min);
    result.push(("0" + random).slice(-2));
  }

  const orderedArray = result.sort((a, b) => {
    return a - b;
  });

  const uniqueArray = Array.from(new Set(orderedArray));

  if (uniqueArray.length < 5) {
    for (i = result.length; i < 5; i++) {
      const random = Math.floor(Math.random() * (max - min) + min);
      result.push(("0" + random).slice(-2));
    }
  }

  const stringResult = uniqueArray.toString().replace(/,/g, " ");

  if (uniqueArray.length === 5) {
    resultSection.innerHTML = `${stringResult} + ${("0" + bonus).slice(-2)}`;
  }
};
