export interface Testimonial {
  quote: string;
  name: string;
  meta: string;
  roleId?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Uttam is always the first to step up — he anticipates needs and acts before being asked. That's rare.",
    name: "Ann Merin Varghese",
    meta: "IT Operations Engineer · Infosys",
    roleId: "infosys",
  },
  {
    quote:
      "Analytical ability and commitment to excellence. His research skills and critical thinking were particularly impressive.",
    name: "Maitri Mishra",
    meta: "Academic Peer",
  },
  {
    quote:
      "Uttam sees the bigger picture and translates technical insights into strategic decisions — passion and precision together.",
    name: "Anshdha Sharma",
    meta: "Werkstudent @ CARIAD · MBA Peer",
  },
  {
    quote:
      "He handles conflicting priorities in high-pressure situations without losing his cool. I recommend him without hesitation.",
    name: "Mohammad Shadman",
    meta: "Senior System Engineer · Infosys",
    roleId: "infosys",
  },
];
