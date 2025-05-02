
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Импорт компонентов
import GeneralSettingsTab from "@/components/case-customize/GeneralSettingsTab";
import DesignSettingsTab from "@/components/case-customize/DesignSettingsTab";
import LayoutSettingsTab from "@/components/case-customize/LayoutSettingsTab";
import CasePreview from "@/components/case-customize/CasePreview";
import LoadingState from "@/components/case-customize/LoadingState";

// Импорт типов
import { CaseData } from "@/types/case";

const CaseCustomize = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [caseData, setCaseData] = useState<CaseData>({
    title: "",
    description: "",
    colors: {
      primary: "#9b87f5",
      secondary: "#7E69AB",
      background: "#FFFFFF"
    },
    layout: "standard"
  });

  // Загрузка данных кейса
  useEffect(() => {
    const fetchCaseData = async () => {
      try {
        // Здесь был бы запрос к API в реальном приложении
        // Имитация задержки загрузки данных
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setCaseData({
          title: id === "blog-case-1" ? "Блог компании" : 
                 id === "personal-blog" ? "Персональный блог" : "Кейс",
          description: "Настраиваемый кейс для вашего проекта",
          colors: {
            primary: "#9b87f5",
            secondary: "#7E69AB",
            background: "#FFFFFF"
          },
          layout: "standard"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCaseData();
  }, [id]);

  // Обработчики изменений
  const handleTitleChange = (title: string) => {
    setCaseData(prev => ({ ...prev, title }));
  };

  const handleDescriptionChange = (description: string) => {
    setCaseData(prev => ({ ...prev, description }));
  };

  const handleColorsChange = (colors: CaseData['colors']) => {
    setCaseData(prev => ({ ...prev, colors }));
  };

  const handleLayoutChange = (layout: CaseData['layout']) => {
    setCaseData(prev => ({ ...prev, layout }));
  };

  // Сохранение настроек
  const handleSave = () => {
    // Здесь была бы логика сохранения настроек на сервере
    alert("Настройки кейса сохранены!");
    navigate("/cases");
  };

  if (loading) {
    return <LoadingState />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-[#1A1F2C]">
          Настройка кейса: {caseData.title}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="general">
              <TabsList className="mb-6">
                <TabsTrigger value="general">Основные</TabsTrigger>
                <TabsTrigger value="design">Дизайн</TabsTrigger>
                <TabsTrigger value="layout">Макет</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general">
                <GeneralSettingsTab 
                  title={caseData.title}
                  description={caseData.description}
                  onTitleChange={handleTitleChange}
                  onDescriptionChange={handleDescriptionChange}
                />
              </TabsContent>
              
              <TabsContent value="design">
                <DesignSettingsTab 
                  colors={caseData.colors}
                  onColorsChange={handleColorsChange}
                />
              </TabsContent>
              
              <TabsContent value="layout">
                <LayoutSettingsTab 
                  layout={caseData.layout}
                  onLayoutChange={handleLayoutChange}
                />
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <CasePreview 
              colors={caseData.colors}
              onSave={handleSave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCustomize;
