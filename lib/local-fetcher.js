export const fetcher = (...args) => fetch(...args).then((res) => res.json());

const getRandomNumber = (max = 10, min = 0) =>
  Math.ceil(Math.random() * (max - min) + min);

const waitFor = async (time) => {
  console.log("waiting for ", time);
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        time > 2_000 ? reject("time out") : resolve(getRandomNumber(1000)),
      time
    )
  );
};

export const localFetcher = async (title) =>
  waitFor(getRandomNumber(3_000, 500)).then((number) => `${title}-${number}`);
