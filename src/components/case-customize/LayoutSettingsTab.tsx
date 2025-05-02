
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LayoutOption from "./LayoutOption";

type LayoutType = 'standard' | 'sidebar' | 'grid';

interface LayoutSettingsTabProps {
  layout: LayoutType;
  onLayoutChange: (layout: LayoutType) => void;
}

const LayoutSettingsTab = ({ layout, onLayoutChange }: LayoutSettingsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Настройка макета</CardTitle>
        <CardDescription>Выберите расположение элементов</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <LayoutOption 
            name="standard"
            label="Стандартный"
            isActive={layout === 'standard'}
            onClick={() => onLayoutChange('standard')}
          >
            <div className="w-full aspect-video bg-gray-200 mb-2"></div>
            <div className="h-2 bg-gray-300 mb-1 w-full"></div>
            <div className="h-2 bg-gray-300 w-3/4"></div>
          </LayoutOption>
          
          <LayoutOption 
            name="sidebar"
            label="С сайдбаром"
            isActive={layout === 'sidebar'}
            onClick={() => onLayoutChange('sidebar')}
          >
            <div className="flex gap-2">
              <div className="w-1/3 aspect-video bg-gray-200"></div>
              <div className="w-2/3">
                <div className="h-2 bg-gray-300 mb-1 w-full"></div>
                <div className="h-2 bg-gray-300 w-3/4"></div>
              </div>
            </div>
          </LayoutOption>
          
          <LayoutOption 
            name="grid"
            label="Сетка"
            isActive={layout === 'grid'}
            onClick={() => onLayoutChange('grid')}
          >
            <div className="grid grid-cols-2 gap-1">
              <div className="w-full aspect-square bg-gray-200"></div>
              <div className="w-full aspect-square bg-gray-200"></div>
              <div className="w-full aspect-square bg-gray-200"></div>
              <div className="w-full aspect-square bg-gray-200"></div>
            </div>
          </LayoutOption>
        </div>
      </CardContent>
    </Card>
  );
};

export default LayoutSettingsTab;
