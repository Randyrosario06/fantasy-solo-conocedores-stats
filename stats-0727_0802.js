const teams = [
  {
    rank: 1,
    team: "Eco's ML",
    manager: "Ezequiel Castro",
    record: "150-87-18",
    moves: 287,
    last_matchup: "9-6-0",
    batting: {
      R: 765,
      HR: 209,
      RBI: 796,
      SB: 108,
      AVG: 0.2597,
      OBP: 0.3341,
      SLG: 0.4340,
      FPCT: 0.9878
    },
    pitching: {
      K: 1102,
      QS: 64,
      W: 71,
      SV: 48,
      HD: 45,
      ERA: 4.110,
      WHIP: 1.222
    },
    analisis: {
      fortalezas: "Volumen masivo de Carreras, HR, RBI y Ponches acumulados gracias a hiperactividad en waivers (287 moves).",
      debilidades: "Ratios de pitcheo (ERA 4.110) vulnerables por el uso intensivo de streamers.",
      tendencia: "➡️ Estable"
    }
  },
  {
    rank: 2,
    team: "Team Randy",
    manager: "Randy Rosario",
    record: "149-94-12",
    moves: 115,
    last_matchup: "6-9-0",
    batting: {
      R: 712,
      HR: 222,
      RBI: 730,
      SB: 74,
      AVG: 0.2550,
      OBP: 0.3321,
      SLG: 0.4410,
      FPCT: 0.9925
    },
    pitching: {
      K: 1015,
      QS: 62,
      W: 75,
      SV: 38,
      HD: 39,
      ERA: 3.736,
      WHIP: 1.193
    },
    analisis: {
      fortalezas: "Poder de largo metraje (222 HR), rotación ganadora (75 W) y fildeo impecable (FPCT .9925, #1).",
      debilidades: "Escasa velocidad en las bases (74 SB) y dependencia severa del batazo largo.",
      tendencia: "⚠️ En descenso"
    }
  },
  {
    rank: 3,
    team: "The Vipers of SD",
    manager: "Victor S.",
    record: "142-96-17",
    moves: 180,
    last_matchup: "9-5-1",
    batting: {
      R: 833,
      HR: 241,
      RBI: 810,
      SB: 105,
      AVG: 0.2612,
      OBP: 0.3385,
      SLG: 0.4520,
      FPCT: 0.9822
    },
    pitching: {
      K: 1045,
      QS: 77,
      W: 68,
      SV: 56,
      HD: 30,
      ERA: 3.894,
      WHIP: 1.215
    },
    analisis: {
      fortalezas: "Ofensiva demoledora (#1 en HR con 241 y R con 833) y rotación duradera (#1 en QS con 77).",
      debilidades: "Peor porcentaje de fildeo activo de la liga (.9822 FPCT).",
      tendencia: "🔥 En ascenso"
    }
  },
  {
    rank: 4,
    team: "La Kabra",
    manager: "Carlos / Kabra",
    record: "137-103-15",
    moves: 145,
    last_matchup: "11-3-1",
    batting: {
      R: 720,
      HR: 195,
      RBI: 715,
      SB: 141,
      AVG: 0.2591,
      OBP: 0.3405,
      SLG: 0.4310,
      FPCT: 0.9863
    },
    pitching: {
      K: 947,
      QS: 55,
      W: 59,
      SV: 32,
      HD: 35,
      ERA: 3.717,
      WHIP: 1.189
    },
    analisis: {
      fortalezas: "Líder absoluto en bases robadas (141 SB), OBP de élite (.3405) y ratios de pitcheo quirúrgicos.",
      debilidades: "Leve déficit de ponches acumulados en comparación con el Top 3.",
      tendencia: "🔥 En ascenso"
    }
  },
  {
    rank: 5,
    team: "Victor's Spirited Team",
    manager: "Victor",
    record: "113-127-15",
    moves: 92,
    last_matchup: "5-9-1",
    batting: {
      R: 635,
      HR: 158,
      RBI: 610,
      SB: 126,
      AVG: 0.2496,
      OBP: 0.3220,
      SLG: 0.3980,
      FPCT: 0.9909
    },
    pitching: {
      K: 890,
      QS: 48,
      W: 49,
      SV: 46,
      HD: 28,
      ERA: 4.105,
      WHIP: 1.256
    },
    analisis: {
      fortalezas: "Velocidad constante (126 SB) y sólida defensa (.9909 FPCT).",
      debilidades: "Falta crítica de poder (SLG sub-400 y solo 158 HR) y tráfico constante permitido en el montículo.",
      tendencia: "⚠️ En descenso"
    }
  },
  {
    rank: 6,
    team: "Pi-thons",
    manager: "Pi-thons",
    record: "109-126-20",
    moves: 110,
    last_matchup: "8-7-0",
    batting: {
      R: 640,
      HR: 185,
      RBI: 625,
      SB: 88,
      AVG: 0.2516,
      OBP: 0.3276,
      SLG: 0.4210,
      FPCT: 0.9848
    },
    pitching: {
      K: 1150,
      QS: 69,
      W: 58,
      SV: 61,
      HD: 32,
      ERA: 3.489,
      WHIP: 1.185
    },
    analisis: {
      fortalezas: "Pitcheo dominante e intocable (#1 en K con 1150 y #1 en ERA con 3.489).",
      debilidades: "Ofensiva inconstante en porcentaje de bateo y carreras anotadas.",
      tendencia: "➡️ Estable"
    }
  },
  {
    rank: 7,
    team: "Joel's Scary Team",
    manager: "Joel",
    record: "111-133-11",
    moves: 88,
    last_matchup: "7-6-2",
    batting: {
      R: 620,
      HR: 172,
      RBI: 605,
      SB: 121,
      AVG: 0.2479,
      OBP: 0.3210,
      SLG: 0.4150,
      FPCT: 0.9880
    },
    pitching: {
      K: 915,
      QS: 52,
      W: 50,
      SV: 9,
      HD: 20,
      ERA: 3.798,
      WHIP: 1.195
    },
    analisis: {
      fortalezas: "Recuperación espectacular de su efectividad (3.798 ERA) y buena velocidad (121 SB).",
      debilidades: "Bullpen abandonado (solo 9 Salvamentos en toda la temporada).",
      tendencia: "🔥 En ascenso"
    }
  },
  {
    rank: 8,
    team: "Leonardo alexander",
    manager: "Leonardo Alexander",
    record: "102-131-22",
    moves: 65,
    last_matchup: "6-7-2",
    batting: {
      R: 610,
      HR: 168,
      RBI: 590,
      SB: 68,
      AVG: 0.2537,
      OBP: 0.3231,
      SLG: 0.4180,
      FPCT: 0.9874
    },
    pitching: {
      K: 997,
      QS: 67,
      W: 52,
      SV: 35,
      HD: 25,
      ERA: 3.765,
      WHIP: 1.259
    },
    analisis: {
      fortalezas: "Buen volumen de Salidas de Calidad (67 QS) y ponches acumulados.",
      debilidades: "Casi nula producción de velocidad (68 SB) y el peor WHIP de la liga activa (1.259).",
      tendencia: "⚠️ En descenso"
    }
  },
  {
    rank: 9,
    team: "Reyes de Jalisco",
    manager: "Gabriel Sá...",
    record: "95-149-11",
    moves: 0,
    last_matchup: "7-8-0",
    batting: {
      R: 580,
      HR: 175,
      RBI: 560,
      SB: 62,
      AVG: 0.2483,
      OBP: 0.3334,
      SLG: 0.4520,
      FPCT: 0.9835
    },
    pitching: {
      K: 680,
      QS: 48,
      W: 42,
      SV: 2,
      HD: 18,
      ERA: 3.612,
      WHIP: 1.177
    },
    analisis: {
      fortalezas: "Gran Slugging (.4520) y efectividad limpia (3.612 ERA).",
      debilidades: "Inactividad total (0 movimientos). Pérdida sistemática de acumulativas.",
      tendencia: "⚠️ En descenso"
    }
  },
  {
    rank: 10,
    team: "Payanoboi's Team",
    manager: "Rameses / Payano",
    record: "89-151-15",
    moves: 0,
    last_matchup: "3-11-1",
    batting: {
      R: 540,
      HR: 152,
      RBI: 520,
      SB: 78,
      AVG: 0.2423,
      OBP: 0.3206,
      SLG: 0.4180,
      FPCT: 0.9850
    },
    pitching: {
      K: 630,
      QS: 39,
      W: 38,
      SV: 67,
      HD: 12,
      ERA: 4.120,
      WHIP: 1.164
    },
    analisis: {
      fortalezas: "Líder indiscutible en Salvamentos (67 SV) y mejor WHIP acumulado (1.164).",
      debilidades: "Último lugar en promedio de bateo (.2423 AVG) y estancamiento por inactividad.",
      tendencia: "⚠️ En descenso"
    }
  }
];