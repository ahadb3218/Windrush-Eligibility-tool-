export interface Veteran {
    id: number;
    image: string;
    name: string;
    description: string;
  }
  
  export const veterans: Veteran[] = [
    {
      id: 1,
      image: "/images/ulric-cross.jpg",
      name: "Ulric Cross",
      description: "Distinguished RAF Navigator and Diplomat who served with exceptional valor during World War II, earning multiple medals for his service."
    },
    {
      id: 2,
      image: "/images/cookie-alexander.jpg",
      name: "Mr A 'Cookie' Alexander",
      description: "Served as a cook aboard wartime merchant vessels, demonstrating remarkable courage in dangerous waters while keeping crew morale high."
    },
    {
      id: 3,
      image: "/images/h-watson.jpg",
      name: "Mr H Watson",
      description: "Royal Air Force veteran who showed extraordinary dedication and bravery in defending Britain's skies."
    },
    {
      id: 4,
      image: "/images/a-alphonse.jpg",
      name: "Mr A Alphonse",
      description: "Ex-soldier who served with distinction, earning multiple medals for his exemplary service and dedication to duty."
    }
  ];