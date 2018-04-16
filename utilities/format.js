const replaceNewLines = str => str.replace(/\n/g, "<br/>");

const troncate = (str, maxChar) => {
  let r = str.replace(/\n|\s/g, " ");
  let index = r.lastIndexOf(" ", maxChar);

  return str.slice(0, index);
};

export { replaceNewLines, troncate };
