export const filterExcerptImages = (imgName, excerptsImg, node) => {
  if (imgName.includes("react"))
    return {
      frontend: { ...node, excerpt: excerptsImg.react },
    };
  if (imgName.includes("html"))
    return {
      frontend: { ...node, excerpt: excerptsImg.html },
    };
  if (imgName.includes("css"))
    return {
      frontend: { ...node, excerpt: excerptsImg.css },
    };
  if (imgName.includes("gatsby"))
    return {
      frontend: { ...node, excerpt: excerptsImg.gatsby },
    };
  if (imgName.includes("next"))
    return {
      frontend: { ...node, excerpt: excerptsImg.next },
    };
  if (imgName.includes("node"))
    return {
      backend: { ...node, excerpt: excerptsImg.node },
    };
  if (imgName.includes("nest"))
    return {
      backend: { ...node, excerpt: excerptsImg.nest },
    };
  if (imgName.includes("dart"))
    return {
      mobile: { ...node, excerpt: excerptsImg.dart },
    };
  if (imgName.includes("flutter"))
    return {
      mobile: { ...node, excerpt: excerptsImg.flutter },
    };
  if (imgName.includes("graphql"))
    return {
      backend: { ...node, excerpt: excerptsImg.graphql },
    };
  if (imgName.includes("aws"))
    return {
      infra: { ...node, excerpt: excerptsImg.aws },
    };
  return "nada";
};
