import {Calendar, Heart, MapPin, Mic, PartyPopper, Users } from "lucide-react";
import type { Service } from "../types/Services";

export const services: Service[] = [
{
  id: 1,
  title: "Organisation d'événements",
  description: "Gestion complète de vos événements de A à Z",
  icon: Calendar,
},
{
  id: 2,
  title: "Team Building",
  description: "Activités d’équipe pour renforcer la cohésion et la performance",
  icon: Users,
},
{
  id: 3,
  title: "Conférences & Séminaires",
  description: "Organisation professionnelle de conférences, séminaires et workshops",
  icon: Mic,
},
  {
    id: 4,
    title: "Mariage",
    description: "Organisation complète de mariages sur mesure et élégants",
    icon: Heart,
  },
  {
    id: 5,
    title: "Anniversaire",
    description: "Célébrations personnalisées pour tous les âges",
    icon: PartyPopper,
  },
  {
    id: 6,
    title: "Excursions & sorties",
    description: "Organisation d’excursions, voyages et activités de groupe",
    icon: MapPin,
  },
];