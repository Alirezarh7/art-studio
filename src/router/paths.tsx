import HomePage from "../page/page.tsx";
import NotFoundPage from "../page/NotFound/page.tsx";
import SchoolsList from "../page/schools/[artType]/page.tsx";

export interface RouteConfig {
  path: string;
  label: string;
  element: React.ReactNode;
  requiredPermission?: string;
}

export const Paths: RouteConfig[] = [
  { path: "*", label: "صفحه مورد نظر یافت نشد", element: <NotFoundPage /> },
  { path: "/", label: "خانه", element: <HomePage /> },
  { path: "/schools/:artType", label: "خانه", element: <SchoolsList /> },
];
