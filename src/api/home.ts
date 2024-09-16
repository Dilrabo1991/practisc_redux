import request from "./index";

class homeServices {
  static list = (id: number) => {
    return request.get(`pokemon/${id}`);
  };
}

export default homeServices;
