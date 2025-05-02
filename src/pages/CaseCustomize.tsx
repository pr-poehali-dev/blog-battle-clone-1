
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CaseCustomize = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [caseData, setCaseData] = useState({
    title: "",
    description: "",
    colors: {
      primary: "#9b87f5",
      secondary: "#7E69AB",
      background: "#FFFFFF"
    },
    layout: "standard"
  });

  // Симуляция загрузки данных кейса
  useEffect(() => {
    setTimeout(() => {
      // В реальном приложении здесь был бы запрос к API
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
      setLoading(false);
    }, 800);
  }, [id]);

  const handleSave = () => {
    // Здесь была бы логика сохранения настроек
    alert("Настройки кейса сохранены!");
    navigate("/cases");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl text-[#9b87f5]">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-[#1A1F2C]">Настройка кейса: {caseData.title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="general">
              <TabsList className="mb-6">
                <TabsTrigger value="general">Основные</TabsTrigger>
                <TabsTrigger value="design">Дизайн</TabsTrigger>
                <TabsTrigger value="layout">Макет</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>Основные настройки</CardTitle>
                    <CardDescription>Настройте основные параметры вашего кейса</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Название</Label>
                      <Input 
                        id="title" 
                        value={caseData.title}
                        onChange={(e) => setCaseData({...caseData, title: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Описание</Label>
                      <Input 
                        id="description" 
                        value={caseData.description}
                        onChange={(e) => setCaseData({...caseData, description: e.target.value})}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="design">
                <Card>
                  <CardHeader>
                    <CardTitle>Настройка дизайна</CardTitle>
                    <CardDescription>Подберите цвета и стили для вашего кейса</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="primaryColor">Основной цвет</Label>
                      <div className="flex items-center space-x-2">
                        <Input 
                          id="primaryColor" 
                          type="color"
                          value={caseData.colors.primary}
                          onChange={(e) => setCaseData({
                            ...caseData, 
                            colors: {...caseData.colors, primary: e.target.value}
                          })}
                          className="w-16 p-1 h-10"
                        />
                        <Input 
                          value={caseData.colors.primary}
                          onChange={(e) => setCaseData({
                            ...caseData, 
                            colors: {...caseData.colors, primary: e.target.value}
                          })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondaryColor">Дополнительный цвет</Label>
                      <div className="flex items-center space-x-2">
                        <Input 
                          id="secondaryColor" 
                          type="color"
                          value={caseData.colors.secondary}
                          onChange={(e) => setCaseData({
                            ...caseData, 
                            colors: {...caseData.colors, secondary: e.target.value}
                          })}
                          className="w-16 p-1 h-10"
                        />
                        <Input 
                          value={caseData.colors.secondary}
                          onChange={(e) => setCaseData({
                            ...caseData, 
                            colors: {...caseData.colors, secondary: e.target.value}
                          })}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="layout">
                <Card>
                  <CardHeader>
                    <CardTitle>Настройка макета</CardTitle>
                    <CardDescription>Выберите расположение элементов</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div 
                        className={`border p-4 rounded-lg cursor-pointer hover:border-[#9b87f5] transition-all ${caseData.layout === 'standard' ? 'border-[#9b87f5] bg-[#9b87f5]/10' : ''}`}
                        onClick={() => setCaseData({...caseData, layout: 'standard'})}
                      >
                        <div className="w-full aspect-video bg-gray-200 mb-2"></div>
                        <div className="h-2 bg-gray-300 mb-1 w-full"></div>
                        <div className="h-2 bg-gray-300 w-3/4"></div>
                        <p className="mt-2 text-xs text-center">Стандартный</p>
                      </div>
                      
                      <div 
                        className={`border p-4 rounded-lg cursor-pointer hover:border-[#9b87f5] transition-all ${caseData.layout === 'sidebar' ? 'border-[#9b87f5] bg-[#9b87f5]/10' : ''}`}
                        onClick={() => setCaseData({...caseData, layout: 'sidebar'})}
                      >
                        <div className="flex gap-2">
                          <div className="w-1/3 aspect-video bg-gray-200"></div>
                          <div className="w-2/3">
                            <div className="h-2 bg-gray-300 mb-1 w-full"></div>
                            <div className="h-2 bg-gray-300 w-3/4"></div>
                          </div>
                        </div>
                        <p className="mt-2 text-xs text-center">С сайдбаром</p>
                      </div>
                      
                      <div 
                        className={`border p-4 rounded-lg cursor-pointer hover:border-[#9b87f5] transition-all ${caseData.layout === 'grid' ? 'border-[#9b87f5] bg-[#9b87f5]/10' : ''}`}
                        onClick={() => setCaseData({...caseData, layout: 'grid'})}
                      >
                        <div className="grid grid-cols-2 gap-1">
                          <div className="w-full aspect-square bg-gray-200"></div>
                          <div className="w-full aspect-square bg-gray-200"></div>
                          <div className="w-full aspect-square bg-gray-200"></div>
                          <div className="w-full aspect-square bg-gray-200"></div>
                        </div>
                        <p className="mt-2 text-xs text-center">Сетка</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Предпросмотр</CardTitle>
                <CardDescription>Так будет выглядеть ваш кейс</CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="border rounded-md p-4 min-h-[300px]"
                  style={{ backgroundColor: caseData.colors.background }}
                >
                  <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
                  <div 
                    className="h-6 rounded-sm mb-2 w-3/4" 
                    style={{ backgroundColor: caseData.colors.primary }}
                  ></div>
                  <div className="h-3 bg-gray-300 mb-1 w-full rounded-sm"></div>
                  <div className="h-3 bg-gray-300 mb-1 w-full rounded-sm"></div>
                  <div 
                    className="h-8 rounded-sm mt-4 w-1/3 flex items-center justify-center text-white text-xs"
                    style={{ backgroundColor: caseData.colors.secondary }}
                  >
                    Кнопка
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handleSave}
                  style={{
                    backgroundColor: caseData.colors.primary,
                    color: "#FFFFFF"
                  }}
                >
                  Сохранить настройки
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCustomize;
