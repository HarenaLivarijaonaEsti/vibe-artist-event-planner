import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="py-16">
      
      <h2 className="text-4xl font-bold text-center mb-10">
        Nos Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>

    </section>
  );
}