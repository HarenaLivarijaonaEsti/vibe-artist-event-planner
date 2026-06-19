import type { Service } from "../types/Services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="card-body items-center text-center">
        
        {/* Icon */}
        <div className="text-primary text-3xl">
          <Icon />
        </div>

        {/* Title */}
        <h2 className="card-title mt-2">
          {service.title}
        </h2>

        {/* Description */}
        <p className="text-sm opacity-80">
          {service.description}
        </p>

      </div>
    </div>
  );
}