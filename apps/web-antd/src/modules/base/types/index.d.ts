import { RouteComponent, RouteLocationNormalized } from 'vue-router';

export declare namespace Menu {
  enum Type {
    '权限' = 2,
    '目录' = 0,
    '菜单' = 1,
  }

  interface Item {
    id: number;
    parentId: number;
    path: string;
    router?: string;
    viewPath?: string;
    type: Type;
    name: string;
    icon: string;
    orderNum: number;
    isShow: boolean | number;
    keepAlive?: number;
    meta?: {
      [key: string]: any;
      iframeUrl?: string;
      isHome?: boolean;
      keepAlive?: boolean | number;
      label?: string;
    };
    children?: Item[];
    component?: RouteComponent;
    redirect?: string;
    [key: string]: any;
  }

  type List = Item[];
}

export declare namespace Process {
  interface Item extends RouteLocationNormalized {
    active: boolean;
  }

  type List = Item[];
}
