
import { useState } from "react";
import CaseCard, { CaseProps } from "@/components/CaseCard";

const Cases = () => {
  const [cases] = useState<CaseProps[]>([
    {
      id: "blog-case-1",
      title: "Блог компании",
      description: "Кейс для создания корпоративного блога с настраиваемым дизайном",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      customizable: true
    },
    {
      id: "personal-blog",
      title: "Персональный блог",
      description: "Шаблон для личного блога с возможностью настройки категорий",
      imageUrl: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f",
      customizable: true
    },
    {
      id: "news-portal",
      title: "Новостной портал",
      description: "Готовый кейс для создания новостного сайта",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      customizable: false
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-[#1A1F2C]">Кейсы</h1>
        <p className="text-xl text-gray-600 mb-10">Выберите кейс или настройте его под свои нужды</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.id} {...caseItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
