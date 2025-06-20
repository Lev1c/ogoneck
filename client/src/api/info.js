import { $host } from "./indexApi";

export const infoGet = async () => {
  try {
    const { data } = await $host.get("/info-get", {});

    return data;
  } catch (e) {
    return e;
  }
};

export const infoGetAdmin = async () => {
  try {
    const { data } = await $host.get("/info-get-admin", {});

    return data;
  } catch (e) {
    return e;
  }
};

export const infoGetId = async (id) => {
  try {
    const { data } = await $host.get(`/info-get-id/${id}`);

    return data;
  } catch (e) {
    return e;
  }
};

export const infoCreate = async (name, text, visible) => {
  try {
    const token = localStorage.getItem("token"); // Получаем токен из localStorage
    const { data } = await $host.post(
      "/info-create",
      {
        name,
        text,
        visible,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Указываем токен в заголовке
        },
      }
    );

    return data;
  } catch (e) {
    return e;
  }
};

export const infoChange = async (id, name, text, visible) => {
  try {
    const token = localStorage.getItem("token"); // Получаем токен из localStorage
    const { data } = await $host.patch(
      "/info-change",
      {
        id,
        name,
        text,
        visible,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Указываем токен в заголовке
        },
      }
    );

    return data;
  } catch (e) {
    return e;
  }
};

export const infoDelete = async (id) => {
  try {
    const token = localStorage.getItem("token"); // Получаем токен из localStorage
    const { data } = await $host.delete(`/info-delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Указываем токен в заголовке
      },
    });

    return data;
  } catch (e) {
    return e;
  }
};
