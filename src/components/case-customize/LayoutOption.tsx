
interface LayoutOptionProps {
  name: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const LayoutOption = ({ name, label, isActive, onClick, children }: LayoutOptionProps) => {
  return (
    <div 
      className={`border p-4 rounded-lg cursor-pointer hover:border-[#9b87f5] transition-all ${isActive ? 'border-[#9b87f5] bg-[#9b87f5]/10' : ''}`}
      onClick={onClick}
      aria-label={`Выбрать макет ${name}`}
    >
      {children}
      <p className="mt-2 text-xs text-center">{label}</p>
    </div>
  );
};

export default LayoutOption;
