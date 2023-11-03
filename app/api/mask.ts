import http from "../utils/http";

http.baseConfig.baseURL = "http://sign-api.ajt123.com/openAi";

// 获取面具数据
export function getMaskData() {
  return http.get("/getMaskData", {
    baseURL: "http://sign-api.ajt123.com/openAi",
  });
}

// 上传面具数据
export function uploadMaskData(data: any) {
  return http.post("/uploadMaskData", data, {
    baseURL: "http://sign-api.ajt123.com/openAi",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
