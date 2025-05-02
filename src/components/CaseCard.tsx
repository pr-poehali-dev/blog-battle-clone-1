
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface CaseProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  customizable?: boolean;
}

const CaseCard = ({ id, title, description, imageUrl, customizable = true }: CaseProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1499750310107-5fef28a66643"} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} 
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {customizable && (
          <p className="text-sm text-[#9b87f5]">
            Этот кейс можно настроить под ваши потребности
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Подробнее</Button>
        {customizable && (
          <Link to={`/cases/${id}/customize`}>
            <Button>Настроить</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default CaseCard;
