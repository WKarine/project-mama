const brandColors = {
  pink: "#E6306D",
  purple: "#53378B",
  green: "#B1C903",
  orange: "#F29400"
};

const categoryColors = {
  blue: "#667db6",
  blueGradient: `linear-gradient(
    to top,
    #667db6,
    #0082c8,
    #0082c8,
    #667db6
  )`
};

const sideNavColors = {
  backgroundColor: categoryColors.blue,
  backgroundGradient: categoryColors.blueGradient,
  fontColor: "whitesmoke"
};

sideNavColors.logo = {
  backgroundColor: sideNavColors.fontColor
};

export { brandColors, categoryColors, sideNavColors };
