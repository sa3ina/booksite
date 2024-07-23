import Root from "../pages/Root";
import Main from "../pages/Main";
export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
];
