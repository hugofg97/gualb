export const filterExcerptImages = (imgName, node) => {
  if (imgName.includes("moldura"))
    return {
      moldura: { ...node.fluid },
    };
  if (imgName.includes("web-icon"))
    return {
      web: { ...node.fluid },
    };
  if (imgName.includes("mobile-icon"))
    return {
      mobile: { ...node.fluid },
    };
  if (imgName.includes("back-icon"))
    return {
      back: { ...node.fluid },
    };
  if (imgName.includes("infra-icon"))
    return {
      infra: { ...node.fluid },
    };
  return "nada";
};
