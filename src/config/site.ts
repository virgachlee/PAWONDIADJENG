export const siteConfig = {
  name: "PAWON DIADJENG",
  title: "PAWON DIADJENG - Sugeng Dhahar",
  description:
    "Pawon Diadjeng menghadirkan cita rasa otentik masakan Jawa dari resep warisan keluarga, disajikan hangat di tengah suasana rumah tradisional Yogyakarta.",
  locale: "id_ID",
  defaultImage: "/og.png",
  address: {
    street: "Wonosari, Gunung Kidul",
    locality: "Yogyakarta",
    postalCode: "55851",
    country: "Indonesia",
  },
  phone: "+62 821-2277-3303",
  email: "pawondiadjeng@gmail.com",
  nav: [
    { label: "Tentang Kami", href: "#Tentang Kami" },
    { label: "Menu", href: "#Menu Pawon Diadjeng" },
    { label: "Chef", href: "#chef" },
    { label: "Nuansa", href: "#interior" },
  ],
  reservation: {
    formAction: "mailto:pawondiadjeng@gmail.com",
    method: "post",
    whatsapp: "https://wa.me/qr/S7H4ENK2ULQIP1",
    note: "Reservasi bisa lewat form (masuk ke email) atau langsung chat WhatsApp.",
  },
  hours: {
    serviceDays: "Sabtu - Kamis",
    seatings: "09.00 - 22.00 WIB",
    closed: "Jumat",
    schema: {
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
      opens: "09:00",
      closes: "22:00",
    },
  },
  restaurant: {
    priceRange: "Rp10.000 - Rp50.000",
    cuisine: ["Masakan Jawa", "Kuliner Tradisional", "Rumahan"],
  },
  effects: {
    reveal: true,
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/pawon.diadjeng?igsh=MWVwZnA4N3N4NmIycw==" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;