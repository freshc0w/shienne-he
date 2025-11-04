export type CarouselItem = {
  id: string;
  title: string;
  metric: string;
  imageUrl: string;
  category: string;
};

export const carouselData: CarouselItem[] = [
  {
    id: "1",
    title: "Mountain Adventures",
    metric: "+45% Engagement Rate",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop",
    category: "Outdoor & Travel",
  },
  {
    id: "2",
    title: "Urban Lifestyle",
    metric: "+62% Conversion Rate",
    imageUrl:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=1000&fit=crop",
    category: "Fashion & Design",
  },
  {
    id: "3",
    title: "Tech Innovation",
    metric: "$850K Revenue Generated",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1000&fit=crop",
    category: "Technology",
  },
  {
    id: "4",
    title: "Creative Studio",
    metric: "1.2M Impressions",
    imageUrl:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=1000&fit=crop",
    category: "Art & Design",
  },
];

