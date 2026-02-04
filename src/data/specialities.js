export const specialities = [
  {
    id: "rfia",
    name: "RFIA",
    ues: [
      {
        id: "ue1",
        name: "UE1",
        color: { bg: 'from-red-500/10 to-red-600/5', border: 'border-red-500/30', text: 'text-red-400', badge: 'bg-red-500/20 text-red-300' },
        modules: [
          {
            id: "robotique",
            name: "Initiation à la robotique",
            coef: 2,
            assessments: ["exam", "td"],
          },
        ],
      },

      {
        id: "ue2",
        name: "UE2",
        color: { bg: 'from-cyan-500/10 to-cyan-600/5', border: 'border-cyan-500/30', text: 'text-cyan-400', badge: 'bg-cyan-500/20 text-cyan-300' },
        modules: [
          {
            id: "meps",
            name: "MEPS",
            coef: 2,
            assessments: ["exam", "tp"],
          },
          {
            id: "rdc",
            name: "Représentation des connaissances",
            coef: 2,
            assessments: ["exam", "td"],
          },
        ],
      },

      {
        id: "ue3",
        name: "UE3",
        color: { bg: 'from-emerald-500/10 to-emerald-600/5', border: 'border-emerald-500/30', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300' },
        modules: [
          {
            id: "gl",
            name: "Génie Logiciel",
            coef: 3,
            assessments: ["exam", "td", "tp"], 
          },
          {
            id: "bda",
            name: "Bases de Données Avancées",
            coef: 2,
            assessments: ["exam", "tp"],
          },
        ],
      },

      {
        id: "ue4",
        name: "UE4",
        color: { bg: 'from-amber-500/10 to-amber-600/5', border: 'border-amber-500/30', text: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-300' },
        modules: [
          {
            id: "ad",
            name: "Analyse de données",
            coef: 2,
            assessments: ["exam", "td"],
          },
          {
            id: "ro",
            name: "Recherche Opérationnelle",
            coef: 2,
            assessments: ["exam", "td"],
          },
        ],
      },

      {
        id: "ue5",
        name: "UE5",
        color: { bg: 'from-pink-500/10 to-pink-600/5', border: 'border-pink-500/30', text: 'text-pink-400', badge: 'bg-pink-500/20 text-pink-300' },
        modules: [
          {
            id: "anglais",
            name: "Anglais",
            coef: 1,
            assessments: ["exam"], 
          },
        ],
      },
    ],
    
  },
   {
    id: "isia",
    name: "ISIA",
    ues: [
      {
        id: "ue1",
        name: "UE1",
        color: { bg: 'from-purple-500/10 to-purple-600/5', border: 'border-purple-500/30', text: 'text-purple-400', badge: 'bg-purple-500/20 text-purple-300' },
        modules: [
          {
            id: "bdd_nosql",
            name: "BDD NoSQL et Big Data",
            coef: 2,
            assessments: ["exam", "tp"],
          },
        ],
      },

      {
        id: "ue2",
        name: "UE2",
        color: { bg: 'from-sky-500/10 to-sky-600/5', border: 'border-sky-500/30', text: 'text-sky-400', badge: 'bg-sky-500/20 text-sky-300' },
        modules: [
          {
            id: "algo",
            name: "Algorithmique Avancée et Complexité",
            coef: 3,
            assessments: ["exam", "td", "tp"],
          },
          {
            id: "arch_sys",
            name: "Architecture des Systèmes Évolués",
            coef: 2,
            assessments: ["exam", "tp"],
          },
          {
            id: "sia",
            name: "Systèmes d’Information Avancés",
            coef: 2,
            assessments: ["exam", "tp"],
          },
          {
            id: "arch_admin_bd",
            name: "Architecture et Administration des BD",
            coef: 2,
            assessments: ["exam", "tp"],
          },
        ],
      },

      {
        id: "ue3",
        name: "UE3",
        color: { bg: 'from-lime-500/10 to-lime-600/5', border: 'border-lime-500/30', text: 'text-lime-400', badge: 'bg-lime-500/20 text-lime-300' },
        modules: [
          {
            id: "gl",
            name: "Génie Logiciel",
            coef: 2,
            assessments: ["exam", "tp"],
          },
          {
            id: "meps",
            name: "MEPS",
            coef: 3,
            assessments: ["exam", "td", "tp"],
          },
        ],
      },

      {
        id: "ue4",
        name: "UE4",
        color: { bg: 'from-rose-500/10 to-rose-600/5', border: 'border-rose-500/30', text: 'text-rose-400', badge: 'bg-rose-500/20 text-rose-300' },
        modules: [
          {
            id: "anglais",
            name: "Anglais",
            coef: 1,
            assessments: ["exam"],
          },
        ],
      },
    ],
  },

];