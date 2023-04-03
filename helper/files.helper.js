function optimizeData(data) {
  const result = data
    .split("\n")
    .slice(1)
    .map((line) => {
      const [file, text, number, hex] = line.split(",");
      const isNumber = /^\d+o?$/.test(number);
      const isHex = /^[0-9a-fA-F]+$/i.test(hex);
      return {
        file,
        text,
        number: isNumber ? number : "",
        hex: isHex ? hex : "",
      };
    })
    .filter((objeto) => {
      return !Object.values(objeto).some((valor) => valor === "");
    })
    .reduce((acc, obj) => {
      const { file, ...rest } = obj;
      if (!acc[file]) {
        acc[file] = { file, lines: [] };
      }
      acc[file].lines.push(rest);
      return acc;
    }, {});
  return result;
}

export { optimizeData };
