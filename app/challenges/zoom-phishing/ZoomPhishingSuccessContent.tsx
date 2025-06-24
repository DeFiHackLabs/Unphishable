import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const ZoomPhishingSuccessContent = () => {
  const { t } = useLanguage();

  return (
    <div className="text-left bg-white p-5">
      <h3 className="text-xl font-bold mb-4">{t.zoomPhishing.success.title}</h3>

      <p className="mb-4">
        {t.zoomPhishing.success.description}
        <span className="font-mono font-bold">zoom.us</span>
        {t.zoomPhishing.success.description2}
      </p>

      <h4 className="font-bold text-lg mb-2">{t.zoomPhishing.success.learningPointsTitle}</h4>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li>
          <span className="font-bold">{t.zoomPhishing.success.point1.title}</span>
          {t.zoomPhishing.success.point1.description}
        </li>
        <li>
          <span className="font-bold">{t.zoomPhishing.success.point2.title}</span>
          {t.zoomPhishing.success.point2.description}
        </li>
        <li>
          <span className="font-bold">{t.zoomPhishing.success.point3.title}</span>
          {t.zoomPhishing.success.point3.description}
        </li>
        <li>
          <span className="font-bold">{t.zoomPhishing.success.point4.title}</span>
          {t.zoomPhishing.success.point4.description}
        </li>
        <li>
          <span className="font-bold">{t.zoomPhishing.success.point5.title}</span>
          {t.zoomPhishing.success.point5.description}
        </li>
      </ul>

      <p>
        {t.zoomPhishing.success.conclusion}
      </p>
    </div>
  );
};

export default ZoomPhishingSuccessContent;