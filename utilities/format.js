const replaceNewLines = str => str.replace(/\n/g, "<br/>");

const troncate = (str, maxChar) =>
  str.length > maxChar
    ? str.slice(0, str.lastIndexOf(" ", maxChar)) + " ..."
    : str;

export { replaceNewLines, troncate };
