import mongoose from "mongoose";
import "dotenv/config";
import User from "./models/user";
import Hotel from "./models/hotel";

const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost:27017/hotel-booking";

const mockHotels = (userId: string) => [
  // ==========================================
  // DUBLIN, IRELAND (3 Hotels)
  // ==========================================
  {
    userId,
    name: "Dublin Getaways Resort & Spa",
    city: "Dublin",
    country: "Ireland",
    description: "Experience premium Irish hospitality in the heart of Dublin. Dublin Getaways features a world-class luxury spa, an indoor heated pool, and award-winning dining options. Perfect for both business travellers and families looking to explore the historic city.",
    type: ["Resort", "Luxury", "Spa"],
    adultCount: 2,
    childCount: 2,
    facilities: ["Airport Shuttle", "Family Rooms", "Non-Smoking Rooms", "Spa", "Free WiFi", "Swimming Pool"],
    pricePerNight: 180,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 53.3498,
      longitude: -6.2603,
      address: {
        street: "12 O'Connell Street Lower",
        city: "Dublin",
        state: "Leinster",
        country: "Ireland",
        zipCode: "D01 A5T2"
      }
    },
    contact: {
      phone: "+353 1 123 4567",
      email: "info@dublingetaways.com",
      website: "https://dublingetaways.example.com"
    },
    policies: {
      checkInTime: "14:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation up to 24 hours before check-in",
      petPolicy: "Pets allowed upon request",
      smokingPolicy: "Non-smoking rooms only"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: true,
      gym: true,
      spa: true,
      restaurant: true,
      bar: true,
      airportShuttle: true,
      businessCenter: true
    },
    totalBookings: 12,
    totalRevenue: 2160,
    averageRating: 4.8,
    reviewCount: 34,
    occupancyRate: 75,
    isActive: true,
    isFeatured: true
  },
  {
    userId,
    name: "Temple Bar Boutique Inn",
    city: "Dublin",
    country: "Ireland",
    description: "Located right in the colorful, cobblestoned Temple Bar district, this boutique inn features trendy pop-art decor, a cozy lounge serving local stout, and immediate access to Dublin's best nightlife, dining, and cultural venues.",
    type: ["Boutique", "Modern"],
    adultCount: 2,
    childCount: 0,
    facilities: ["Free WiFi", "Non-Smoking Rooms", "Bar", "Elevator"],
    pricePerNight: 125,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 53.3454,
      longitude: -6.2644,
      address: {
        street: "4-5 Essex Street East",
        city: "Dublin",
        state: "Leinster",
        country: "Ireland",
        zipCode: "D02 EH98"
      }
    },
    contact: {
      phone: "+353 1 876 5432",
      email: "hello@templebarboutique.com",
      website: "https://templebarboutique.example.com"
    },
    policies: {
      checkInTime: "15:00",
      checkOutTime: "12:00",
      cancellationPolicy: "Free cancellation 48h prior",
      petPolicy: "Pets not allowed",
      smokingPolicy: "Strictly non-smoking"
    },
    amenities: {
      parking: false,
      wifi: true,
      pool: false,
      gym: false,
      spa: false,
      restaurant: false,
      bar: true,
      airportShuttle: false,
      businessCenter: false
    },
    totalBookings: 24,
    totalRevenue: 3000,
    averageRating: 4.2,
    reviewCount: 45,
    occupancyRate: 85,
    isActive: true,
    isFeatured: false
  },
  {
    userId,
    name: "Trinity College Suites",
    city: "Dublin",
    country: "Ireland",
    description: "Elegant and spacious suite apartments overlooking the classic architecture of Trinity College. Fully equipped with modern kitchenettes, luxury bedding, and high-speed working desks. Ideal for academic visitors and families on longer stays.",
    type: ["Apartment", "Luxury"],
    adultCount: 4,
    childCount: 2,
    facilities: ["Free WiFi", "Family Rooms", "Kitchenette", "Washing Machine"],
    pricePerNight: 210,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 53.3444,
      longitude: -6.2577,
      address: {
        street: "2 College Green",
        city: "Dublin",
        state: "Leinster",
        country: "Ireland",
        zipCode: "D02 VR66"
      }
    },
    contact: {
      phone: "+353 1 555 9811",
      email: "reservations@trinitysuites.com",
      website: "https://trinitysuites.example.com"
    },
    policies: {
      checkInTime: "16:00",
      checkOutTime: "10:00",
      cancellationPolicy: "Free cancellation 7 days prior",
      petPolicy: "Small dogs allowed with deposit",
      smokingPolicy: "Non-smoking only"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: false,
      gym: true,
      spa: false,
      restaurant: false,
      bar: false,
      airportShuttle: true,
      businessCenter: true
    },
    totalBookings: 6,
    totalRevenue: 1260,
    averageRating: 4.5,
    reviewCount: 15,
    occupancyRate: 60,
    isActive: true,
    isFeatured: false
  },

  // ==========================================
  // PARIS, FRANCE (3 Hotels)
  // ==========================================
  {
    userId,
    name: "Paris Grand Elysian",
    city: "Paris",
    country: "France",
    description: "Located steps away from the Champs-Élysées, Paris Grand Elysian offers elegant Parisian-style rooms, a rooftop terrace with views of the Eiffel Tower, and a Michelin-starred restaurant. Indulge in classic luxury and outstanding convenience.",
    type: ["Luxury", "Boutique"],
    adultCount: 2,
    childCount: 1,
    facilities: ["Free WiFi", "Fitness Center", "Bar", "Room Service", "Non-Smoking Rooms"],
    pricePerNight: 290,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      address: {
        street: "75 Rue de Rivoli",
        city: "Paris",
        state: "Île-de-France",
        country: "France",
        zipCode: "75001"
      }
    },
    contact: {
      phone: "+33 1 9876 5432",
      email: "reservations@grandelysian.com",
      website: "https://grandelysian.example.com"
    },
    policies: {
      checkInTime: "15:00",
      checkOutTime: "12:00",
      cancellationPolicy: "Non-refundable booking",
      petPolicy: "No pets allowed",
      smokingPolicy: "Entirely non-smoking"
    },
    amenities: {
      parking: false,
      wifi: true,
      pool: false,
      gym: true,
      spa: false,
      restaurant: true,
      bar: true,
      airportShuttle: false,
      businessCenter: true
    },
    totalBookings: 8,
    totalRevenue: 2320,
    averageRating: 4.6,
    reviewCount: 22,
    occupancyRate: 85,
    isActive: true,
    isFeatured: true
  },
  {
    userId,
    name: "Hotel de la Seine",
    city: "Paris",
    country: "France",
    description: "Overlooking the beautiful banks of the River Seine, this romantic boutique hotel features custom vintage furniture, French balconies, and a daily afternoon wine & cheese social hour. Walk easily to Notre-Dame and the Louvre.",
    type: ["Boutique", "Historic"],
    adultCount: 2,
    childCount: 0,
    facilities: ["Free WiFi", "Bar", "Non-Smoking Rooms", "Airport Shuttle"],
    pricePerNight: 165,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 48.8530,
      longitude: 2.3499,
      address: {
        street: "24 Quai de la Megisserie",
        city: "Paris",
        state: "Île-de-France",
        country: "France",
        zipCode: "75001"
      }
    },
    contact: {
      phone: "+33 1 4545 0909",
      email: "frontdesk@hoteldelaseine.com",
      website: "https://hoteldelaseine.example.com"
    },
    policies: {
      checkInTime: "14:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation 24h prior",
      petPolicy: "Pets welcome",
      smokingPolicy: "Designated outdoor smoking area"
    },
    amenities: {
      parking: false,
      wifi: true,
      pool: false,
      gym: false,
      spa: false,
      restaurant: false,
      bar: true,
      airportShuttle: true,
      businessCenter: false
    },
    totalBookings: 19,
    totalRevenue: 3135,
    averageRating: 4.4,
    reviewCount: 38,
    occupancyRate: 80,
    isActive: true,
    isFeatured: false
  },
  {
    userId,
    name: "Montmartre Artistic Lodge",
    city: "Paris",
    country: "France",
    description: "Immerse yourself in Paris's historical arts district. This charming rustic lodge sits on a cobblestoned alleyway just minutes from Sacré-Cœur. Features paintings by local artists, a delightful courtyard breakfast, and very friendly host staff.",
    type: ["Budget", "Rustic"],
    adultCount: 2,
    childCount: 1,
    facilities: ["Free WiFi", "Family Rooms", "Non-Smoking Rooms", "Breakfast Included"],
    pricePerNight: 98,
    starRating: 3,
    imageUrls: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 48.8867,
      longitude: 2.3431,
      address: {
        street: "18 Rue des Trois Frères",
        city: "Paris",
        state: "Île-de-France",
        country: "France",
        zipCode: "75018"
      }
    },
    contact: {
      phone: "+33 1 3333 4444",
      email: "contact@montmartrelodge.com",
      website: "https://montmartrelodge.example.com"
    },
    policies: {
      checkInTime: "14:00",
      checkOutTime: "10:30",
      cancellationPolicy: "Free cancellation 48h prior",
      petPolicy: "No pets allowed",
      smokingPolicy: "Non-smoking"
    },
    amenities: {
      parking: false,
      wifi: true,
      pool: false,
      gym: false,
      spa: false,
      restaurant: true,
      bar: false,
      airportShuttle: false,
      businessCenter: false
    },
    totalBookings: 11,
    totalRevenue: 1078,
    averageRating: 4.1,
    reviewCount: 20,
    occupancyRate: 65,
    isActive: true,
    isFeatured: false
  },

  // ==========================================
  // DELHI, INDIA (3 Hotels)
  // ==========================================
  {
    userId,
    name: "The Taj Mahal Legacy",
    city: "Delhi",
    country: "India",
    description: "A gorgeous luxury heritage estate in New Delhi displaying imperial architecture and lush gardens. The Taj Mahal Legacy provides state-of-the-art wellness centers, rich banqueting venues, and diverse culinary journeys representing world-wide traditions.",
    type: ["Luxury", "Heritage"],
    adultCount: 2,
    childCount: 0,
    facilities: ["Free WiFi", "Swimming Pool", "Spa", "Airport Shuttle", "Bar", "Fitness Center"],
    pricePerNight: 150,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 28.6139,
      longitude: 77.209,
      address: {
        street: "1 Mansingh Road",
        city: "Delhi",
        state: "Delhi NCR",
        country: "India",
        zipCode: "110011"
      }
    },
    contact: {
      phone: "+91 11 2302 6161",
      email: "tajlegacy@tajhotels.example.com",
      website: "https://tajlegacy.example.com"
    },
    policies: {
      checkInTime: "14:00",
      checkOutTime: "12:00",
      cancellationPolicy: "Free cancellation up to 48 hours before check-in",
      petPolicy: "Pets are not allowed",
      smokingPolicy: "Designated smoking zones available"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: true,
      gym: true,
      spa: true,
      restaurant: true,
      bar: true,
      airportShuttle: true,
      businessCenter: true
    },
    totalBookings: 25,
    totalRevenue: 3750,
    averageRating: 4.9,
    reviewCount: 78,
    occupancyRate: 90,
    isActive: true,
    isFeatured: true
  },
  {
    userId,
    name: "Connaught Place Premium Suites",
    city: "Delhi",
    country: "India",
    description: "Centrally located in Delhi's premier business and shopping circle, Connaught Place Premium Suites offers modern rooms with tech amenities, premium lounge access, and a multi-cuisine rooftop grill. Direct connection to Delhi Metro.",
    type: ["Modern", "Business"],
    adultCount: 2,
    childCount: 1,
    facilities: ["Free WiFi", "Bar", "Fitness Center", "Laundry Service", "Non-Smoking Rooms"],
    pricePerNight: 85,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 28.6304,
      longitude: 77.2177,
      address: {
        street: "Blocks E & F, Connaught Place Outer Circle",
        city: "Delhi",
        state: "Delhi NCR",
        country: "India",
        zipCode: "110001"
      }
    },
    contact: {
      phone: "+91 11 4455 6677",
      email: "booking@cppremiumsuites.com",
      website: "https://cppremiumsuites.example.com"
    },
    policies: {
      checkInTime: "12:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation 24h prior",
      petPolicy: "Pets not allowed",
      smokingPolicy: "Smoking permitted in designated balcony rooms"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: false,
      gym: true,
      spa: false,
      restaurant: true,
      bar: true,
      airportShuttle: true,
      businessCenter: true
    },
    totalBookings: 42,
    totalRevenue: 3570,
    averageRating: 4.3,
    reviewCount: 60,
    occupancyRate: 88,
    isActive: true,
    isFeatured: false
  },
  {
    userId,
    name: "New Delhi Courtyard",
    city: "Delhi",
    country: "India",
    description: "A comfortable, budget-friendly modern hotel offering cozy rooms, local breakfast specialties, and outstanding value. Clean, safe, and highly rated for friendly service and sightseeing support.",
    type: ["Budget", "Modern"],
    adultCount: 3,
    childCount: 1,
    facilities: ["Free WiFi", "Air Conditioning", "Room Service", "Breakfast Included"],
    pricePerNight: 45,
    starRating: 3,
    imageUrls: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 28.643,
      longitude: 77.2012,
      address: {
        street: "14 Karol Bagh Metro Pillar 110",
        city: "Delhi",
        state: "Delhi NCR",
        country: "India",
        zipCode: "110005"
      }
    },
    contact: {
      phone: "+91 11 9988 7766",
      email: "info@delhicourtyard.com",
      website: "https://delhicourtyard.example.com"
    },
    policies: {
      checkInTime: "12:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation up to 12h prior",
      petPolicy: "Pets welcome (fees apply)",
      smokingPolicy: "Non-smoking rooms"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: false,
      gym: false,
      spa: false,
      restaurant: true,
      bar: false,
      airportShuttle: true,
      businessCenter: false
    },
    totalBookings: 51,
    totalRevenue: 2295,
    averageRating: 4.1,
    reviewCount: 95,
    occupancyRate: 82,
    isActive: true,
    isFeatured: false
  },

  // ==========================================
  // TOKYO, JAPAN (3 Hotels)
  // ==========================================
  {
    userId,
    name: "Tokyo Shinjuku Skyline Hotel",
    city: "Tokyo",
    country: "Japan",
    description: "Located high above the bustling streets of Shinjuku, this modern high-rise offers magnificent vistas of Mount Fuji and the city lights. Features clean minimalist designs, high-tech amenities, and easy connection to the main subway terminal.",
    type: ["Modern", "Budget"],
    adultCount: 2,
    childCount: 0,
    facilities: ["Free WiFi", "Non-Smoking Rooms", "Laundry Service", "Restaurant"],
    pricePerNight: 95,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1506059612708-99d6c258160e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 35.6895,
      longitude: 139.6917,
      address: {
        street: "2-1-1 Nishi-Shinjuku",
        city: "Tokyo",
        state: "Tokyo Prefecture",
        country: "Japan",
        zipCode: "163-8001"
      }
    },
    contact: {
      phone: "+81 3 3456 7890",
      email: "contact@tokyoskyline.jp",
      website: "https://tokyoskyline.example.com"
    },
    policies: {
      checkInTime: "15:00",
      checkOutTime: "10:00",
      cancellationPolicy: "Free cancellation up to 24 hours before check-in",
      petPolicy: "Service animals only",
      smokingPolicy: "Strictly non-smoking"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: false,
      gym: false,
      spa: false,
      restaurant: true,
      bar: false,
      airportShuttle: false,
      businessCenter: false
    },
    totalBookings: 18,
    totalRevenue: 1710,
    averageRating: 4.3,
    reviewCount: 41,
    occupancyRate: 80,
    isActive: true,
    isFeatured: false
  },
  {
    userId,
    name: "Shibuya Crossing Capsule & Suites",
    city: "Tokyo",
    country: "Japan",
    description: "Located right behind the famous Shibuya Crossing, this innovative hotel features custom high-tech sleeping pods alongside premium private studio suites. Complete with a gaming room, a coworking floor, and a vibrant cyber-punk theme lounge.",
    type: ["Modern", "Budget"],
    adultCount: 1,
    childCount: 0,
    facilities: ["Free WiFi", "Air Conditioning", "Gameroom", "Coworking Space"],
    pricePerNight: 55,
    starRating: 3,
    imageUrls: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 35.6580,
      longitude: 139.7016,
      address: {
        street: "1-23-10 Shibuya",
        city: "Tokyo",
        state: "Tokyo Prefecture",
        country: "Japan",
        zipCode: "150-0002"
      }
    },
    contact: {
      phone: "+81 3 9988 1122",
      email: "bookings@shibuyacrossingcapsules.jp",
      website: "https://shibuyacapsules.example.com"
    },
    policies: {
      checkInTime: "16:00",
      checkOutTime: "10:00",
      cancellationPolicy: "Non-refundable for capsules, 24h prior for suites",
      petPolicy: "No pets allowed",
      smokingPolicy: "Entirely non-smoking"
    },
    amenities: {
      parking: false,
      wifi: true,
      pool: false,
      gym: false,
      spa: false,
      restaurant: false,
      bar: true,
      airportShuttle: false,
      businessCenter: true
    },
    totalBookings: 89,
    totalRevenue: 4895,
    averageRating: 4.5,
    reviewCount: 120,
    occupancyRate: 92,
    isActive: true,
    isFeatured: false
  },
  {
    userId,
    name: "Kyoto Ryokan Tokyo Branch",
    city: "Tokyo",
    country: "Japan",
    description: "Experience authentic traditional Japanese lodging right in central Tokyo. Featuring tatami mat flooring, cypress wood onsen-style baths, shoji sliding paper doors, and a spectacular seasonal multi-course Kaiseki dinner served to your room.",
    type: ["Heritage", "Luxury", "Spa"],
    adultCount: 2,
    childCount: 1,
    facilities: ["Onsen Bath", "Free WiFi", "Breakfast & Dinner Included", "Japanese Garden"],
    pricePerNight: 350,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 35.6762,
      longitude: 139.7650,
      address: {
        street: "3-5-1 Ginza",
        city: "Tokyo",
        state: "Tokyo Prefecture",
        country: "Japan",
        zipCode: "104-0061"
      }
    },
    contact: {
      phone: "+81 3 4567 1122",
      email: "info@ryokantokyobranch.jp",
      website: "https://ryokantokyobranch.example.com"
    },
    policies: {
      checkInTime: "15:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation 7 days before check-in",
      petPolicy: "No pets allowed",
      smokingPolicy: "Designated smoking room available"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: false,
      gym: false,
      spa: true,
      restaurant: true,
      bar: true,
      airportShuttle: true,
      businessCenter: false
    },
    totalBookings: 15,
    totalRevenue: 5250,
    averageRating: 4.9,
    reviewCount: 45,
    occupancyRate: 95,
    isActive: true,
    isFeatured: true
  },

  // ==========================================
  // NEW YORK, USA (3 Hotels)
  // ==========================================
  {
    userId,
    name: "Central Park Vista",
    city: "New York",
    country: "United States",
    description: "Overlooking Central Park, this stunning modern hotel blends urban vibes with luxury. Offering spacious suites, private balconies, and exceptional service in the center of Manhattan.",
    type: ["Luxury", "Modern"],
    adultCount: 2,
    childCount: 2,
    facilities: ["Free WiFi", "Fitness Center", "Family Rooms", "Valet Parking", "Restaurant"],
    pricePerNight: 240,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 40.7829,
      longitude: -73.9654,
      address: {
        street: "59 Central Park West",
        city: "New York",
        state: "New York",
        country: "United States",
        zipCode: "10023"
      }
    },
    contact: {
      phone: "+1 212 555 0199",
      email: "info@centralparkvista.com",
      website: "https://centralparkvista.example.com"
    },
    policies: {
      checkInTime: "16:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation up to 24 hours before check-in",
      petPolicy: "Pets welcome",
      smokingPolicy: "Non-smoking only"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: false,
      gym: true,
      spa: false,
      restaurant: true,
      bar: true,
      airportShuttle: false,
      businessCenter: true
    },
    totalBookings: 15,
    totalRevenue: 3600,
    averageRating: 4.5,
    reviewCount: 29,
    occupancyRate: 70,
    isActive: true,
    isFeatured: false
  },
  {
    userId,
    name: "Times Square Broadway Hotel",
    city: "New York",
    country: "United States",
    description: "Be in the middle of it all! Located right in Times Square, this vibrant modern hotel offers soundproof floor-to-ceiling windows, high-speed Wi-Fi, custom luxury bedding, and a rooftop bar overlooking Broadway's iconic glowing theaters.",
    type: ["Modern", "Luxury"],
    adultCount: 2,
    childCount: 1,
    facilities: ["Free WiFi", "Rooftop Bar", "Non-Smoking Rooms", "Soundproof Windows", "Valet Parking"],
    pricePerNight: 280,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 40.7580,
      longitude: -73.9855,
      address: {
        street: "1500 Broadway",
        city: "New York",
        state: "New York",
        country: "United States",
        zipCode: "10036"
      }
    },
    contact: {
      phone: "+1 212 555 9900",
      email: "booking@timesquarebroadway.com",
      website: "https://timesquarebroadway.example.com"
    },
    policies: {
      checkInTime: "15:00",
      checkOutTime: "12:00",
      cancellationPolicy: "Free cancellation 24h prior",
      petPolicy: "No pets allowed",
      smokingPolicy: "Strictly non-smoking"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: false,
      gym: true,
      spa: false,
      restaurant: true,
      bar: true,
      airportShuttle: false,
      businessCenter: true
    },
    totalBookings: 60,
    totalRevenue: 16800,
    averageRating: 4.7,
    reviewCount: 154,
    occupancyRate: 95,
    isActive: true,
    isFeatured: true
  },
  {
    userId,
    name: "Brooklyn Bridge Loft & Rooms",
    city: "New York",
    country: "United States",
    description: "Located in the artistic DUMBO district, this industrial-chic loft hotel features exposed red brick, large warehouse-style windows overlooking the Brooklyn Bridge and the East River, and a beautiful plant-filled indoor garden atrium.",
    type: ["Boutique", "Modern"],
    adultCount: 2,
    childCount: 0,
    facilities: ["Free WiFi", "Bar", "Coffee Shop", "Indoor Garden", "Bicycle Rental"],
    pricePerNight: 195,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 40.7033,
      longitude: -73.9898,
      address: {
        street: "55 Water Street",
        city: "New York",
        state: "New York",
        country: "United States",
        zipCode: "11201"
      }
    },
    contact: {
      phone: "+1 718 555 0100",
      email: "reception@brooklynbridgelofts.com",
      website: "https://brooklynbridgelofts.example.com"
    },
    policies: {
      checkInTime: "15:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation 48h prior",
      petPolicy: "Dogs allowed with welcome kit",
      smokingPolicy: "Non-smoking only"
    },
    amenities: {
      parking: false,
      wifi: true,
      pool: false,
      gym: false,
      spa: false,
      restaurant: true,
      bar: true,
      airportShuttle: false,
      businessCenter: false
    },
    totalBookings: 28,
    totalRevenue: 5460,
    averageRating: 4.6,
    reviewCount: 52,
    occupancyRate: 85,
    isActive: true,
    isFeatured: false
  },

  // ==========================================
  // KARNAL, INDIA (1 Hotel)
  // ==========================================
  {
    userId,
    name: "The Oasis Resort Karnal",
    city: "Karnal",
    country: "India",
    description: "Nestled along the highway, The Oasis Resort Karnal offers a serene retreat with beautiful green lawns, modern luxury rooms, and an outstanding multi-cuisine restaurant serving traditional highway delicacies. Perfect for transit travelers and families looking for a weekend getaway.",
    type: ["Resort", "Modern"],
    adultCount: 2,
    childCount: 1,
    facilities: ["Free WiFi", "Swimming Pool", "Family Rooms", "Free Parking", "Restaurant"],
    pricePerNight: 70,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 29.6857,
      longitude: 76.9905,
      address: {
        street: "GT Road, Near Oasis Lake",
        city: "Karnal",
        state: "Haryana",
        country: "India",
        zipCode: "132001"
      }
    },
    contact: {
      phone: "+91 184 222 3344",
      email: "contact@oasiskarnal.com",
      website: "https://oasiskarnal.example.com"
    },
    policies: {
      checkInTime: "12:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation 24h prior",
      petPolicy: "No pets allowed",
      smokingPolicy: "Designated smoking areas only"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: true,
      gym: false,
      spa: false,
      restaurant: true,
      bar: false,
      airportShuttle: false,
      businessCenter: true
    },
    totalBookings: 14,
    totalRevenue: 980,
    averageRating: 4.4,
    reviewCount: 25,
    occupancyRate: 65,
    isActive: true,
    isFeatured: false
  },

  // ==========================================
  // MOHALI, INDIA (1 Hotel)
  // ==========================================
  {
    userId,
    name: "Mohali Heights Luxury Hotel",
    city: "Mohali",
    country: "India",
    description: "Located near the PCA Cricket Stadium, Mohali Heights offers premium executive suites, a modern business lounge, a fully equipped gym, and a multi-cuisine diner. Perfect for business travelers and sports fans visiting the tricity area.",
    type: ["Luxury", "Business"],
    adultCount: 2,
    childCount: 1,
    facilities: ["Free WiFi", "Fitness Center", "Valet Parking", "Airport Shuttle", "Restaurant"],
    pricePerNight: 85,
    starRating: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 30.6799,
      longitude: 76.7221,
      address: {
        street: "Phase 3B2, Sector 60",
        city: "Mohali",
        state: "Punjab",
        country: "India",
        zipCode: "160059"
      }
    },
    contact: {
      phone: "+91 172 555 4321",
      email: "info@mohaliheights.com",
      website: "https://mohaliheights.example.com"
    },
    policies: {
      checkInTime: "14:00",
      checkOutTime: "12:00",
      cancellationPolicy: "Free cancellation 24h prior",
      petPolicy: "No pets allowed",
      smokingPolicy: "Non-smoking only"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: false,
      gym: true,
      spa: false,
      restaurant: true,
      bar: true,
      airportShuttle: true,
      businessCenter: true
    },
    totalBookings: 8,
    totalRevenue: 680,
    averageRating: 4.3,
    reviewCount: 12,
    occupancyRate: 50,
    isActive: true,
    isFeatured: false
  },

  // ==========================================
  // CHANDIGARH, INDIA (1 Hotel)
  // ==========================================
  {
    userId,
    name: "The Chandigarh Grand Plaza",
    city: "Chandigarh",
    country: "India",
    description: "Nestled in Sector 17, Chandigarh's premier commercial hub, The Chandigarh Grand Plaza represents French architectural influences coupled with modern Indian hospitality. Indulge in our rooftop pool overlooking the City Beautiful, and enjoy easy access to Sukhna Lake and Rock Garden.",
    type: ["Luxury", "Boutique"],
    adultCount: 2,
    childCount: 0,
    facilities: ["Free WiFi", "Swimming Pool", "Rooftop Bar", "Spa", "Free Parking"],
    pricePerNight: 120,
    starRating: 5,
    imageUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80"
    ],
    lastUpdated: new Date(),
    location: {
      latitude: 30.7333,
      longitude: 76.7794,
      address: {
        street: "Sector 17-A",
        city: "Chandigarh",
        state: "Chandigarh UT",
        country: "India",
        zipCode: "160017"
      }
    },
    contact: {
      phone: "+91 172 123 4567",
      email: "booking@grandplazachandigarh.com",
      website: "https://grandplazachandigarh.example.com"
    },
    policies: {
      checkInTime: "14:00",
      checkOutTime: "12:00",
      cancellationPolicy: "Free cancellation 48h prior",
      petPolicy: "Pets welcome",
      smokingPolicy: "Designated smoking zones only"
    },
    amenities: {
      parking: true,
      wifi: true,
      pool: true,
      gym: true,
      spa: true,
      restaurant: true,
      bar: true,
      airportShuttle: true,
      businessCenter: true
    },
    totalBookings: 22,
    totalRevenue: 2640,
    averageRating: 4.8,
    reviewCount: 45,
    occupancyRate: 80,
    isActive: true,
    isFeatured: true
  }
];

const seedDatabase = async () => {
  try {
    console.log("📡 Seeding database: connecting to MongoDB...");
    await mongoose.connect(MONGODB_CONNECTION_STRING);
    console.log("✅ Connected to MongoDB");

    // Clear existing collections
    console.log("🗑 Cleansing collections (users and hotels)...");
    await User.deleteMany({});
    await Hotel.deleteMany({});
    console.log("✅ Database cleared");

    // Create a default test user
    console.log("👤 Creating default test user...");
    const testUser = new User({
      email: "1@1.com",
      password: "password123", // Will be hashed automatically by userSchema pre-save hook
      firstName: "Default",
      lastName: "Tester",
      role: "hotel_owner",
      isActive: true,
      emailVerified: true
    });
    
    await testUser.save();
    console.log("✅ Default user created (Email: 1@1.com, Password: password123)");

    // Create a secondary normal user
    console.log("👤 Creating second user...");
    const secondUser = new User({
      email: "user@example.com",
      password: "password123",
      firstName: "Regular",
      lastName: "User",
      role: "user",
      isActive: true,
      emailVerified: true
    });
    await secondUser.save();
    console.log("✅ Regular user created (Email: user@example.com, Password: password123)");

    // Insert mock hotels linked to the default test user
    console.log("🏨 Inserting mock hotels...");
    const hotelsData = mockHotels(testUser._id.toString());
    await Hotel.insertMany(hotelsData);
    console.log(`✅ Seeded ${hotelsData.length} hotels successfully!`);

    console.log("🎉 Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding database failed:", error);
    process.exit(1);
  }
};

seedDatabase();
