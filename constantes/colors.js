// GLOBAL
const brandColors = {
  pink: "#E6306D",
  purple: "#53378B",
  green: "#B1C903",
  orange: "#F29400",
  fontColor: "whitesmoke"
};

const categoryColors = {
  blue: "#0082c8",
  green: "#20bf6b",
  grey: "#d9d9d9",
  orange: "#F29400",
  blueGradient: `linear-gradient(
    to top,
    #667db6,
    #0082c8,
    #0082c8,
    #667db6
  )`,
  hover: {
    blue: "#2579b7"
  },
  fontColor: "whitesmoke"
};

// COMPONENTS
const sideNavColors = {
  backgroundColor: categoryColors.blue,
  backgroundGradient: categoryColors.blueGradient,
  fontColor: "whitesmoke",
  scrollBar: categoryColors.blue
};

sideNavColors.logo = {
  backgroundColor: sideNavColors.fontColor
};

// PAGES
const indexColors = {
  intro: {
    color: "whitesmoke"
  }
};

export { brandColors, categoryColors, sideNavColors, indexColors };
