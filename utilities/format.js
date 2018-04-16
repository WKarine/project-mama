const replaceNewLines = str => str.replace(/\n/g, "<br/>");

const tronk = (str, n) => {
  let r = str.replace(/\n|\s/g, " ");
  let index = r.lastIndexOf(" ", n);

  return str.slice(0, index);
};

export { replaceNewLines, tronk };
