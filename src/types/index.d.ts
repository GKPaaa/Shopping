// 泛型接口
// 接口一般是以I开头，命名规范
export interface IApiRes<T> {
  code: string;
  msg: string;
  result: T;
}

export interface ICategoryItem {
  id: string;
  name: string;
  picture: string;
  children: Child[];
  goods: Good[];
  open?: boolean; // ?表示可选
}

interface Good {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum?: any;
}

interface Child {
  id: string;
  name: string;
  picture: string;
  children?: any;
  goods?: any;
}
