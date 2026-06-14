// src/data/villes.ts

export interface FAQItem {
  question: string;
  reponse: string;
}

export interface Commune {
  nom: string;
  slug: string;
}

export interface TrajetFrequent {
  label: string;
  description: string;
}

export interface Ville {
  nom: string;
  slug: string;
  region: string;
  departement: string;
  codePostal: string;
  pays: string;
  latitude: number;
  longitude: number;
  intro: string;
  pointsInteret: string[];
  trajetsFrequents: TrajetFrequent[];
  faq: FAQItem[];
  communes: Commune[];
}

export const villes: Ville[] = [
  {
    nom: "Bordeaux",
    slug: "vtc-bordeaux",
    region: "Nouvelle-Aquitaine",
    departement: "Gironde",
    codePostal: "33000",
    pays: "FR",
    latitude: 44.8378,
    longitude: -0.5792,
    intro: "Bordeaux, capitale du vin et ville d'art et d'histoire, attire chaque année de nombreux voyageurs. Que vous arriviez à l'aéroport de Bordeaux-Mérignac, à la gare Saint-Jean ou que vous ayez besoin d'un transfert vers le bassin d'Arcachon, PhoneMyVTC assure votre prise en charge avec confort et ponctualité. Notre service couvre l'ensemble de la métropole bordelaise, de jour comme de nuit, sur réservation.",
    pointsInteret: [
      "Aéroport Bordeaux-Mérignac",
      "Gare Saint-Jean",
      "Cité du Vin",
      "Bassin d'Arcachon",
      "Stade Matmut Atlantique"
    ],
    trajetsFrequents: [
      { label: "Transfert aéroport Bordeaux-Mérignac", description: "Navette VTC depuis ou vers l'aéroport de Bordeaux-Mérignac, avec prise en charge à domicile et tarif fixe annoncé à l'avance." },
      { label: "VTC Bordeaux gare Saint-Jean", description: "Transfert en chauffeur privé vers la gare Saint-Jean de Bordeaux pour vos trains TGV et Intercités." },
      { label: "VTC Bordeaux — Arcachon", description: "Trajet entre Bordeaux et le bassin d'Arcachon, la Dune du Pilat ou Cap Ferret, sans stress ni stationnement." },
      { label: "Chauffeur privé Bordeaux nuit et week-end", description: "Service VTC disponible en soirée, la nuit et le week-end pour vos sorties, événements et transferts nocturnes à Bordeaux." },
      { label: "VTC Bordeaux mariage et événements", description: "Mise à disposition d'un chauffeur privé pour votre mariage, soirée d'entreprise ou événement dans la métropole bordelaise." },
      { label: "Transfert Bordeaux — Paris", description: "VTC longue distance entre Bordeaux et Paris, pour vos déplacements professionnels ou personnels avec confort garanti." }
    ],
    faq: [
      {
        question: "Quelle est la différence entre un VTC et un taxi à Bordeaux ?",
        reponse: "À Bordeaux, un taxi est un véhicule agréé qui peut prendre des clients sur la voie publique et stationner aux bornes taxis. Un VTC comme PhoneMyVTC fonctionne uniquement sur réservation préalable en ligne, avec un tarif annoncé à l'avance, un véhicule confortable et un chauffeur professionnel dédié."
      },
      {
        question: "PhoneMyVTC prend-il en charge les courses remboursées par la CPAM à Bordeaux ?",
        reponse: "Non. PhoneMyVTC n'assure pas les transports médicaux conventionnés remboursés par la Sécurité Sociale (CPAM). Pour ce type de transport à Bordeaux, nous vous recommandons de contacter un taxi conventionné agréé par l'Assurance Maladie."
      },
      {
        question: "Comment réserver un VTC à Bordeaux ?",
        reponse: "La réservation se fait uniquement en ligne via notre module de réservation. Aucune prise en charge sur la voie publique n'est possible. Indiquez votre adresse de départ, votre destination et votre créneau horaire pour obtenir une estimation tarifaire immédiate."
      },
      {
        question: "PhoneMyVTC dessert-il l'aéroport de Bordeaux-Mérignac ?",
        reponse: "Oui, nous assurons les transferts vers et depuis l'aéroport de Bordeaux-Mérignac, ainsi que la gare Saint-Jean et les communes de la métropole bordelaise."
      }
    ],
    communes: [
      { nom: "Mérignac", slug: "vtc-merignac" },
      { nom: "Pessac", slug: "vtc-pessac" },
      { nom: "Talence", slug: "vtc-talence" },
      { nom: "Villenave-d'Ornon", slug: "vtc-villenave-dornon" },
      { nom: "Bègles", slug: "vtc-begles" },
      { nom: "Cenon", slug: "vtc-cenon" },
      { nom: "Floirac", slug: "vtc-floirac" },
      { nom: "Lormont", slug: "vtc-lormont" },
      { nom: "Bruges", slug: "vtc-bruges" },
      { nom: "Le Bouscat", slug: "vtc-le-bouscat" },
      { nom: "Gradignan", slug: "vtc-gradignan" },
      { nom: "Eysines", slug: "vtc-eysines" },
      { nom: "Blanquefort", slug: "vtc-blanquefort" },
      { nom: "Saint-Médard-en-Jalles", slug: "vtc-saint-medard-en-jalles" },
      { nom: "Libourne", slug: "vtc-libourne" },
      { nom: "Carbon-Blanc", slug: "vtc-carbon-blanc" },
      { nom: "Ambarès-et-Lagrave", slug: "vtc-ambares-et-lagrave" },
      { nom: "Bassens", slug: "vtc-bassens" },
      { nom: "Parempuyre", slug: "vtc-parempuyre" },
      { nom: "Artigues-près-Bordeaux", slug: "vtc-artigues-pres-bordeaux" }
    ]
  },
  {
    nom: "Arcachon",
    slug: "vtc-arcachon",
    region: "Nouvelle-Aquitaine",
    departement: "Gironde",
    codePostal: "33120",
    pays: "FR",
    latitude: 44.6612,
    longitude: -1.1679,
    intro: "Arcachon et son célèbre bassin sont une destination prisée toute l'année, entre la Dune du Pilat, les plages et les villages ostréicoles. PhoneMyVTC vous propose un service de chauffeur privé pour rejoindre Arcachon depuis Bordeaux, l'aéroport de Mérignac ou la gare de La Teste-de-Buch, sans stress ni attente. Profitez d'un trajet confortable et réservé à l'avance.",
    pointsInteret: [
      "Dune du Pilat",
      "Plage d'Arcachon",
      "Gare d'Arcachon",
      "Port ostréicole",
      "Lège-Cap-Ferret"
    ],
    trajetsFrequents: [
      { label: "Transfert aéroport Mérignac — Arcachon", description: "Navette VTC depuis l'aéroport de Bordeaux-Mérignac jusqu'à Arcachon ou toute commune du bassin, sans attente et tarif fixe." },
      { label: "VTC Arcachon — Bordeaux", description: "Trajet en chauffeur privé entre Arcachon et Bordeaux pour vos rendez-vous professionnels, la gare Saint-Jean ou l'aéroport." },
      { label: "Chauffeur privé Dune du Pilat", description: "Transfert vers la Dune du Pilat depuis Arcachon, Bordeaux ou toute adresse du bassin, idéal pour les familles et groupes." },
      { label: "VTC Cap Ferret — Arcachon", description: "Service de chauffeur privé entre Lège-Cap-Ferret et Arcachon pour vos déplacements sur le bassin." },
      { label: "Navette Arcachon gare La Teste-de-Buch", description: "Transfert VTC vers la gare de La Teste-de-Buch pour vos trains vers Bordeaux et au-delà." },
      { label: "VTC Arcachon soirée et week-end", description: "Chauffeur privé disponible en soirée et le week-end pour vos sorties et événements sur le bassin d'Arcachon." }
    ],
    faq: [
      {
        question: "Quelle est la différence entre un VTC et un taxi à Arcachon ?",
        reponse: "À Arcachon, les taxis sont autorisés à stationner aux bornes officielles et à prendre des clients sans réservation préalable. PhoneMyVTC fonctionne uniquement sur réservation en ligne, avec un tarif fixe annoncé à l'avance et un véhicule confortable dédié à votre trajet."
      },
      {
        question: "PhoneMyVTC prend-il en charge les transports médicaux remboursés par la CPAM à Arcachon ?",
        reponse: "Non. Nous n'effectuons pas de courses conventionnées remboursées par l'Assurance Maladie. Pour un transport médical sur le bassin d'Arcachon, contactez un taxi conventionné de votre secteur."
      },
      {
        question: "Comment rejoindre Arcachon depuis Bordeaux en VTC ?",
        reponse: "Réservez simplement votre trajet en ligne via notre module de réservation. Nous assurons les transferts depuis Bordeaux, l'aéroport de Mérignac ou toute autre adresse vers Arcachon et le bassin, à l'heure que vous souhaitez."
      }
    ],
    communes: [
      { nom: "Gujan-Mestras", slug: "vtc-gujan-mestras" },
      { nom: "La Teste-de-Buch", slug: "vtc-la-teste-de-buch" },
      { nom: "Le Teich", slug: "vtc-le-teich" },
      { nom: "Biganos", slug: "vtc-biganos" },
      { nom: "Audenge", slug: "vtc-audenge" },
      { nom: "Lanton", slug: "vtc-lanton" },
      { nom: "Andernos-les-Bains", slug: "vtc-andernos-les-bains" },
      { nom: "Lège-Cap-Ferret", slug: "vtc-lege-cap-ferret" },
      { nom: "Marcheprime", slug: "vtc-marcheprime" },
      { nom: "Mios", slug: "vtc-mios" }
    ]
  },
  {
    nom: "Lyon",
    slug: "vtc-lyon",
    region: "Auvergne-Rhône-Alpes",
    departement: "Rhône",
    codePostal: "69000",
    pays: "FR",
    latitude: 45.7640,
    longitude: 4.8357,
    intro: "Lyon, grande métropole économique française, est un carrefour incontournable entre Paris, le Sud et l'Europe. Que vous ayez besoin d'un transfert depuis l'aéroport Saint-Exupéry, d'une prise en charge à la gare de la Part-Dieu ou Perrache, ou d'un VTC pour vos déplacements professionnels, PhoneMyVTC est disponible sur réservation pour vous accompagner avec ponctualité et confort.",
    pointsInteret: [
      "Aéroport Lyon Saint-Exupéry",
      "Gare de la Part-Dieu",
      "Gare Perrache",
      "Presqu'île",
      "Parc OL",
      "Eurexpo"
    ],
    trajetsFrequents: [
      { label: "Transfert aéroport Lyon Saint-Exupéry", description: "Navette VTC depuis ou vers l'aéroport Lyon Saint-Exupéry, avec chauffeur professionnel et tarif fixe garanti." },
      { label: "VTC Lyon gare Part-Dieu", description: "Transfert en chauffeur privé vers la gare de la Part-Dieu pour vos TGV et trains grande ligne au départ de Lyon." },
      { label: "VTC Lyon Eurexpo", description: "Transport professionnel vers Eurexpo pour vos salons, conférences et événements d'entreprise à Lyon." },
      { label: "Chauffeur privé Lyon Parc OL", description: "VTC pour vos soirées au Groupama Stadium, matchs et événements sportifs à Décines-Charpieu." },
      { label: "VTC Lyon — Paris", description: "Transfert longue distance entre Lyon et Paris en chauffeur privé, confortable et au tarif annoncé à l'avance." },
      { label: "Chauffeur privé Lyon nuit et week-end", description: "Service VTC disponible 7j/7 en soirée et la nuit pour vos sorties, restaurants et événements à Lyon." }
    ],
    faq: [
      {
        question: "Quelle est la différence entre un VTC et un taxi à Lyon ?",
        reponse: "À Lyon, les taxis peuvent être hélés dans la rue ou pris aux stations officielles. Un VTC comme PhoneMyVTC ne peut être commandé qu'à l'avance, mais garantit un tarif fixe, un chauffeur dédié et un service confortable pour vos transferts ou déplacements professionnels."
      },
      {
        question: "PhoneMyVTC effectue-t-il des transports médicaux remboursés par la CPAM à Lyon ?",
        reponse: "Non. PhoneMyVTC n'est pas un transporteur sanitaire agréé. Pour les courses conventionnées remboursées par la Sécurité Sociale à Lyon, adressez-vous à un taxi conventionné ou à un transporteur sanitaire agréé."
      },
      {
        question: "PhoneMyVTC assure-t-il les transferts depuis l'aéroport Saint-Exupéry ?",
        reponse: "Oui, nous assurons les transferts depuis et vers l'aéroport Lyon Saint-Exupéry, la gare de la Part-Dieu, la gare Perrache et les communes de la métropole lyonnaise."
      }
    ],
    communes: [
      { nom: "Villeurbanne", slug: "vtc-villeurbanne" },
      { nom: "Vénissieux", slug: "vtc-venissieux" },
      { nom: "Bron", slug: "vtc-bron" },
      { nom: "Décines-Charpieu", slug: "vtc-decines-charpieu" },
      { nom: "Vaulx-en-Velin", slug: "vtc-vaulx-en-velin" },
      { nom: "Saint-Priest", slug: "vtc-saint-priest" },
      { nom: "Caluire-et-Cuire", slug: "vtc-caluire-et-cuire" },
      { nom: "Oullins", slug: "vtc-oullins" },
      { nom: "Tassin-la-Demi-Lune", slug: "vtc-tassin-la-demi-lune" },
      { nom: "Écully", slug: "vtc-ecully" },
      { nom: "Saint-Fons", slug: "vtc-saint-fons" },
      { nom: "Rillieux-la-Pape", slug: "vtc-rillieux-la-pape" },
      { nom: "Meyzieu", slug: "vtc-meyzieu" },
      { nom: "Givors", slug: "vtc-givors" },
      { nom: "Francheville", slug: "vtc-francheville" },
      { nom: "Sainte-Foy-lès-Lyon", slug: "vtc-sainte-foy-les-lyon" },
      { nom: "Saint-Genis-Laval", slug: "vtc-saint-genis-laval" },
      { nom: "Chassieu", slug: "vtc-chassieu" },
      { nom: "Mions", slug: "vtc-mions" }
    ]
  },
  {
    nom: "Périgueux",
    slug: "vtc-perigueux",
    region: "Nouvelle-Aquitaine",
    departement: "Dordogne",
    codePostal: "24000",
    pays: "FR",
    latitude: 45.1836,
    longitude: 0.7214,
    intro: "Périgueux, cœur historique de la Dordogne et capitale du Périgord, est une ville à taille humaine idéalement située entre Bordeaux et Brive. PhoneMyVTC assure vos transferts depuis la gare de Périgueux, vers l'aéroport de Bergerac ou Bordeaux-Mérignac, ainsi que vos déplacements professionnels et personnels dans l'agglomération périgourdine et ses environs.",
    pointsInteret: [
      "Gare de Périgueux",
      "Cathédrale Saint-Front",
      "Aéroport de Bergerac",
      "Vésunna - Musée gallo-romain",
      "Boulazac Arena"
    ],
    trajetsFrequents: [
      { label: "Transfert Périgueux — aéroport Bergerac", description: "Navette VTC entre Périgueux et l'aéroport de Bergerac-Périgord, avec chauffeur professionnel et tarif fixe." },
      { label: "VTC Périgueux — aéroport Bordeaux-Mérignac", description: "Transfert en chauffeur privé depuis Périgueux vers l'aéroport de Bordeaux-Mérignac pour vos vols nationaux et internationaux." },
      { label: "VTC Périgueux gare SNCF", description: "Prise en charge à domicile pour vos trains au départ de la gare de Périgueux." },
      { label: "Chauffeur privé Périgueux — Bordeaux", description: "Trajet longue distance entre Périgueux et Bordeaux en VTC confortable, idéal pour vos rendez-vous professionnels." },
      { label: "VTC Périgueux — Brive-la-Gaillarde", description: "Transfert en chauffeur privé entre Périgueux et Brive pour vos déplacements dans le Périgord et la Corrèze." },
      { label: "Chauffeur privé Périgueux événements", description: "Service VTC pour vos mariages, soirées et événements privés dans l'agglomération périgourdine." }
    ],
    faq: [
      {
        question: "Quelle est la différence entre un VTC et un taxi à Périgueux ?",
        reponse: "À Périgueux, les taxis agréés peuvent prendre en charge des clients sans réservation aux stations officielles. PhoneMyVTC propose une alternative sur réservation en ligne, avec tarif fixe annoncé à l'avance et véhicule confortable pour vos trajets dans le Périgord."
      },
      {
        question: "PhoneMyVTC prend-il en charge les transports médicaux CPAM à Périgueux ?",
        reponse: "Non. Nous n'effectuons pas de transports médicaux conventionnés remboursés par l'Assurance Maladie. Pour ce besoin à Périgueux, contactez un taxi conventionné agréé par la CPAM de la Dordogne."
      },
      {
        question: "PhoneMyVTC peut-il me conduire à l'aéroport de Bergerac depuis Périgueux ?",
        reponse: "Oui, nous assurons les transferts depuis Périgueux vers l'aéroport de Bergerac-Périgord, Bordeaux-Mérignac ou toute autre destination. Réservez en ligne à l'avance pour garantir votre prise en charge."
      }
    ],
    communes: [
      { nom: "Coulounieix-Chamiers", slug: "vtc-coulounieix-chamiers" },
      { nom: "Trélissac", slug: "vtc-trelissac" },
      { nom: "Boulazac Isle Manoire", slug: "vtc-boulazac" },
      { nom: "Chancelade", slug: "vtc-chancelade" },
      { nom: "Marsac-sur-l'Isle", slug: "vtc-marsac-sur-lisle" },
      { nom: "Notre-Dame-de-Sanilhac", slug: "vtc-notre-dame-de-sanilhac" },
      { nom: "Château-l'Évêque", slug: "vtc-chateau-leveque" },
      { nom: "Saint-Laurent-sur-Manoire", slug: "vtc-saint-laurent-sur-manoire" },
      { nom: "Antonne-et-Trigonant", slug: "vtc-antonne-et-trigonant" },
      { nom: "Sorges", slug: "vtc-sorges" },
      { nom: "Neuvic", slug: "vtc-neuvic" }
    ]
  },
  {
    nom: "Strasbourg",
    slug: "vtc-strasbourg",
    region: "Grand Est",
    departement: "Bas-Rhin",
    codePostal: "67000",
    pays: "FR",
    latitude: 48.5734,
    longitude: 7.7521,
    intro: "Strasbourg, capitale européenne, accueille chaque année de nombreux voyageurs d'affaires et touristes. PhoneMyVTC propose un service de chauffeur VTC pour vos transferts depuis l'aéroport de Strasbourg-Entzheim, la gare centrale ou les principaux quartiers d'affaires, vers toutes les communes de l'Eurométropole alsacienne.",
    pointsInteret: [
      "Aéroport Strasbourg-Entzheim",
      "Gare de Strasbourg",
      "Parlement européen",
      "Cathédrale Notre-Dame",
      "Palais de l'Europe",
      "Quartier de la Petite France"
    ],
    trajetsFrequents: [
      { label: "Transfert aéroport Strasbourg-Entzheim", description: "Navette VTC depuis ou vers l'aéroport de Strasbourg-Entzheim, avec chauffeur professionnel et prise en charge à domicile." },
      { label: "VTC Strasbourg gare centrale", description: "Transfert en chauffeur privé vers la gare de Strasbourg pour vos TGV et trains internationaux." },
      { label: "Chauffeur privé Parlement européen Strasbourg", description: "VTC professionnel pour vos déplacements vers le Parlement européen, le Palais de l'Europe et les institutions européennes." },
      { label: "VTC Strasbourg — Bâle", description: "Transfert transfrontalier en chauffeur privé entre Strasbourg et Bâle, Mulhouse ou Fribourg-en-Brisgau." },
      { label: "VTC Strasbourg marché de Noël", description: "Service de chauffeur privé pour visiter le célèbre marché de Noël de Strasbourg depuis votre hôtel ou votre adresse." },
      { label: "Chauffeur privé Strasbourg nuit et événements", description: "VTC disponible en soirée et la nuit pour vos sorties, dîners d'affaires et événements dans l'Eurométropole." }
    ],
    faq: [
      {
        question: "Quelle est la différence entre un VTC et un taxi à Strasbourg ?",
        reponse: "À Strasbourg, les taxis officiels peuvent stationner devant la gare, l'aéroport et les stations dédiées. PhoneMyVTC est une alternative sur réservation uniquement, avec tarif fixe et chauffeur professionnel, particulièrement adaptée aux transferts et déplacements planifiés."
      },
      {
        question: "PhoneMyVTC effectue-t-il des courses conventionnées CPAM à Strasbourg ?",
        reponse: "Non. Nous n'assurons pas les transports médicaux remboursés par l'Assurance Maladie. Pour un transport conventionné à Strasbourg, contactez un taxi agréé par la CPAM du Bas-Rhin."
      },
      {
        question: "PhoneMyVTC assure-t-il les transferts depuis l'aéroport Strasbourg-Entzheim ?",
        reponse: "Oui, nous assurons les prises en charge depuis l'aéroport de Strasbourg-Entzheim, la gare centrale et les communes de l'Eurométropole alsacienne."
      }
    ],
    communes: [
      { nom: "Schiltigheim", slug: "vtc-schiltigheim" },
      { nom: "Illkirch-Graffenstaden", slug: "vtc-illkirch-graffenstaden" },
      { nom: "Ostwald", slug: "vtc-ostwald" },
      { nom: "Lingolsheim", slug: "vtc-lingolsheim" },
      { nom: "Bischheim", slug: "vtc-bischheim" },
      { nom: "Hœnheim", slug: "vtc-hoenheim" },
      { nom: "Mundolsheim", slug: "vtc-mundolsheim" },
      { nom: "Oberhausbergen", slug: "vtc-oberhausbergen" },
      { nom: "Achenheim", slug: "vtc-achenheim" },
      { nom: "Eschau", slug: "vtc-eschau" },
      { nom: "Geispolsheim", slug: "vtc-geispolsheim" },
      { nom: "Vendenheim", slug: "vtc-vendenheim" },
      { nom: "Wolfisheim", slug: "vtc-wolfisheim" }
    ]
  },
  {
    nom: "Poitiers",
    slug: "vtc-poitiers",
    region: "Nouvelle-Aquitaine",
    departement: "Vienne",
    codePostal: "86000",
    pays: "FR",
    latitude: 46.5802,
    longitude: 0.3404,
    intro: "Poitiers, ville universitaire et carrefour entre Paris, Bordeaux et Nantes, accueille aussi bien les voyageurs d'affaires que les familles en visite. PhoneMyVTC assure vos transferts depuis la gare TGV de Poitiers, vers le Futuroscope ou l'aéroport de Poitiers-Biard, ainsi que vos déplacements dans le Grand Poitiers et ses communes environnantes.",
    pointsInteret: [
      "Gare TGV de Poitiers",
      "Futuroscope",
      "Aéroport Poitiers-Biard",
      "Université de Poitiers",
      "Parc du Futuroscope"
    ],
    trajetsFrequents: [
      { label: "Transfert Poitiers — Futuroscope", description: "Navette VTC entre Poitiers et le Futuroscope pour vos visites en famille ou vos événements d'entreprise au parc." },
      { label: "VTC Poitiers gare TGV", description: "Transfert en chauffeur privé vers la gare TGV de Poitiers pour vos trains vers Paris, Bordeaux ou La Rochelle." },
      { label: "VTC Poitiers — aéroport Biard", description: "Navette VTC depuis ou vers l'aéroport de Poitiers-Biard, avec prise en charge à domicile et tarif fixe." },
      { label: "Chauffeur privé Poitiers — Paris", description: "Transfert longue distance entre Poitiers et Paris en VTC confortable pour vos déplacements professionnels." },
      { label: "VTC Poitiers — La Rochelle", description: "Trajet en chauffeur privé entre Poitiers et La Rochelle, idéal pour vos rendez-vous ou weekends." },
      { label: "Chauffeur privé Poitiers soirées et mariages", description: "Service VTC pour vos événements privés, mariages et soirées dans le Grand Poitiers et la Vienne." }
    ],
    faq: [
      {
        question: "Quelle est la différence entre un VTC et un taxi à Poitiers ?",
        reponse: "À Poitiers, les taxis agréés peuvent prendre des passagers aux stations officielles sans réservation. PhoneMyVTC fonctionne uniquement sur réservation en ligne avec un prix fixé à l'avance, idéal pour vos transferts vers la gare ou le Futuroscope."
      },
      {
        question: "PhoneMyVTC assure-t-il les transports médicaux remboursés par la CPAM à Poitiers ?",
        reponse: "Non. Nous n'effectuons pas de courses conventionnées remboursées par la Sécurité Sociale. Pour un transport médical à Poitiers, contactez un taxi conventionné agréé par la CPAM de la Vienne."
      },
      {
        question: "Comment réserver un VTC pour le Futuroscope depuis Poitiers ?",
        reponse: "Réservez directement via notre module en ligne. Nous assurons les transferts entre Poitiers, le Futuroscope, l'aéroport de Poitiers-Biard et les communes du Grand Poitiers."
      }
    ],
    communes: [
      { nom: "Buxerolles", slug: "vtc-buxerolles" },
      { nom: "Chasseneuil-du-Poitou", slug: "vtc-chasseneuil-du-poitou" },
      { nom: "Migné-Auxances", slug: "vtc-migne-auxances" },
      { nom: "Montamisé", slug: "vtc-montamise" },
      { nom: "Saint-Benoît", slug: "vtc-saint-benoit" },
      { nom: "Vouneuil-sous-Biard", slug: "vtc-vouneuil-sous-biard" },
      { nom: "Jaunay-Marigny", slug: "vtc-jaunay-marigny" },
      { nom: "Loudun", slug: "vtc-loudun" },
      { nom: "Châtellerault", slug: "vtc-chatellerault" },
      { nom: "Vivonne", slug: "vtc-vivonne" }
    ]
  },
  {
    nom: "Tours",
    slug: "vtc-tours",
    region: "Centre-Val de Loire",
    departement: "Indre-et-Loire",
    codePostal: "37000",
    pays: "FR",
    latitude: 47.3941,
    longitude: 0.6848,
    intro: "Tours, porte d'entrée du Val de Loire, est une ville dynamique entre patrimoine, tourisme et activité économique. PhoneMyVTC vous accompagne depuis la gare de Tours ou Saint-Pierre-des-Corps, vers l'aéroport de Tours Val de Loire, les châteaux de la Loire ou toute autre destination en Touraine, avec un service professionnel sur réservation.",
    pointsInteret: [
      "Gare de Tours",
      "Gare Saint-Pierre-des-Corps",
      "Aéroport Tours Val de Loire",
      "Châteaux de la Loire",
      "Vinci Parc des Expositions"
    ],
    trajetsFrequents: [
      { label: "Transfert aéroport Tours Val de Loire", description: "Navette VTC depuis ou vers l'aéroport de Tours Val de Loire, avec chauffeur professionnel et tarif fixe annoncé à l'avance." },
      { label: "VTC Tours gare Saint-Pierre-des-Corps", description: "Transfert en chauffeur privé vers la gare TGV de Saint-Pierre-des-Corps pour vos trains grande ligne." },
      { label: "Chauffeur privé châteaux de la Loire", description: "Visite des châteaux de la Loire en VTC depuis Tours : Amboise, Chambord, Chenonceau, Chinon, avec chauffeur dédié à la journée." },
      { label: "VTC Tours — Paris", description: "Transfert longue distance entre Tours et Paris en chauffeur privé, confortable et au tarif fixe garanti." },
      { label: "VTC Tours Vinci Parc des Expositions", description: "Transport professionnel vers le Vinci Parc des Expositions de Tours pour vos salons et conférences." },
      { label: "Chauffeur privé Tours nuit et mariages", description: "Service VTC disponible en soirée et le week-end pour vos mariages, événements et sorties en Touraine." }
    ],
    faq: [
      {
        question: "Quelle est la différence entre un VTC et un taxi à Tours ?",
        reponse: "À Tours, les taxis peuvent être pris aux stations officielles ou hélés dans la rue. PhoneMyVTC est une alternative sur réservation uniquement, avec tarif fixe annoncé à l'avance, idéale pour vos déplacements vers la gare, l'aéroport ou les châteaux de la Loire."
      },
      {
        question: "PhoneMyVTC prend-il en charge les courses remboursées par la CPAM à Tours ?",
        reponse: "Non. Nous n'assurons pas les transports médicaux conventionnés. Pour ce type de course en Touraine, contactez un taxi conventionné agréé par la CPAM d'Indre-et-Loire."
      },
      {
        question: "PhoneMyVTC dessert-il les châteaux de la Loire depuis Tours ?",
        reponse: "Oui, nous assurons les transferts depuis Tours vers Amboise, Chinon, Blois et les principaux sites touristiques de la région. Réservez en ligne pour planifier votre trajet en toute sérénité."
      }
    ],
    communes: [
      { nom: "Joué-lès-Tours", slug: "vtc-joue-les-tours" },
      { nom: "Saint-Avertin", slug: "vtc-saint-avertin" },
      { nom: "Chambray-lès-Tours", slug: "vtc-chambray-les-tours" },
      { nom: "La Riche", slug: "vtc-la-riche" },
      { nom: "Saint-Pierre-des-Corps", slug: "vtc-saint-pierre-des-corps" },
      { nom: "Fondettes", slug: "vtc-fondettes" },
      { nom: "Ballan-Miré", slug: "vtc-ballan-mire" },
      { nom: "Amboise", slug: "vtc-amboise" },
      { nom: "Blois", slug: "vtc-blois" },
      { nom: "Chinon", slug: "vtc-chinon" }
    ]
  },
  {
    nom: "Angoulême",
    slug: "vtc-angouleme",
    region: "Nouvelle-Aquitaine",
    departement: "Charente",
    codePostal: "16000",
    pays: "FR",
    latitude: 45.6498,
    longitude: 0.1561,
    intro: "Angoulême, ville d'histoire et carrefour entre Bordeaux et Poitiers, attire aussi bien les professionnels que les visiteurs. PhoneMyVTC vous propose un service de chauffeur VTC pour vos transferts depuis la gare d'Angoulême, vers Cognac, Bordeaux-Mérignac ou toute autre destination, ainsi que pour vos déplacements dans le Grand Angoulême.",
    pointsInteret: [
      "Gare d'Angoulême",
      "Festival de la BD",
      "Aéroport de Cognac",
      "Circuit de Pau-Arnos",
      "Musée de la bande dessinée"
    ],
    trajetsFrequents: [
      { label: "VTC Angoulême — aéroport Bordeaux-Mérignac", description: "Transfert en chauffeur privé depuis Angoulême vers l'aéroport de Bordeaux-Mérignac pour vos vols nationaux et internationaux." },
      { label: "VTC Angoulême gare SNCF", description: "Prise en charge à domicile pour vos trains TGV au départ de la gare d'Angoulême vers Paris ou Bordeaux." },
      { label: "Chauffeur privé Angoulême — Cognac", description: "Transfert VTC entre Angoulême et Cognac pour vos visites de chais, rendez-vous professionnels ou événements." },
      { label: "VTC Angoulême — Bordeaux", description: "Trajet en chauffeur privé entre Angoulême et Bordeaux, idéal pour vos rendez-vous d'affaires ou connexions aéroport." },
      { label: "VTC Angoulême festival BD", description: "Navette VTC pour le Festival International de la Bande Dessinée d'Angoulême depuis votre hébergement ou la gare." },
      { label: "Chauffeur privé Angoulême soirées et mariages", description: "Service VTC pour vos événements, mariages et soirées dans le Grand Angoulême et la Charente." }
    ],
    faq: [
      {
        question: "Quelle est la différence entre un VTC et un taxi à Angoulême ?",
        reponse: "À Angoulême, les taxis agréés peuvent prendre des clients sans réservation aux bornes officielles. PhoneMyVTC propose une alternative sur réservation en ligne, avec tarif fixe et chauffeur professionnel pour vos trajets dans le Grand Angoulême et au-delà."
      },
      {
        question: "PhoneMyVTC effectue-t-il des transports conventionnés CPAM à Angoulême ?",
        reponse: "Non. Nous n'assurons pas les courses remboursées par l'Assurance Maladie. Pour un transport médical à Angoulême, contactez un taxi conventionné agréé par la CPAM de la Charente."
      },
      {
        question: "PhoneMyVTC peut-il m'emmener à Cognac ou Bordeaux depuis Angoulême ?",
        reponse: "Oui, nous assurons les transferts longue distance depuis Angoulême vers Cognac, Bordeaux-Mérignac, Poitiers et d'autres destinations sur réservation."
      }
    ],
    communes: [
      { nom: "Soyaux", slug: "vtc-soyaux" },
      { nom: "L'Isle-d'Espagnac", slug: "vtc-lisle-despagnac" },
      { nom: "Gond-Pontouvre", slug: "vtc-gond-pontouvre" },
      { nom: "Ruelle-sur-Touvre", slug: "vtc-ruelle-sur-touvre" },
      { nom: "Champniers", slug: "vtc-champniers" },
      { nom: "Nersac", slug: "vtc-nersac" },
      { nom: "Mouthiers-sur-Boëme", slug: "vtc-mouthiers-sur-boeme" },
      { nom: "Vars", slug: "vtc-vars" },
      { nom: "Cognac", slug: "vtc-cognac" }
    ]
  },
  {
    nom: "Paris",
    slug: "vtc-paris",
    region: "Île-de-France",
    departement: "Paris",
    codePostal: "75000",
    pays: "FR",
    latitude: 48.8566,
    longitude: 2.3522,
    intro: "Paris concentre un trafic intense et des besoins en transport à toute heure, entre aéroports, gares, quartiers d'affaires et événements. PhoneMyVTC assure vos transferts depuis Roissy-Charles de Gaulle, Orly et les grandes gares parisiennes, ainsi que vos déplacements professionnels et personnels dans Paris et sa petite couronne, avec réservation à l'avance et tarif communiqué avant la course.",
    pointsInteret: [
      "Aéroport Roissy-CDG",
      "Aéroport d'Orly",
      "Gare Montparnasse",
      "Gare de Lyon",
      "Gare du Nord",
      "La Défense",
      "Parc des Expositions Villepinte"
    ],
    trajetsFrequents: [
      { label: "Transfert aéroport Paris CDG — Roissy", description: "Navette VTC depuis ou vers l'aéroport Roissy-Charles de Gaulle, avec chauffeur professionnel, tarif fixe et suivi de vol." },
      { label: "VTC Paris — aéroport Orly", description: "Transfert en chauffeur privé vers l'aéroport d'Orly depuis Paris ou la petite couronne, à l'heure et sans stress." },
      { label: "Chauffeur privé gare du Nord Paris", description: "VTC pour vos trains Eurostar, Thalys et TGV au départ de la gare du Nord à Paris." },
      { label: "VTC Paris gare Montparnasse", description: "Transfert en chauffeur privé vers la gare Montparnasse pour vos TGV vers Bordeaux, Nantes ou Rennes." },
      { label: "VTC Paris La Défense", description: "Transport professionnel vers le quartier d'affaires de La Défense pour vos rendez-vous et séminaires d'entreprise." },
      { label: "Chauffeur privé Paris Villepinte", description: "Navette VTC vers le Parc des Expositions de Paris-Villepinte pour vos salons professionnels et événements." },
      { label: "VTC Paris nuit et soirées", description: "Chauffeur privé disponible 24h/24 pour vos sorties nocturnes, restaurants, théâtres et événements à Paris." },
      { label: "VTC Paris — Versailles", description: "Transfert en chauffeur privé entre Paris et Versailles pour vos visites touristiques ou déplacements professionnels." }
    ],
    faq: [
      {
        question: "Quelle est la différence entre un VTC et un taxi à Paris ?",
        reponse: "À Paris, les taxis peuvent prendre des clients dans la rue ou aux bornes officielles. PhoneMyVTC est un service VTC sur réservation uniquement, sans maraude, avec tarif annoncé avant la course, particulièrement adapté aux transferts aéroport et aux déplacements planifiés."
      },
      {
        question: "PhoneMyVTC prend-il en charge les transports médicaux remboursés par la CPAM à Paris ?",
        reponse: "Non. Nous n'effectuons pas de courses conventionnées par l'Assurance Maladie. Pour un transport médical en Île-de-France, contactez un taxi conventionné agréé par la CPAM."
      },
      {
        question: "PhoneMyVTC assure-t-il les transferts vers Roissy-CDG et Orly ?",
        reponse: "Oui, nous assurons les transferts vers et depuis l'aéroport Roissy-Charles de Gaulle, l'aéroport d'Orly et les grands pôles parisiens comme La Défense ou les principales gares."
      },
      {
        question: "Quelle est la différence de prix entre un VTC et un taxi Paris-CDG ?",
        reponse: "Contrairement aux taxis dont le tarif peut varier selon les conditions de circulation ou la réglementation applicable, PhoneMyVTC propose un tarif communiqué avant la validation de la réservation. Vous connaissez donc le prix de votre course à l'avance."
      }
    ],
    communes: [
      { nom: "Boulogne-Billancourt", slug: "vtc-boulogne-billancourt" },
      { nom: "Versailles", slug: "vtc-versailles" },
      { nom: "Saint-Denis", slug: "vtc-saint-denis" },
      { nom: "Montreuil", slug: "vtc-montreuil" },
      { nom: "Vincennes", slug: "vtc-vincennes" },
      { nom: "Nanterre", slug: "vtc-nanterre" },
      { nom: "Créteil", slug: "vtc-creteil" },
      { nom: "Argenteuil", slug: "vtc-argenteuil" },
      { nom: "Issy-les-Moulineaux", slug: "vtc-issy-les-moulineaux" },
      { nom: "Asnières-sur-Seine", slug: "vtc-asnieres-sur-seine" },
      { nom: "Clichy", slug: "vtc-clichy" },
      { nom: "Courbevoie", slug: "vtc-courbevoie" },
      { nom: "Roissy-en-France", slug: "vtc-roissy-en-france" },
      { nom: "Orly", slug: "vtc-orly" },
      { nom: "Rungis", slug: "vtc-rungis" }
    ]
  },
  {
    nom: "Toulouse",
    slug: "vtc-toulouse",
    region: "Occitanie",
    departement: "Haute-Garonne",
    codePostal: "31000",
    pays: "FR",
    latitude: 43.6047,
    longitude: 1.4442,
    intro: "Toulouse, grande métropole du Sud-Ouest et capitale européenne de l'aéronautique, génère de nombreux besoins de transport chaque jour. PhoneMyVTC vous accompagne depuis l'aéroport Toulouse-Blagnac, les gares toulousaines ou les principaux pôles d'activité, pour vos trajets professionnels, personnels ou vos transferts sur réservation dans toute la métropole.",
    pointsInteret: [
      "Aéroport Toulouse-Blagnac",
      "Gare Matabiau",
      "Airbus",
      "Cité de l'Espace",
      "Cancéropôle",
      "Parc des Expositions"
    ],
    trajetsFrequents: [
      { label: "Transfert aéroport Toulouse-Blagnac", description: "Navette VTC depuis ou vers l'aéroport Toulouse-Blagnac, avec chauffeur professionnel, suivi de vol et tarif fixe garanti." },
      { label: "VTC Toulouse gare Matabiau", description: "Transfert en chauffeur privé vers la gare Matabiau de Toulouse pour vos TGV et trains grande ligne." },
      { label: "Chauffeur privé Toulouse Airbus", description: "VTC professionnel pour vos déplacements vers les sites Airbus de Blagnac, Colomiers et la zone aéronautique toulousaine." },
      { label: "VTC Toulouse Cité de l'Espace", description: "Transfert en chauffeur privé vers la Cité de l'Espace pour vos visites en famille ou événements d'entreprise." },
      { label: "VTC Toulouse — Carcassonne", description: "Trajet longue distance entre Toulouse et Carcassonne en chauffeur privé, idéal pour le tourisme ou les déplacements professionnels." },
      { label: "Chauffeur privé Toulouse nuit et mariages", description: "Service VTC disponible 7j/7 en soirée pour vos sorties, mariages et événements dans la métropole toulousaine." }
    ],
    faq: [
      {
        question: "Quelle est la différence entre un VTC et un taxi à Toulouse ?",
        reponse: "À Toulouse, les taxis agréés peuvent stationner aux bornes officielles et prendre des clients sans réservation. PhoneMyVTC est une alternative sur réservation en ligne, avec tarif fixe annoncé à l'avance et chauffeur professionnel, idéale pour vos trajets vers l'aéroport ou les zones d'activité."
      },
      {
        question: "PhoneMyVTC effectue-t-il des transports conventionnés CPAM à Toulouse ?",
        reponse: "Non. Nous n'assurons pas les courses remboursées par la Sécurité Sociale. Pour un transport médical à Toulouse, contactez un taxi conventionné agréé par la CPAM de Haute-Garonne."
      },
      {
        question: "PhoneMyVTC dessert-il l'aéroport Toulouse-Blagnac ?",
        reponse: "Oui, nous assurons les transferts depuis et vers l'aéroport Toulouse-Blagnac, la gare Matabiau et les communes de la métropole toulousaine. Réservez à l'avance pour garantir votre prise en charge."
      }
    ],
    communes: [
      { nom: "Blagnac", slug: "vtc-blagnac" },
      { nom: "Colomiers", slug: "vtc-colomiers" },
      { nom: "Tournefeuille", slug: "vtc-tournefeuille" },
      { nom: "Muret", slug: "vtc-muret" },
      { nom: "Saint-Orens-de-Gameville", slug: "vtc-saint-orens-de-gameville" },
      { nom: "Labège", slug: "vtc-labege" },
      { nom: "Balma", slug: "vtc-balma" },
      { nom: "L'Union", slug: "vtc-lunion" },
      { nom: "Ramonville-Saint-Agne", slug: "vtc-ramonville-saint-agne" },
      { nom: "Cugnaux", slug: "vtc-cugnaux" },
      { nom: "Castanet-Tolosan", slug: "vtc-castanet-tolosan" }
    ]
  }
];

export function getVilleMere(communeSlug: string): Ville | null {
  return villes.find((v) => v.communes.some((c) => c.slug === communeSlug)) ?? null;
}