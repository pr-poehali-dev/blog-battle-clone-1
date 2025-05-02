
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ColorSettings {
  primary: string;
  secondary: string;
  background: string;
}

interface DesignSettingsTabProps {
  colors: ColorSettings;
  onColorsChange: (colors: ColorSettings) => void;
}

const DesignSettingsTab = ({ colors, onColorsChange }: DesignSettingsTabProps) => {
  const handleColorChange = (colorKey: keyof ColorSettings, value: string) => {
    onColorsChange({
      ...colors,
      [colorKey]: value
    });
  };

  return (
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
              value={colors.primary}
              onChange={(e) => handleColorChange('primary', e.target.value)}
              className="w-16 p-1 h-10"
            />
            <Input 
              value={colors.primary}
              onChange={(e) => handleColorChange('primary', e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="secondaryColor">Дополнительный цвет</Label>
          <div className="flex items-center space-x-2">
            <Input 
              id="secondaryColor" 
              type="color"
              value={colors.secondary}
              onChange={(e) => handleColorChange('secondary', e.target.value)}
              className="w-16 p-1 h-10"
            />
            <Input 
              value={colors.secondary}
              onChange={(e) => handleColorChange('secondary', e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="backgroundColor">Цвет фона</Label>
          <div className="flex items-center space-x-2">
            <Input 
              id="backgroundColor" 
              type="color"
              value={colors.background}
              onChange={(e) => handleColorChange('background', e.target.value)}
              className="w-16 p-1 h-10"
            />
            <Input 
              value={colors.background}
              onChange={(e) => handleColorChange('background', e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DesignSettingsTab;
