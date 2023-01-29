//03. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
const fiveCharactersOrFewerOnly = (arr) => arr.filter(word => word.length <= 5)

  console.log(
  fiveCharactersOrFewerOnly([
    "git",
    "github",
    "erick",
    "brandao",
    "javascript",
    "react",
    "angular",
  ])
);
