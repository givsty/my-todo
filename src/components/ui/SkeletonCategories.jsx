import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonCategories = () => (
  <div className="skeleton__wrapper">
    <ContentLoader
      speed={2}
      width={50}
      height={100}
      viewBox="0 0 280 466"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="328" y="24" rx="0" ry="0" width="1000" height="0" />
      <rect x="139" y="24" rx="0" ry="0" width="1000" height="0" />
      <rect x="10" y="-20" rx="0" ry="0" width="1000" height="120" />
    </ContentLoader>
  </div>
);

export default SkeletonCategories;
