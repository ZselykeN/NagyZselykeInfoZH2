class RandomStringSelector {
  static selectRandomStrings(strings: string[]): string[] {
    const selectedStrings: string[] = [];
    const returnCount = 3;
    while (selectedStrings.length < returnCount && strings.length > 0) {
      const randomIndex = Math.floor(Math.random() * strings.length);
      selectedStrings.push(strings.splice(randomIndex, 1)[0]);
    }

    return selectedStrings;
  }
}

// Példa használat
const inputStrings = ["Első", "Második", "Harmadik", "Negyedik", "Ötödik", "Hatodik", "Hetedik"];
const selectedRandomStrings = RandomStringSelector.selectRandomStrings(inputStrings);

console.log("Véletlenszerűen kiválasztott sztringek:", selectedRandomStrings );
