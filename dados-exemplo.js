/* Rastcar Inteligencia · CONTRATO DE DADOS
 * Esta e a UNICA fonte de conteudo variavel do relatorio.
 * Fase 2: trocar este arquivo por dado real do GPS7 (mesmo schema) e a pagina nao muda.
 * amostra:true  => marca a peca como demonstracao (frota ficticia porem plausivel). */
window.RC_DADOS = {
  amostra: true,
  cliente: "( Nome da empresa )",
  periodo: "Julho · 2026",
  frota: 17,

  // Bloco 1 · numeros-heroi
  resumo: {
    frota_ativa: 16,
    km_mes: 48230,
    horas_operacao: 2504,
    disponibilidade_pct: 99.6,
    narrativa: "Sua frota rodou 48.230 km em julho sob monitoramento contínuo. As 3 máquinas somaram 390 horas de trabalho no horímetro e a operação se manteve estável, com 99,6% de disponibilidade de cobertura.",
    destaque: "O veículo MET-4C22 rodou 40% acima da média da frota, vale checar rota e escala.",
    // v3.5 · de que a frota e feita (maquina se mede por horimetro, nao por km)
    frota_tipos: { caminhao: 11, van: 3, maquina: 3 },
    horas_maquinas: 390
  },

  // Mês anterior (para as setas de evolução). Sem este bloco, nenhuma seta aparece.
  anterior: {
    periodo: "Junho",
    km_mes: 43060,
    horas_operacao: 1978,
    horas_ociosas_mes: 104,
    score_frota: 78
  },

  // Bloco 2 · frota em movimento (zona = onde o veiculo ficou mais tempo no mes)
  // v3.5 · tipo por veiculo; MAQUINA tem km:null (sem odometro, medida por horimetro)
  veiculos: [
    { placa:"MET-4C22", modelo:"Scania R450",       tipo:"caminhao", km:6920, horas:305, ocioso:false, zona:"Campinas", pos:{lat:-22.925,lng:-47.080} },
    { placa:"KLR-2F18", modelo:"Volvo FH",          tipo:"caminhao", km:5810, horas:268, ocioso:false, zona:"Ribeirão Preto", pos:{lat:-21.187,lng:-47.820} },
    { placa:"BQT-9A07", modelo:"VW Constellation",  tipo:"caminhao", km:5120, horas:240, ocioso:false, zona:"Sorocaba", pos:{lat:-23.501,lng:-47.458} },
    { placa:"RDZ-1K55", modelo:"Mercedes Actros",   tipo:"caminhao", km:4870, horas:222, ocioso:false, zona:"São José dos Campos", pos:{lat:-23.213,lng:-45.891} },
    { placa:"HNP-7G31", modelo:"Iveco Tector",      tipo:"caminhao", km:3990, horas:190, ocioso:false, zona:"Jundiaí", pos:{lat:-23.166,lng:-46.904} },
    { placa:"TGV-3M09", modelo:"Ford Cargo",        tipo:"caminhao", km:3510, horas:171, ocioso:false, zona:"Santos", pos:{lat:-23.981,lng:-46.343} },
    { placa:"CWX-8B44", modelo:"DAF XF",            tipo:"caminhao", km:3120, horas:150, ocioso:false, zona:"Guarulhos", pos:{lat:-23.464,lng:-46.533} },
    { placa:"LMF-5D27", modelo:"Scania P320",       tipo:"caminhao", km:2740, horas:133, ocioso:false, zona:"Cajamar", pos:{lat:-23.356,lng:-46.866} },
    { placa:"PVE-6H12", modelo:"Volvo VM",          tipo:"caminhao", km:2310, horas:118, ocioso:false, zona:"Piracicaba", pos:{lat:-22.715,lng:-47.669} },
    { placa:"ZAB-4J88", modelo:"VW Delivery",       tipo:"caminhao", km:1980, horas:101, ocioso:false, zona:"Resende", pos:{lat:-22.449,lng:-44.456} },
    { placa:"ESC-0301", modelo:"Escavadeira CAT 320",     tipo:"maquina", km:null, horas:214, ocioso:false, zona:"São José dos Campos", pos:{lat:-23.245,lng:-45.912} },
    { placa:"RET-0302", modelo:"Retroescavadeira JCB 3CX", tipo:"maquina", km:null, horas:176, ocioso:false, zona:"Sorocaba", pos:{lat:-23.512,lng:-47.471} },
    { placa:"OKT-2C63", modelo:"Iveco Daily",       tipo:"van", km:1540, horas:82,  ocioso:false, zona:"Duque de Caxias", pos:{lat:-22.805,lng:-43.305} },
    { placa:"WSD-9E01", modelo:"Mercedes Accelo Basculante", tipo:"caminhao", op:true, km:1210, horas:64, ocioso:false, zona:"Betim", pos:{lat:-19.978,lng:-44.188} },
    { placa:"FRN-7A19", modelo:"Ford Transit",      tipo:"van", km:640,  horas:31,  ocioso:true,  zona:"Uberlândia", pos:{lat:-18.919,lng:-48.297} },
    { placa:"XUP-3B50", modelo:"Renault Master",    tipo:"van", km:450,  horas:23,  ocioso:true,  zona:"Campinas", pos:{lat:-22.895,lng:-47.070} },
    { placa:"ROL-0303", modelo:"Rolo compactador CA25",   tipo:"maquina", km:null, horas:0,   ocioso:true,  zona:"Campinas", pos:{lat:-22.910,lng:-47.062} }
  ],

  // Mapa real de concentração (lat/lng + peso) e ranking de tempo por cidade.
  // Sem este bloco o painel do mapa NAO renderiza (cliente real só vê com dado real).
  rotas_calor: {
    pontos: [
      { lat:-22.935, lng:-47.095, w:3.2 }, { lat:-22.905, lng:-47.060, w:2.9 },
      { lat:-22.875, lng:-47.025, w:2.6 }, { lat:-21.207, lng:-47.845, w:2.4 },
      { lat:-21.177, lng:-47.810, w:2.1 }, { lat:-21.147, lng:-47.775, w:1.8 },
      { lat:-23.531, lng:-47.493, w:2.2 }, { lat:-23.501, lng:-47.458, w:1.9 },
      { lat:-23.471, lng:-47.423, w:1.6 }, { lat:-23.253, lng:-45.936, w:2.0 },
      { lat:-23.223, lng:-45.901, w:1.7 }, { lat:-23.193, lng:-45.866, w:1.4 },
      { lat:-23.216, lng:-46.919, w:1.8 }, { lat:-23.186, lng:-46.884, w:1.5 },
      { lat:-23.156, lng:-46.849, w:1.2 }, { lat:-23.991, lng:-46.368, w:1.6 },
      { lat:-23.961, lng:-46.333, w:1.3 }, { lat:-23.484, lng:-46.568, w:1.6 },
      { lat:-23.454, lng:-46.533, w:1.3 }, { lat:-23.386, lng:-46.911, w:1.4 },
      { lat:-23.356, lng:-46.876, w:1.1 }, { lat:-22.755, lng:-47.684, w:1.0 },
      { lat:-22.725, lng:-47.649, w:0.7 }, { lat:-22.499, lng:-44.481, w:0.8 },
      { lat:-22.469, lng:-44.446, w:0.6 }, { lat:-22.815, lng:-43.340, w:0.6 },
      { lat:-22.785, lng:-43.305, w:0.6 }, { lat:-19.998, lng:-44.233, w:0.6 },
      { lat:-19.968, lng:-44.198, w:0.6 }, { lat:-18.949, lng:-48.312, w:0.6 },
      { lat:-18.919, lng:-48.277, w:0.6 }
    ],
    cidades: [
      { nome:"Campinas", pct:16 },
      { nome:"Ribeirão Preto", pct:12 },
      { nome:"Sorocaba", pct:11 },
      { nome:"São José dos Campos", pct:10 },
      { nome:"Jundiaí", pct:9 },
      { nome:"Santos", pct:8 },
      { nome:"Guarulhos", pct:8 },
      { nome:"Cajamar", pct:7 },
      { nome:"Piracicaba", pct:5 },
      { nome:"Resende", pct:4 },
      { nome:"Duque de Caxias", pct:3 },
      { nome:"Betim", pct:3 },
      { nome:"Uberlândia", pct:2 },
      { nome:"Outras", pct:2 }
    ]
  },

  // Bloco 3 · vigilancia ativa (proteção, sem placar de roubo)
  vigilancia: {
    cobertura_dias: 31,
    cobertura_pct: 99.6,
    rastreadores_online: 17,
    rastreadores_total: 17,
    sinal_qualidade_pct: 97,
    alertas: [
      { tipo:"Cerca virtual", qtd:23 },
      { tipo:"Ignição fora de hora", qtd:9, placas:["TGV-3M09","CWX-8B44"] },
      { tipo:"Excesso de velocidade", qtd:41 },
      { tipo:"Movimentação de madrugada (22h às 5h)", qtd:7, placas:["TGV-3M09","MET-4C22"] }
    ],
    bloqueio_pronto: 17,
    // Saúde: a TENSÃO é da bateria do PRÓPRIO VEÍCULO do cliente (lida pelo rastreador),
    // não do rastreador. Sem este bloco, o painel de saúde não renderiza.
    // bateria_sem_leitura: rastreador sem informar voltagem (nunca vira "bateria fraca").
    saude: {
      comunicando: 17, comunicando_total: 17,
      bateria_fraca: [ { placa:"WSD-9E01", volts:11.8 } ],
      bateria_sem_leitura: 1,
      violacoes: 0
    }
  },

  // Bloco 5 · economia operacional
  // horas_ociosas_mes e eventos_velocidade sao MEDIDOS; o valor em R$ e SEMPRE
  // estimativa com as premissas abaixo (explicitas e ajustaveis por cliente).
  // A Rastcar NAO mede tanque/combustivel. Sem este bloco, a secao nao renderiza.
  economia: {
    horas_ociosas_mes: 96,
    premissa_litros_hora: 2.0,
    premissa_preco_litro: 5.90,
    eventos_velocidade: 41,
    // top de horas paradas por veiculo (medido); o R$ e calculado na pagina
    por_veiculo: [
      { placa:"MET-4C22", horas:22 },
      { placa:"BQT-9A07", horas:17 },
      { placa:"RDZ-1K55", horas:14 }
    ],
    // maquinas e veiculos de operacao (basculante/pipa/munck) fora da conta:
    // neles, motor ligado parado e producao, nao marcha lenta
    maquinas_fora: 3,
    operacionais_fora: 1
  },

  // Bloco 4 · comportamento & risco (Fase 2 conforme o GPS7 exponha o dado)
  comportamento: {
    score_frota: 82,
    piores: [
      { placa:"MET-4C22", score:64, excessos:18 },
      { placa:"KLR-2F18", score:71, excessos:11 },
      { placa:"BQT-9A07", score:74, excessos:8 }
    ],
    melhores: [
      { placa:"WSD-9E01", score:96, excessos:0 },
      { placa:"OKT-2C63", score:94, excessos:1 }
    ]
  },

  // Km rodado por dia (frota inteira) · soma ~48.230 km, fins de semana fracos, pico em 14/07.
  // Fonte real (Fase 2): diffs das fotos noturnas diárias. Sem este bloco, o gráfico some.
  km_diario: [
    { d:"2026-07-01", km:1780 }, { d:"2026-07-02", km:1920 }, { d:"2026-07-03", km:2050 },
    { d:"2026-07-04", km:420 },  { d:"2026-07-05", km:300 },  { d:"2026-07-06", km:1680 },
    { d:"2026-07-07", km:1990 }, { d:"2026-07-08", km:2110 }, { d:"2026-07-09", km:1870 },
    { d:"2026-07-10", km:2240 }, { d:"2026-07-11", km:480 },  { d:"2026-07-12", km:360 },
    { d:"2026-07-13", km:1930 }, { d:"2026-07-14", km:2680 }, { d:"2026-07-15", km:2090 },
    { d:"2026-07-16", km:1840 }, { d:"2026-07-17", km:2160 }, { d:"2026-07-18", km:510 },
    { d:"2026-07-19", km:340 },  { d:"2026-07-20", km:1760 }, { d:"2026-07-21", km:2020 },
    { d:"2026-07-22", km:1950 }, { d:"2026-07-23", km:2080 }, { d:"2026-07-24", km:1730 },
    { d:"2026-07-25", km:450 },  { d:"2026-07-26", km:280 },  { d:"2026-07-27", km:1690 },
    { d:"2026-07-28", km:1980 }, { d:"2026-07-29", km:2040 }, { d:"2026-07-30", km:1900 },
    { d:"2026-07-31", km:1600 }
  ],

  // Calendário de utilização · célula 1 = rodou no dia, 0 = parado. Coerente com os ociosos
  // FRN-7A19 (7 dias) e XUP-3B50 (5 dias). Fins de semana quase todos parados.
  utilizacao: {
    dias: [
      "2026-07-01","2026-07-02","2026-07-03","2026-07-04","2026-07-05","2026-07-06","2026-07-07",
      "2026-07-08","2026-07-09","2026-07-10","2026-07-11","2026-07-12","2026-07-13","2026-07-14",
      "2026-07-15","2026-07-16","2026-07-17","2026-07-18","2026-07-19","2026-07-20","2026-07-21",
      "2026-07-22","2026-07-23","2026-07-24","2026-07-25","2026-07-26","2026-07-27","2026-07-28",
      "2026-07-29","2026-07-30","2026-07-31"
    ],
    por_placa: [
      { placa:"MET-4C22", dias_rodados:24, mapa:[1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1] },
      { placa:"KLR-2F18", dias_rodados:23, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1] },
      { placa:"BQT-9A07", dias_rodados:23, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1] },
      { placa:"RDZ-1K55", dias_rodados:22, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0] },
      { placa:"HNP-7G31", dias_rodados:21, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0] },
      { placa:"TGV-3M09", dias_rodados:20, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0] },
      { placa:"CWX-8B44", dias_rodados:19, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0] },
      { placa:"LMF-5D27", dias_rodados:18, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0] },
      { placa:"PVE-6H12", dias_rodados:16, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0] },
      { placa:"ZAB-4J88", dias_rodados:14, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0] },
      { placa:"OKT-2C63", dias_rodados:12, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
      { placa:"WSD-9E01", dias_rodados:10, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
      { placa:"FRN-7A19", dias_rodados:7,  mapa:[1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0] },
      { placa:"XUP-3B50", dias_rodados:5,  mapa:[0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0] },
      // maquinas: o dia aceso vem do HORIMETRO (trabalhou = rodou), nao do odometro
      { placa:"ESC-0301", dias_rodados:22, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0] },
      { placa:"RET-0302", dias_rodados:18, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0] },
      { placa:"ROL-0303", dias_rodados:0,  mapa:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] }
    ]
  },

  // Benchmark anônimo por porte · 2 métricas favoráveis, 1 desfavorável (exercita o texto construtivo).
  // Média = agregado ANÔNIMO da carteira Rastcar no mesmo porte. Sem este bloco, a seção some.
  benchmark: {
    porte: "6 a 15 veículos",
    frotas_no_porte: 38,
    metricas: [
      { nome:"Km por veículo no mês", voce:3445, media:2980, melhor_e:"maior" },
      { nome:"Score de direção", voce:82, media:76, melhor_e:"maior" },
      { nome:"Horas de motor parado por veículo", voce:7, media:5, melhor_e:"menor" }
    ]
  },

  // Mapa de calor de alertas · matriz [seg..dom] × 24h. Risco concentrado na madrugada de sexta
  // e na manhã de segunda. Sem este bloco (ou total 0), a grade some.
  heat_alertas: {
    total: 113,
    matriz: [
      [0,0,0,0,0,1,3,6,5,3,2,1,1,0,0,1,1,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,1,2,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,1,1,2,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0],
      [0,0,0,0,0,0,0,1,2,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0],
      [5,6,7,4,2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4],
      [3,2,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,2,2,3],
      [2,2,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,2]
    ]
  },

  // Manutenção preventiva · veículo cruza marco de ODÔMETRO (10.000 km);
  // máquina cruza marco de HORÍMETRO (250 h). NUNCA é diagnóstico mecânico. Sem este bloco, some.
  manutencao: [
    { placa:"MET-4C22", odometro:120340, marco:120000 },
    { placa:"ESC-0301", horimetro:5120, marco_h:5000 }
  ]
};
