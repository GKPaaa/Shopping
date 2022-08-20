import axios from "axios";
// 为什么不直接用axios直接发请求，
// 1、可能存在多个接口服务器
// 2、 解耦 直接用axios，这个项目一直只能用axios发，如果出现了更加高效比axios更好的工具可以直接将axios更换
const instance = axios.create({
  // 这只是一个接口服务器，还可能有第二个，所以可以通过声明来写第二个接口服务器
  baseURL: "http://pcapi-xiaotuxian-front.itheima.net/",
  timeout: 8000,
});
// 第二个接口服务器
// const instance = axios.create({
//   // 这只是一个接口服务器，还可能有第二个，所以可以通过声明来写第二个接口服务器
//   baseURL: "",
//   timeout: 8000,
// });
export default instance;
