
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface CasePreviewProps {
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
  onSave: () => void;
}

const CasePreview = ({ colors, onSave }: CasePreviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Предпросмотр</CardTitle>
        <CardDescription>Так будет выглядеть ваш кейс</CardDescription>
      </CardHeader>
      <CardContent>
        <div 
          className="border rounded-md p-4 min-h-[300px]"
          style={{ backgroundColor: colors.background }}
        >
          <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
          <div 
            className="h-6 rounded-sm mb-2 w-3/4" 
            style={{ backgroundColor: colors.primary }}
          ></div>
          <div className="h-3 bg-gray-300 mb-1 w-full rounded-sm"></div>
          <div className="h-3 bg-gray-300 mb-1 w-full rounded-sm"></div>
          <div 
            className="h-8 rounded-sm mt-4 w-1/3 flex items-center justify-center text-white text-xs"
            style={{ backgroundColor: colors.secondary }}
          >
            Кнопка
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={onSave}
          style={{
            backgroundColor: colors.primary,
            color: "#FFFFFF"
          }}
        >
          Сохранить настройки
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CasePreview;
