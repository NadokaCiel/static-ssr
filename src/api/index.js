export const fetchProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        title: "产品1",
      });
    }, 2000);
  });
}
