export const getProductsCatalogue = async () =>
  await fetch(
    "https://ee7d837d-ba98-47ef-a212-39f3e3d1cd04.mock.pstmn.io/catalogue"
  )
    .then((data) => data.json())
    .catch(() => ({
      products: [],
    }));
