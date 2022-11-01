export const filterExcerptImages = (imgName, node) => {
  if (imgName.includes("moldura"))
    return {
      moldura: { ...node.gatsbyImageData },
    };
  if (imgName.includes("web-icon"))
    return {
      web: { ...node.gatsbyImageData },
    };
  if (imgName.includes("mobile-icon"))
    return {
      mobile: { ...node.gatsbyImageData },
    };
  if (imgName.includes("back-icon"))
    return {
      back: { ...node.gatsbyImageData },
    };
  if (imgName.includes("infra-icon"))
    return {
      infra: { ...node.gatsbyImageData },
    };
  return "nada";
};
