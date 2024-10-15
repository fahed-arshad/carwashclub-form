export const getSessionStorageItem = (item: string) => {
  return JSON.parse(sessionStorage.getItem(item) || "{}");
};
