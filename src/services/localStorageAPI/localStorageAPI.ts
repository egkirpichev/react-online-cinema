export const getColorMode = (): boolean => {
  const isLightMode = localStorage.getItem("isLightMode");

  if (isLightMode === null) {
    localStorage.setItem("isLightMode", JSON.stringify(false));
    return false;
  } else return JSON.parse(isLightMode);
};

export const setColorMode = (): boolean => {
  const isLightMode = JSON.parse(localStorage.getItem("isLightMode") as string);

  localStorage.setItem("isLightMode", JSON.stringify(!isLightMode));
  return !isLightMode;
};
