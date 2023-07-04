import serviceAxios from "../index";

export const getUserInfo = (params) => {
  return serviceAxios({
    url: "/api/website/queryMenuWebsite",
    method: "post",
    params,
  });
};
export const login = (data) => {
  return serviceAxios({
    url: "/json/kotlinx-serialization",
    method: "post",
    data,
  });
};
