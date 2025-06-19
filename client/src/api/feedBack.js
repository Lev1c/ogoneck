import { $host } from "./indexApi";

export const feedbackGet = async () => {
  try {
    const { data } = await $host.get("/feedback-get", {});

    return data;
  } catch (e) {
    return e;
  }
};

export const feedbackGetId = async (id) => {
  try {
    const { data } = await $host.get(`/feedback-get-id/${id}`);

    return data;
  } catch (e) {
    return e;
  }
};

export const feedbackCreate = async (
  name,
  email,
  phone,
  typeFeed,
  typeWork,
  text
) => {
  try {
    const { data } = await $host.post("/feedback-create", {
      name,
      email,
      phone,
      typeFeed,
      typeWork,
      text,
    });

    return data;
  } catch (e) {
    return e;
  }
};

export const feedbackChange = async (
  id,

  typeWork
) => {
  try {
    const { data } = await $host.patch("/feedback-change", {
      id,
      typeWork,
    });

    return data;
  } catch (e) {
    return e;
  }
};
