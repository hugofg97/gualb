export const filterExcerptImages = (imgName, excerptsImg) => {
  if (imgName.includes("react")) return excerptsImg.react;
  if (imgName.includes("html")) return excerptsImg.html;
  if (imgName.includes("css")) return excerptsImg.css;
  if (imgName.includes("gatsby")) return excerptsImg.gatsby;
  if (imgName.includes("vue")) return excerptsImg.vue;
  if (imgName.includes("next")) return excerptsImg.next;
  if (imgName.includes("node")) return excerptsImg.node;
  if (imgName.includes("nest")) return excerptsImg.nest;
  if (imgName.includes("dart")) return excerptsImg.dart;
  if (imgName.includes("flutter")) return excerptsImg.flutter;
  if (imgName.includes("graphql")) return excerptsImg.graphql;
  if (imgName.includes("aws")) return excerptsImg.aws;
  return "nada";
};
