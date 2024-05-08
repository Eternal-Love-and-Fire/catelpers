import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Breadcrumb,
} from "../ui/breadcrumb";

const CustomBreadcrumb = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<
    { name: string; path: string }[]
  >([]);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    // Parse the location and generate breadcrumbs based on the pathname
    const paths = location.pathname.split("/").filter((path) => path);
    const breadcrumbsData = paths.map((path, index) => ({
      name: path, // You can customize the names based on your route structure
      path: `/${paths.slice(0, index + 1).join("/")}`,
    }));
    setBreadcrumbs(breadcrumbsData);
  }, [location]);

  return (
    <Breadcrumb className="ml-16">
      <BreadcrumbList>
        <React.Fragment>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link className="capitalize" to={`/`}>
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {location.pathname === "/" ? "" : <BreadcrumbSeparator />}
        </React.Fragment>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.path}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link className="capitalize" to={`${breadcrumb.path}`}>
                  {breadcrumb.name}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
