export type Activity = {
  id: number;
  title: string;
  description: string;
  duration: string;
  intensity: "Low" | "Medium" | "High";
  locations: string[];
  image: string;
};

export const activities: Activity[] = [
  {
    id: 1,
    title: "Hot Air Balloon Safaris",
    description:
      "Float above the savanna at sunrise for breathtaking views of wildlife and landscapes.",
    duration: "3–4 hours",
    intensity: "Low",
    locations: ["Serengeti", "Tarangire"],
    image: "/images/ballon.jpg",
  },
  {
    id: 2,
    title: "Safari Game Drives",
    description:
      "Observe Tanzania's incredible wildlife up close in their natural habitat with expert guides.",
    duration: "Half-day to full-day",
    intensity: "Low",
    locations: ["Serengeti", "Ngorongoro", "Tarangire"],
    image: "/images/Zebras.jpg",
  },
  {
    id: 3,
    title: "Mount Kilimanjaro Trekking",
    description:
      "Challenge yourself on Africa’s highest peak with guided treks and stunning landscapes.",
    duration: "5–9 days",
    intensity: "High",
    locations: ["Mount Kilimanjaro"],
    image: "/images/Kilimanjaro.jpg",
  },
  {
    id: 4,
    title: "Zanzibar Beach Relaxation",
    description:
      "Unwind on white sandy beaches with crystal clear waters, perfect for snorkeling and sunsets.",
    duration: "Flexible stay",
    intensity: "Low",
    locations: ["Zanzibar"],
    image: "/images/Zanzibar.jpg",
  },
  {
    id: 5,
    title: "Cultural Village Tours",
    description:
      "Experience authentic Maasai and other tribal cultures with guided village experiences.",
    duration: "2–3 hours",
    intensity: "Medium",
    locations: ["Arusha", "Lake Eyasi"],
    image: "/images/Cultural.jpg",
  },
  {
    id: 6,
    title: "Walking Safaris",
    description:
      "Step into the wild with expert rangers for an intimate experience with nature and wildlife.",
    duration: "2–5 hours",
    intensity: "Medium",
    locations: ["Selous", "Ruaha"],
    image: "/images/Walking.jpg",
  },
];
