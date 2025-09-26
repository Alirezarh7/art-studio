import React from "react";
import AcademySlider from "./AcademySlider";
import academyData from "./academyData.json";
import AcademyDetailsPage from "./AcademyDetailsPage";
import AcademyPage from "./AcademyPage";

function Single() {
  return (
    <div className="pt-20">
      <AcademyPage />
    </div>
    // <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
    //   <AcademySlider name={academyData.name} images={academyData.images} />
    // </div>
  );
}

export default Single;
