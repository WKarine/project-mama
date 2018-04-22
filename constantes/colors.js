function shadeColor(color, percent) {
  const f = parseInt(color.slice(1), 16),
    t = percent < 0 ? 0 : 255,
    p = percent < 0 ? percent * -1 : percent,
    R = f >> 16,
    G = (f >> 8) & 0x00ff,
    B = f & 0x0000ff;
  return (
    "#" +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  );
}

const brandColors = {
  pink: "#E6306D",
  purple: "#60387e",
  green: "#B1C903",
  orange: "#F29400"
};

brandColors.actual = brandColors.purple;
brandColors.actualHover = shadeColor(brandColors.purple, -0.25);

export { brandColors };
