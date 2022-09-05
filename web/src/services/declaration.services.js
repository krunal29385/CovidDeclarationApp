import http from "../http-common";
class DeclarationServices {
  addUser(data) {
    return http.post("/addUser", data);
  }
}
export default new DeclarationServices();