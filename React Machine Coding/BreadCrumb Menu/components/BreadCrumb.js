import { Link, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  let breadcrumbpath = "";
  return (
    <div className="bread-crumbs">
      {pathnames.length > 0 && <Link to="/">Home</Link>}

      {pathnames.map((name, index) => {
        breadcrumbpath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={breadcrumbpath}> / {name}</span>
        ) : (
          <span key={breadcrumbpath}>
            / <Link to={breadcrumbpath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
}
