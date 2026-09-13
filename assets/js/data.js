/* ============================================================================
   Elements — Shivani Shilotri · Portfolio data
   Single source of truth for every project tile.

   To add a real photo to any tile, set  image: "assets/img/work/your-file.jpg"
   and it will replace the placeholder cover automatically.

   media types:
     { type:"youtube", id:"VIDEOID" }  -> real thumbnail + in-page play
     { type:"vimeo",   id:"1234567"  }  -> in-page play (styled cover)
     null                              -> styled cover, opens the primary link
   ============================================================================ */

window.ELEMENTS_DATA = {
  /* ---------------------------------------------------------------- PRODUCTION */
  production: [
    /* ---- Featured films ---- */
    {
      title: "Jaggu Dada Mode",
      brand: "Amazon Prime Video",
      category: "Branded Film",
      role: "Production Designer",
      year: "2024",
      featured: true,
      award: "Kyoorius Blue Elephant · 2025",
      blurb: "A tribute to Jackie Shroff that crossed 48M views — the retro, maximalist world I built became Prime Video's top asset in two years.",
      image: null,
      media: { type: "youtube", id: "-ANFfdra0WU" },
      links: {
        youtube: "https://www.youtube.com/watch?v=-ANFfdra0WU",
        behance: "https://www.behance.net/gallery/209000085/Production-Design-Jaggu-Dada-x-Prime-Video"
      },
      status: "portfolio"
    },
    {
      title: "Flipkart Mobile Trust Film",
      brand: "Flipkart",
      category: "Commercial",
      role: "Production Designer",
      year: "2026",
      featured: true,
      blurb: "Production design for Flipkart's mobile-trust campaign film.",
      image: "https://vumbnail.com/1216934401.jpg",
      media: { type: "vimeo", id: "1216934401" },
      links: {
        vimeo: "https://vimeo.com/1216934401",
        instagram: "https://www.instagram.com/reel/DbaFGAEM-fF/",
        behance: "https://www.behance.net/gallery/253590051/Production-Design-Flipkart"
      },
      status: "verified"
    },
    {
      title: "Inaya · Never Look The Same",
      brand: "Taneira (a TATA brand)",
      category: "Fashion Film",
      role: "Production Designer",
      year: "2026",
      featured: true,
      blurb: "A saree film for Taneira — sets styled to let heritage textile take centre frame.",
      image: null,
      media: { type: "youtube", id: "H3scGKJ2iJo" },
      links: {
        youtube: "https://www.youtube.com/watch?v=H3scGKJ2iJo",
        behance: "https://www.behance.net/gallery/253589025/Production-Design-Inaya-Sarees-Taneria"
      },
      status: "portfolio"
    },
    {
      title: "Motherhood",
      brand: "Amanté",
      category: "Commercial",
      role: "Production Designer",
      year: "2026",
      featured: true,
      blurb: "An intimate, warm-lit world for Amanté's motherhood campaign.",
      image: "https://vumbnail.com/1128199006.jpg",
      media: { type: "vimeo", id: "1128199006" },
      links: {
        vimeo: "https://vimeo.com/1128199006",
        instagram: "https://www.instagram.com/p/DQeVbOTEx6L/",
        behance: "https://www.behance.net/gallery/242230115/Production-Design-TVC-for-Amant"
      },
      status: "portfolio"
    },
    {
      title: "FYERS DVC",
      brand: "FYERS",
      category: "Commercial",
      role: "Production Designer",
      year: "2024",
      featured: true,
      blurb: "Digital-video campaign for the trading platform FYERS.",
      image: "https://vumbnail.com/1044894185.jpg",
      media: { type: "vimeo", id: "1044894185" },
      links: {
        vimeo: "https://vimeo.com/1044894185",
        behance: "https://www.behance.net/gallery/242227121/Production-Design-TVC-for-Fyers-App"
      },
      status: "verified"
    },
    {
      title: "StockGro",
      brand: "StockGro",
      category: "Commercial",
      role: "Production Designer",
      year: "2025",
      featured: true,
      blurb: "Investing made playful — a clean, confident set language for StockGro.",
      image: "https://vumbnail.com/1094634082.jpg",
      media: { type: "vimeo", id: "1094634082" },
      links: {
        vimeo: "https://vimeo.com/1094634082",
        behance: "https://www.behance.net/gallery/242227835/Production-Design-TVC-for-StockGro-Investment-App"
      },
      status: "verified"
    },
    {
      title: "Awkward Interviews",
      brand: "Netflix",
      category: "Branded Content",
      role: "Production Designer",
      year: "2024",
      featured: true,
      blurb: "Netflix's Awkward Interviews with Aditi Rao Hydari, Vaani Kapoor & more.",
      image: null,
      media: { type: "youtube", id: "GPBChdAJ0RM" },
      links: {
        youtube: "https://youtu.be/GPBChdAJ0RM",
        behance: "https://www.behance.net/gallery/209000477/Production-Design-Netflix-x-Awkward-Interview"
      },
      status: "portfolio"
    },
    {
      title: "Darkest Black Friday Sale",
      brand: "Croma (a TATA brand)",
      category: "Retail Commercial",
      role: "Production Designer",
      year: "2023",
      featured: true,
      blurb: "A moody, cinematic retail film for Croma's Black Friday event.",
      image: "assets/img/work/croma.jpg",
      media: { type: "vimeo", id: "886932611" },
      links: {
        vimeo: "https://vimeo.com/886932611",
        behance: "https://www.behance.net/gallery/185256295/Production-Design_Croma"
      },
      status: "verified"
    },
    {
      title: "Terrible Tiny Tales · S5",
      brand: "Hershey's",
      category: "Web Series",
      role: "Production Designer",
      year: "2024",
      featured: true,
      blurb: "Season 5 of the beloved web series, designed for the chocolate brand Hershey's.",
      image: null,
      media: { type: "youtube", id: "sB8goW-ch-4" },
      links: {
        youtube: "https://youtu.be/sB8goW-ch-4",
        behance: "https://www.behance.net/gallery/194547569/Production-Design-for-Hersheys-TTT"
      },
      status: "portfolio"
    },
    {
      title: "Mother's Day Film",
      brand: "Amazon Prime Video",
      category: "Branded Film",
      role: "Production Designer",
      year: "2024",
      featured: true,
      blurb: "A tender Mother's Day film — sets built to make the smallest moments feel enormous.",
      image: "assets/img/work/mothers-day.jpg",
      media: null,
      links: {
        instagram: "https://www.instagram.com/reel/C68wkUMIXQJ/",
        behance: "https://www.behance.net/gallery/209000833/Production-Design-Mothers-Day-x-Prime-Video"
      },
      status: "portfolio"
    },
    {
      title: "Honestly Italian",
      brand: "Sorrentina",
      category: "FMCG Commercial",
      role: "Production Designer",
      year: "2024",
      featured: true,
      blurb: "A sunlit, garden-party world for Sorrentina's Honestly Italian campaign.",
      image: "assets/img/work/sorrentina.jpg",
      media: null,
      links: {
        instagram: "https://www.instagram.com/reel/C69F_xJIWZq/",
        behance: "https://www.behance.net/gallery/209001591/Production-Design-Sorrentina"
      },
      status: "portfolio"
    },
    {
      title: "Genius Hacks",
      brand: "Cleartrip",
      category: "Commercial",
      role: "Production Designer",
      year: "2025",
      featured: true,
      blurb: "Production design for Cleartrip's Genius Hacks campaign with Chetan Bhagat.",
      image: null,
      media: null,
      links: {
        external: "https://www.sociowash.com/cleartrip-genius-hacks",
        instagram: "https://www.instagram.com/reel/DE2MHPiMKAE/",
        behance: "https://www.behance.net/gallery/242226755/Production-Design-for-TVC-for-Cleartrip_Chetan-Bhagat"
      },
      status: "portfolio"
    },
    {
      title: "EdgeGo",
      brand: "Luminous",
      category: "Commercial",
      role: "Production Designer",
      year: "2026",
      featured: false,
      blurb: "Product-forward set design for Luminous EdgeGo.",
      image: null,
      media: null,
      links: {
        instagram: "https://www.instagram.com/reel/DaxDSiMCcYc/",
        behance: "https://www.behance.net/gallery/253589945/Production-Design-Luminious-EdgeGo"
      },
      status: "portfolio"
    },
    {
      title: "TIJP × Squid Game",
      brand: "Netflix",
      category: "Branded Content",
      role: "Production Designer",
      year: "2024",
      featured: false,
      blurb: "Branded content bringing the Squid Game universe into an Indian context.",
      image: null,
      media: null,
      links: {
        instagram: "https://www.instagram.com/reel/DMdJJDqOxp5/",
        behance: "https://www.behance.net/gallery/242228427/Production-Design-TIJPxSquidGames-Netflix"
      },
      status: "portfolio"
    },
    {
      title: "Pleaser",
      brand: "Kindly Health",
      category: "Commercial",
      role: "Production Designer",
      year: "2023",
      featured: false,
      blurb: "A bold, contemporary set for Kindly Health.",
      image: "https://vumbnail.com/856023549.jpg",
      media: { type: "vimeo", id: "856023549" },
      links: {
        vimeo: "https://vimeo.com/856023549",
        behance: "https://www.behance.net/gallery/185256217/Production-Design_KINDLY-HEALTH"
      },
      status: "verified"
    },
    {
      title: "Blanko Perfumes",
      brand: "Blanko",
      category: "Beauty Commercial",
      role: "Production Designer",
      year: "2023",
      featured: false,
      blurb: "Sculptural, minimal set design for a fragrance house.",
      image: null,
      media: null,
      links: {
        instagram: "https://www.instagram.com/reel/Cyqj41QxkoT/",
        behance: "https://www.behance.net/gallery/185255279/Production-Design_BLANKO-PERFUMES"
      },
      status: "portfolio"
    },

    /* ---- Archive: earlier TVCs, series & art-department credits ---- */
    { title: "The Boys · Indian Superheroes", brand: "Amazon Prime Video", category: "Branded Content", role: "Production Designer", archive: true, media: { type: "youtube", id: "SgR1oGW2Wxo" }, links: { youtube: "https://www.youtube.com/watch?v=SgR1oGW2Wxo", behance: "https://www.behance.net/gallery/105352021/Production-Designer" } },
    { title: "6T Ways of Unboxing", brand: "OnePlus 6T", category: "Branded Content", role: "Production Designer", archive: true, media: { type: "youtube", id: "bjMBxTqS4Dw" }, links: { youtube: "https://www.youtube.com/watch?v=bjMBxTqS4Dw", behance: "https://www.behance.net/gallery/105352609/Production-Designer-6T-Ways-Of-Unboxing-One-Plus-6T" } },
    { title: "Mind the Malhotras", brand: "Every Indian Family", category: "Branded Content", role: "Production Designer", archive: true, media: { type: "youtube", id: "Typen1eQz7I" }, links: { youtube: "https://www.youtube.com/watch?v=Typen1eQz7I", behance: "https://www.behance.net/gallery/105351449/Mind-the-Malhotras-Every-Indian-Family-ft-Malhotras" } },
    { title: "Dong · Chase The Sun", brand: "PowerDrift", category: "Branded Content", role: "Production Designer", archive: true, media: { type: "youtube", id: "3agYXaEuWZE" }, links: { youtube: "https://www.youtube.com/watch?v=3agYXaEuWZE", behance: "https://www.behance.net/gallery/105351267/Production-Designer-Dong-Chase-The-Sun-PowerDrift" } },
    { title: "Cake Magic", brand: "Amul Ice Cream", category: "Set Dressing", role: "Set Dresser", archive: true, media: { type: "youtube", id: "pjNKsPmapVM" }, links: { youtube: "https://www.youtube.com/watch?v=pjNKsPmapVM", behance: "https://www.behance.net/gallery/105342093/Set-Dressing-Amul-Ice-cream-Cake-Magic-TV-Commercial" } },
    { title: "Amul Ice Cream · I", brand: "Amul", category: "Set Dressing", role: "Set Dresser", archive: true, media: { type: "youtube", id: "wzggA_3Dpio" }, links: { youtube: "https://www.youtube.com/watch?v=wzggA_3Dpio", behance: "https://www.behance.net/gallery/105341943/Set-Dressing-Amul-Ice-Cream-TV-Commercial" } },
    { title: "Amul Ice Cream · II", brand: "Amul", category: "Set Dressing", role: "Set Dresser", archive: true, media: { type: "youtube", id: "RPc7StsKKFQ" }, links: { youtube: "https://www.youtube.com/watch?v=RPc7StsKKFQ", behance: "https://www.behance.net/gallery/105341295/Set-dressing-Amul-Ice-cream-TV-Commercial" } },
    { title: "Amul Ice Cream · III", brand: "Amul", category: "Set Dressing", role: "Set Dresser", archive: true, media: { type: "youtube", id: "BhNEZMlkJF8" }, links: { youtube: "https://www.youtube.com/watch?v=BhNEZMlkJF8", behance: "https://www.behance.net/gallery/105341215/Set-Dressing-Amul-Ice-ceam-TV-Commercial" } },
    { title: "Micellar Water", brand: "Garnier", category: "Beauty Commercial", role: "Set Dressing", archive: true, media: { type: "youtube", id: "UK9My9VjVYQ" }, links: { youtube: "https://www.youtube.com/watch?v=UK9My9VjVYQ", behance: "https://www.behance.net/gallery/105340661/Set-Dressing-Garnier-Micellar-Water-TV-Commercial" } },
    { title: "Pond's", brand: "Pond's", category: "Beauty Commercial", role: "Set Dressing", archive: true, media: { type: "youtube", id: "7-TrqPG3EYw" }, links: { youtube: "https://www.youtube.com/watch?v=7-TrqPG3EYw", behance: "https://www.behance.net/gallery/105340353/Set-dressing-Ponds-Television-Commercial" } },
    { title: "Chota Power", brand: "Duracell", category: "Art Department", role: "Art Department", archive: true, media: { type: "youtube", id: "lu3ixgPd39Y" }, links: { youtube: "https://www.youtube.com/watch?v=lu3ixgPd39Y", behance: "https://www.behance.net/gallery/105350185/Duracell-Chota-Power-TV-Commercial" } },
    { title: "Fortune Soyabean Oil", brand: "Fortune", category: "Art Department", role: "Art Assistant", archive: true, media: { type: "youtube", id: "qi2GGySqsEA" }, links: { youtube: "https://www.youtube.com/watch?v=qi2GGySqsEA", behance: "https://www.behance.net/gallery/105349631/Art-Assistant-Fortune-Soyabean-Oil-TV-Commercial" } },
    { title: "Tata Tea Veda", brand: "Tata Tea", category: "Set Dressing", role: "Set Dresser", archive: true, media: { type: "youtube", id: "6xNorSttQ8c" }, links: { youtube: "https://www.youtube.com/watch?v=6xNorSttQ8c", behance: "https://www.behance.net/gallery/105348245/Set-Dresser-Tata-TeaVeda-TV-Commercial" } },
    { title: "Ayurvedic Facewash", brand: "Medimix", category: "Set Dressing", role: "On-Set Dresser", archive: true, media: { type: "youtube", id: "7e3FFn6FdSA" }, links: { youtube: "https://www.youtube.com/watch?v=7e3FFn6FdSA", behance: "https://www.behance.net/gallery/105348115/OnSet-Dresser-Medimix-Ayurvedic-Facewash-TV-Commercial" } },
    { title: "Pearl Fair Face Cream", brand: "Citra", category: "Set Dressing", role: "Set Dresser", archive: true, media: { type: "youtube", id: "ovogG33CLMc" }, links: { youtube: "https://www.youtube.com/watch?v=ovogG33CLMc", behance: "https://www.behance.net/gallery/105348893/Set-Dresser-Citra-Pearl-Fair-Face-Cream-TV-Commercial" } },
    { title: "Kool Clay", brand: "Kores", category: "Set Dressing", role: "Set Dresser", archive: true, media: { type: "youtube", id: "T2bjEMCGJHY" }, links: { youtube: "https://www.youtube.com/watch?v=T2bjEMCGJHY", behance: "https://www.behance.net/gallery/105347085/Set-dresser-Kores-Kool-Clay-TV-Commercial" } },
    { title: "Bahadur Yodha", brand: "Moov", category: "Art Department", role: "Art Assistant", archive: true, media: { type: "youtube", id: "koSZNnNbnDA" }, links: { youtube: "https://www.youtube.com/watch?v=koSZNnNbnDA", behance: "https://www.behance.net/gallery/105346379/Art-Assistant-Moov-Bahadur-Yodha-TV-Commercial" } },
    { title: "Crompton Fans", brand: "Crompton", category: "Set Dressing", role: "Set Dressing", archive: true, media: { type: "youtube", id: "HcEfjreXOuo" }, links: { youtube: "https://www.youtube.com/watch?v=HcEfjreXOuo", behance: "https://www.behance.net/gallery/105340025/Set-dressing-Crompton-Fans-TV-Commercial" } },
    { title: "Gemini Oil", brand: "Gemini", category: "FMCG Commercial", role: "Set Dressing", archive: true, media: { type: "youtube", id: "8KGVLfNoauM" }, links: { youtube: "https://www.youtube.com/watch?v=8KGVLfNoauM", behance: "https://www.behance.net/gallery/105319897/Set-Dressing-Gemini-oil-TV-Commercial" } },
    { title: "Naak Khush Maa Khush", brand: "Nasivion", category: "Healthcare Commercial", role: "Set Dressing", archive: true, media: { type: "youtube", id: "ZUNBaRTUqJk" }, links: { youtube: "https://www.youtube.com/watch?v=ZUNBaRTUqJk", behance: "https://www.behance.net/gallery/105319343/Set-Dressing-for-Nasivion-NaakKhushMaaKhush" } },
    { title: "Big Brand Sale", brand: "Jabong", category: "Fashion Commercial", role: "Set Dressing", archive: true, media: { type: "youtube", id: "yDZHeHdlrhU" }, links: { youtube: "https://www.youtube.com/watch?v=yDZHeHdlrhU", behance: "https://www.behance.net/gallery/105318447/Set-Dressing-Jabong-Big-Brand-Sale-OutOfTheWorld" } },
    { title: "Nescafe Shaker", brand: "Nescafé", category: "Construction", role: "Construction", archive: true, media: { type: "youtube", id: "VO5fn53DWfg" }, links: { youtube: "https://www.youtube.com/watch?v=VO5fn53DWfg", behance: "https://www.behance.net/gallery/105342491/Construction-Nescafe-Shaker-TV-Commercial" } },
    { title: "FBB Summer Collection", brand: "FBB", category: "Construction", role: "Construction", archive: true, media: { type: "youtube", id: "X0Qtt8LwJ1s" }, links: { youtube: "https://www.youtube.com/watch?v=X0Qtt8LwJ1s", behance: "https://www.behance.net/gallery/105345829/Construction-FBB-Summer-Collection-TV-Commercial" } },
    { title: "Special Ops 1.5", brand: "Hotstar Series", category: "Set Decoration", role: "Set Decorator", archive: true, media: null, links: { behance: "https://www.behance.net/gallery/125450335/Set-Decorator-Special-Ops-15" } },
    { title: "Exter TVC", brand: "Hyundai", category: "Automotive", role: "Set Dresser", archive: true, media: null, links: { behance: "https://www.behance.net/gallery/180285425/Hyundai-Exter-Tvc-with-Pattern-Paramount-Set-Dresser" } },
    { title: "Harpic TVC", brand: "Harpic", category: "Commercial", role: "Set Dresser", archive: true, media: null, links: { behance: "https://www.behance.net/gallery/125455149/Set-Dresser-Harpic-TVC" } },
    { title: "Kent RO", brand: "Kent", category: "Commercial", role: "Set Dresser", archive: true, media: null, links: { behance: "https://www.behance.net/gallery/125455035/Set-Dresser-Kent-RO" } }
  ],

  /* ----------------------------------------------------------------- INTERIORS */
  interior: [
    {
      title: "4 BHK Home Makeover",
      brand: "Chembur, Mumbai",
      category: "Full Home",
      role: "Interior Design & Styling",
      year: "",
      featured: true,
      rooms: ["Living", "Master Bedroom", "Library", "Dining"],
      blurb: "A collector's home — deep teal walls, a floor-to-ceiling library and warm, characterful layering across four bedrooms.",
      image: "assets/img/work/chembur.jpg",
      media: null,
      links: {}
    },
    {
      title: "3 BHK Home Makeover",
      brand: "Bandra, Mumbai",
      category: "Full Home",
      role: "Interior Styling · with Attirail",
      year: "",
      featured: true,
      rooms: ["Bedroom", "Living", "Bar Nook"],
      blurb: "Vintage-boho layering — rich rugs, patterned tile, gallery walls and a jewel-box bar counter.",
      image: "assets/img/work/bandra.jpg",
      media: null,
      links: { behance: "https://www.behance.net/gallery/164744853/3-BHK-Rental-Makeover-with-Attirail" }
    },
    {
      title: "3 BHK Home Makeover",
      brand: "Goregaon, Mumbai",
      category: "Full Home",
      role: "Interior Styling · with Attirail",
      year: "",
      featured: true,
      rooms: ["Living", "Dining", "Kitchen"],
      blurb: "Powder-blue block-print walls, blush upholstery and a curated art-and-craft mix throughout.",
      image: "assets/img/work/goregaon.jpg",
      media: null,
      links: {}
    },
    {
      title: "1 BHK Home Makeover",
      brand: "Andheri, Mumbai",
      category: "Compact Home",
      role: "Interior Styling · with Attirail",
      year: "",
      featured: true,
      rooms: ["Bedroom", "Gallery Wall"],
      blurb: "A serene, blush-and-sage bedroom — woven textures, brass sconces and a soft gallery wall.",
      image: "assets/img/work/andheri.jpg",
      media: null,
      links: {}
    },
    {
      title: "Vintage Boho",
      brand: "for Kritika Kamra",
      category: "Celebrity Home",
      role: "Styling · with Attirail",
      year: "2023",
      featured: true,
      rooms: ["Full Home"],
      blurb: "A layered vintage-boho home styled for actor Kritika Kamra.",
      image: null,
      media: null,
      links: { behance: "https://www.behance.net/gallery/164747279/Vintage-Boho-for-Kritika-Kamra" }
    },
    {
      title: "Indie Boho 4 BHK",
      brand: "Mumbai",
      category: "Full Home",
      role: "Styling · with Attirail",
      year: "2023",
      featured: false,
      rooms: ["Full Home"],
      blurb: "An eclectic, indie-boho makeover across a four-bedroom home.",
      image: null,
      media: null,
      links: { behance: "https://www.behance.net/gallery/164746363/Indie-Boho-4-BHK-Makeover" }
    },
    {
      title: "Eclectic Boho Bedroom",
      brand: "Mumbai",
      category: "Room",
      role: "Styling · with Attirail",
      year: "2023",
      featured: false,
      rooms: ["Bedroom"],
      blurb: "A single-room study in pattern, colour and collected objects.",
      image: null,
      media: null,
      links: { behance: "https://www.behance.net/gallery/164745347/Eclectic-Boho-Bedroom" }
    },
    {
      title: "LoveFools",
      brand: "for Richa Bahl",
      category: "Hospitality",
      role: "Interior Styling · with Attirail",
      year: "",
      featured: true,
      rooms: ["Café / Pantry"],
      blurb: "Styling for the LoveFools pantry & café — a hospitality space with a strong personality.",
      image: null,
      media: null,
      links: {
        behance: "https://www.behance.net/gallery/133665605/Styling-With-Attirail-For-LoveFools-by-Richa-Bhal",
        external: "https://pantry.thelovefools.com/"
      }
    }
  ]
};
