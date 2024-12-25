const string = `Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options`;
matchedWithRegex(string);
matchedWithLoop(string);

function matchedWithRegex (string) {
    const regex = /\b(?=\w*[a-zA-Z])(?=\w*\d)\w+\b/g;
    const matches = string.match(regex);
    
    if (matches) {
      const createVariations = (str) => {
        const result = [];
        str.replace(/(\d)(?=[a-zA-Z])|([a-zA-Z])(?=\d)/g, (_a, _b, _c, offset) => {
          const firstStr = str.substring(0, offset + 1);
          const lastStr = str.substring(offset + 1);
          result.push(`${firstStr}-${lastStr}`);
        });
        return result;
      };
    
      const variableWithDash = matches.flatMap(createVariations).join(", ");
      console.log("Matched:", matches.join(", "));
      console.log("Variations with '-' character: ", variableWithDash);
    }
}

function matchedWithLoop(string) {
    const strings = string.split(" ");
    const matches = strings.filter((str) => {
      let isNumber = false;
      let isLetter = false;
      for (const letter of str) {
        if (Number(letter)) {
          isNumber = true;
        } else if (!Number(letter)) {
          isLetter = true;
        }
        if (isNumber && isLetter) return true;
      }
      return false;
    });
    const variableWithDashes = [];
    for (const word of matches) {
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (i > 0 &&
            (
                (Number(word[i - 1]) && !Number(char)) ||
                (!Number(word[i - 1]) && Number(char))
            )
        ) {
            const firstStr = word.substring(0, word.indexOf(word[i]));
            const lastStr = word.substring(word.indexOf(word[i]));
            variableWithDashes.push(`${firstStr}-${lastStr}`)
        }
      }
    }
    console.log("Matched Words: ", matches.join(", "));
    console.log("Variations with '-' character: ", variableWithDashes.join(", "));   
}