export type Tour = {
  id: number;
  title: string;
  duration: string;
  image: string;
  description: string;
  detailedInfo: {
    overview: string;
    highlights: string[];
    included: string[];
    itinerary: string[];
  };
};

export const tours: Tour[] = [
  {
    id: 1,
    title: "Wildlife Safari Adventure",
    duration: "4 Days",
    image: "/images/Lion-with-is-young-ones.jpeg",
    description: "Experience Tanzania's incredible wildlife in their natural habitat with expert guides through Serengeti and Tarangire National Parks.",
    detailedInfo: {
      overview: "This 4-day wildlife safari takes you through Tanzania's most famous national parks, offering unparalleled opportunities to witness the Big Five and countless other species in their natural environment.",
      highlights: [
        "Game drives in Serengeti National Park",
        "Visit to Tarangire National Park famous for elephants",
        "Professional safari guide and 4WD vehicle",
        "Chance to see lions, elephants, leopards, and more",
        "Stunning landscape photography opportunities"
      ],
      included: [
        "Airport transfers",
        "Professional safari guide",
        "4WD safari vehicle with pop-up roof",
        "Park entrance fees",
        "Accommodation in safari lodges",
        "All meals during safari",
        "Bottled water during game drives"
      ],
      itinerary: [
        "Day 1: Arrival in Arusha, transfer to Tarangire National Park",
        "Day 2: Full day game drive in Tarangire, evening at lodge",
        "Day 3: Transfer to Serengeti, afternoon game drive",
        "Day 4: Morning game drive, return to Arusha for departure"
      ]
    }
  },
  {
    id: 2,
    title: "Ngorongoro Crater Safari",
    duration: "3 Days",
    image: "/images/Playing-Elephant.jpeg",
    description: "Explore the world's largest intact volcanic caldera, home to over 25,000 large animals including the rare black rhino.",
    detailedInfo: {
      overview: "The Ngorongoro Crater is often called the 'Eighth Wonder of the World' and offers one of the most concentrated wildlife viewing experiences in Africa.",
      highlights: [
        "Descent into Ngorongoro Crater floor",
        "High chance of seeing all Big Five animals",
        "Visit to Maasai village for cultural experience",
        "Spectacular crater rim views",
        "Unique ecosystem with diverse wildlife"
      ],
      included: [
        "Crater descent permits",
        "Professional guide and 4WD vehicle",
        "Cultural village visit",
        "Accommodation with crater views",
        "All meals and refreshments",
        "Binoculars for wildlife viewing"
      ],
      itinerary: [
        "Day 1: Arusha to Ngorongoro Conservation Area",
        "Day 2: Full day crater floor exploration and Maasai village visit",
        "Day 3: Crater rim activities and return to Arusha"
      ]
    }
  },
  {
    id: 3,
    title: "Kilimanjaro Trekking",
    duration: "7 Days",
    image: "/images/Treking.png",
    description: "Conquer Africa's highest peak via the scenic Machame route, known for its diverse landscapes and high success rate.",
    detailedInfo: {
      overview: "This 7-day Kilimanjaro trek via the Machame route offers the best acclimatization profile and stunning scenery, maximizing your chances of reaching Uhuru Peak.",
      highlights: [
        "Summit Africa's highest peak at 5,895m",
        "Traverse through 5 distinct climate zones",
        "Experienced mountain guides and porters",
        "Machame route - the 'Whiskey Route'",
        "Certificate of achievement upon completion"
      ],
      included: [
        "Professional mountain guides and porters",
        "All park fees and permits",
        "Mountain tents and sleeping mats",
        "All meals on the mountain",
        "Emergency oxygen and first aid kit",
        "Airport transfers and pre-trek briefing"
      ],
      itinerary: [
        "Day 1: Machame Gate to Machame Camp (3,000m)",
        "Day 2: Machame Camp to Shira Camp (3,840m)",
        "Day 3: Shira Camp to Barranco Camp (3,960m)",
        "Day 4: Barranco to Karanga Camp (4,035m)",
        "Day 5: Karanga to Barafu Camp (4,640m)",
        "Day 6: Summit Day - Barafu to Uhuru Peak to Mweka Camp",
        "Day 7: Mweka Camp to Mweka Gate, return to Arusha"
      ]
    }
  },
  {
    id: 4,
    title: "Zanzibar Beach Getaway",
    duration: "5 Days",
    image: "/images/Beach.png",
    description: "Relax on pristine white sand beaches, explore Stone Town's rich history, and enjoy world-class snorkeling in crystal-clear waters.",
    detailedInfo: {
      overview: "Escape to the tropical paradise of Zanzibar, where pristine beaches meet rich cultural heritage in this perfect blend of relaxation and exploration.",
      highlights: [
        "Pristine beaches with crystal-clear waters",
        "UNESCO World Heritage Stone Town tour",
        "Spice plantation visit and cooking class",
        "Snorkeling at Mnemba Atoll",
        "Sunset dhow cruise experience"
      ],
      included: [
        "Beachfront accommodation",
        "Airport transfers in Zanzibar",
        "Stone Town guided tour",
        "Spice tour with lunch",
        "Snorkeling equipment and boat trip",
        "Sunset dhow cruise with refreshments"
      ],
      itinerary: [
        "Day 1: Arrival and Stone Town exploration",
        "Day 2: Spice tour and beach relaxation",
        "Day 3: Snorkeling excursion to Mnemba Atoll",
        "Day 4: Beach day and sunset dhow cruise",
        "Day 5: Final beach morning and departure"
      ]
    }
  },
  {
    id: 5,
    title: "Cultural Safari Experience",
    duration: "4 Days",
    image: "/images/image.png",
    description: "Immerse yourself in authentic Tanzanian culture with visits to Maasai villages, local markets, and traditional craft workshops.",
    detailedInfo: {
      overview: "This unique cultural safari combines wildlife viewing with authentic cultural experiences, offering deep insights into Tanzania's rich tribal heritage and traditions.",
      highlights: [
        "Authentic Maasai village homestay",
        "Traditional craft workshops and demonstrations",
        "Local market visits and cooking experiences",
        "Cultural performances and storytelling",
        "Wildlife viewing in cultural context"
      ],
      included: [
        "Cultural guide and interpreter",
        "Village homestay accommodation",
        "All meals with local families",
        "Craft workshop materials",
        "Cultural performance tickets",
        "Transportation and park fees"
      ],
      itinerary: [
        "Day 1: Arusha to Maasai village, welcome ceremony",
        "Day 2: Village life experience and craft workshops",
        "Day 3: Market visit, cooking class, and cultural performances",
        "Day 4: Morning wildlife drive and return to Arusha"
      ]
    }
  },
  {
    id: 6,
    title: "Great Migration Safari",
    duration: "6 Days",
    image: "/images/migration.png",
    description: "Witness one of nature's greatest spectacles as millions of wildebeest and zebras cross the Serengeti in their annual migration.",
    detailedInfo: {
      overview: "Time your visit perfectly to witness the Great Migration, one of the world's most spectacular wildlife events, featuring over 2 million animals on their eternal journey.",
      highlights: [
        "Witness the Great Migration river crossings",
        "Follow herds across Serengeti ecosystem",
        "Professional photography guidance",
        "Mobile camping for optimal positioning",
        "Predator action during migration season"
      ],
      included: [
        "Mobile camping equipment and setup",
        "Professional migration guide",
        "4WD vehicle with photography equipment",
        "All park fees and camping permits",
        "Full board meals and beverages",
        "Photography workshop and guidance"
      ],
      itinerary: [
        "Day 1: Arusha to Serengeti, locate migration herds",
        "Day 2-3: Follow migration movements, river crossing attempts",
        "Day 4-5: Predator interactions and herd dynamics",
        "Day 6: Final migration viewing and return to Arusha"
      ]
    }
  },
];
