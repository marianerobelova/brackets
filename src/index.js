module.exports = function check(str, bracketsConfig) {
  let stack = [];
  bracketsConfig.forEach((config) => {
    const openingBracket = config[0];

    for (let i = 0; i < str.length; i++) {
      let currEl = str[i];

      if (config.includes(currEl)) {
        
        if (currEl === openingBracket) {
          stack.push(currEl);
        } else {

          if (stack.length === 0) {
            return false;
          }

          let topEl = stack[stack.length - 1];

          if (topEl === openingBracket) {
            stack.pop()
          } else {
            return false;
          }

        }
      
      }

    }
  });

  return stack.length === 0
  
};
