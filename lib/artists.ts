export interface Artist {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  experience: string;
  awards: string[];
  styles: string[];
}

export const artists: Artist[] = [
  {
    id: "alex-kumar",
    name: "Alex Kumar",
    specialty: "Master of Realism",
    bio: "With over 10 years of experience, Alex specializes in hyper-realistic portraiture and micro-realism. His attention to detail makes him one of the most sought-after artists for memorial and portrait tattoos.",
    image: "/placeholder-user.jpg",
    experience: "10+ Years",
    awards: ["Best of Day - InkFest 2023", "1st Place Realism - National Tattoo Convention 2022"],
    styles: ["Realism", "Portrait", "Black & Grey"]
  },
  {
    id: "maya-patel",
    name: "Maya Patel",
    specialty: "Traditional Japanese & Neo-Traditional",
    bio: "Maya brings ancient folklore to life with bold lines and vibrant colors. Her deep understanding of Irezumi makes her the go-to artist for large-scale Japanese pieces.",
    image: "/placeholder-user.jpg",
    experience: "8 Years",
    awards: ["Best Large Color - Asia Ink Expo 2023"],
    styles: ["Japanese", "Neo-Traditional", "Color"]
  },
  {
    id: "rahul-singh",
    name: "Rahul Singh",
    specialty: "Geometric & Mandala",
    bio: "Rahul's precision is unmatched. He crafts intricate geometric patterns, dotwork, and sacred mandalas that flow perfectly with the body's natural anatomy.",
    image: "/placeholder-user.jpg",
    experience: "6 Years",
    awards: ["Best Dotwork - DotFest 2021"],
    styles: ["Geometric", "Dotwork", "Mandala", "Blackwork"]
  },
  {
    id: "arjun-desai",
    name: "Arjun Desai",
    specialty: "Minimalism & Fine Line",
    bio: "Arjun is the king of delicate, elegant fine line tattoos. His work is perfect for those seeking subtle, sophisticated, and highly meaningful minimalist art.",
    image: "/placeholder-user.jpg",
    experience: "5 Years",
    awards: ["Rising Star - Fine Line Masters 2022"],
    styles: ["Fine Line", "Minimalist", "Typography"]
  }
];

export async function getArtistById(id: string): Promise<Artist | undefined> {
  return artists.find(artist => artist.id === id);
}
