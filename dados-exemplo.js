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
    narrativa: "Sua frota rodou 48.230 km em julho sob monitoramento contínuo. As 3 máquinas somaram 390 horas de trabalho no horímetro e a operação se manteve estável, com 99,6% da frota em atividade.",
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

  // Trajetória (curva do score no Resumo). Um ponto por mês, gravado pelo Builder;
  // com menos de 2 pontos o painel não aparece. Fecha no mês atual (julho, score 82).
  historico: [
    { mes: "2026-02", score: 69, km_mes: 38120, horas_operacao: 1804, horas_ociosas_mes: 132 },
    { mes: "2026-03", score: 73, km_mes: 41780, horas_operacao: 1902, horas_ociosas_mes: 121 },
    { mes: "2026-04", score: 71, km_mes: 39640, horas_operacao: 1875, horas_ociosas_mes: 127 },
    { mes: "2026-05", score: 75, km_mes: 44210, horas_operacao: 1980, horas_ociosas_mes: 114 },
    { mes: "2026-06", score: 78, km_mes: 43060, horas_operacao: 1978, horas_ociosas_mes: 104 },
    { mes: "2026-07", score: 82, km_mes: 48230, horas_operacao: 2114, horas_ociosas_mes: 96 }
  ],

  // Motoristas (identificação por chave eletrônica). Sem este bloco, a seção não existe.
  // BLINDAGEM: tudo aqui é medido pelo leitor do veículo; km sem identificação é honesto.
  motoristas: {
    identificados: 6,
    autenticacoes: 148,
    km_identificado_pct: 87,
    sem_identificacao: { km: 3140, veiculos: ["BQT-9A07", "JKP-7D55"] },
    ranking: [
      { nome: "Carlos Meirelles", codigo: "M-014", score: 94, km: 8340, horas: 218,
        veiculos: ["MET-4C22"], eventos: { velocidade: 0, freada: 1, aceleracao: 0, celular: 0, fadiga: 0 } },
      { nome: "Edson Prado", codigo: "M-022", score: 88, km: 7120, horas: 201,
        veiculos: ["KLR-2F18", "VHT-3B91"], eventos: { velocidade: 2, freada: 2, aceleracao: 1, celular: 0, fadiga: 0 } },
      { nome: "Rogério Tanaka", codigo: "M-007", score: 81, km: 6480, horas: 187,
        veiculos: ["ESC-0301"], eventos: { velocidade: 4, freada: 3, aceleracao: 2, celular: 0, fadiga: 0 } },
      { nome: "Marcos Vilela", codigo: "M-031", score: 72, km: 5930, horas: 176,
        veiculos: ["PQR-8C12", "MET-4C22"], eventos: { velocidade: 7, freada: 5, aceleracao: 3, celular: 1, fadiga: 0 } },
      { nome: "Ademir Costa", codigo: "M-019", score: 58, km: 5410, horas: 168,
        veiculos: ["BQT-9A07"], eventos: { velocidade: 12, freada: 8, aceleracao: 6, celular: 2, fadiga: 1 } },
      { nome: "Jorge Lins", codigo: "M-026", score: null, km: 2110, horas: 74,
        veiculos: ["JKP-7D55"], eventos: null }
    ]
  },

  // Jornada de trabalho (app Motorista 7 · modulo Jornada + checklist de PONTO do Frota 7).
  // BLINDAGEM: sem este bloco a secao nao existe, nem no indice. Os campos espelham
  // EXATAMENTE o que o Frota 7 guarda: Motorista, Monitorado, Inicio, Fim, Finalizada e
  // a Observacao de edicao manual. `marcos` vem do checklist de ponto (6 caixas), e o
  // backend faz a juncao por motorista + dia. Nada aqui e estimado: jornada sem fim
  // registrado fica com fim:null e NUNCA recebe um fim chutado.
  jornada: {
    app: "Motorista 7",
    modelo_checklist: "PONTO",
    // quem esta identificado no veiculo mas nunca abriu o app (historia da adesao)
    sem_app: [ { nome:"Jorge Lins", codigo:"M-026" } ],
    registros: [
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-02T05:59", fim:"2026-07-02T14:50", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-03T06:54", fim:"2026-07-03T16:48", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-04T05:13", fim:"2026-07-04T14:05", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-06T05:23", fim:"2026-07-06T15:29", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-07T05:46", fim:"2026-07-07T15:09", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-08T06:23", fim:"2026-07-08T16:22", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-09T05:53", fim:"2026-07-09T15:16", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-10T06:36", fim:"2026-07-10T15:33", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-11T06:08", fim:"2026-07-11T15:15", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-13T05:59", fim:null, finalizada:false, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-14T06:10", fim:"2026-07-14T15:39", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-16T05:48", fim:"2026-07-16T16:05", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-17T06:42", fim:"2026-07-17T16:32", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-20T05:49", fim:"2026-07-20T15:44", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-21T05:54", fim:"2026-07-21T15:06", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-22T06:04", fim:"2026-07-22T15:27", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-23T06:01", fim:"2026-07-23T14:58", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-24T06:03", fim:"2026-07-24T15:59", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-25T06:35", fim:"2026-07-25T15:38", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-27T06:07", fim:"2026-07-27T15:35", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-28T06:18", fim:"2026-07-28T16:04", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-29T06:04", fim:"2026-07-29T15:37", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-30T06:37", fim:"2026-07-30T16:12", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Carlos Meirelles", codigo:"M-014", veiculo:"MET-4C22", inicio:"2026-07-31T06:40", fim:"2026-07-31T15:57", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-02T06:10", fim:"2026-07-02T15:31", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-03T05:40", fim:"2026-07-03T16:01", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-04T06:15", fim:"2026-07-04T15:12", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-06T06:50", fim:"2026-07-06T16:39", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-07T05:44", fim:"2026-07-07T14:56", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-08T05:12", fim:"2026-07-08T14:38", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-09T05:11", fim:"2026-07-09T13:19", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-10T05:05", fim:"2026-07-10T13:56", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-11T05:08", fim:"2026-07-11T14:38", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-13T05:27", fim:"2026-07-13T14:50", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-15T05:45", fim:"2026-07-15T15:50", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-16T04:57", fim:"2026-07-16T14:25", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-17T05:52", fim:"2026-07-17T14:51", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-18T04:53", fim:"2026-07-18T14:09", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-20T05:25", fim:"2026-07-20T14:24", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-22T06:43", fim:"2026-07-22T15:07", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-24T06:12", fim:"2026-07-24T15:46", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-25T05:56", fim:"2026-07-25T14:15", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-27T04:23", fim:"2026-07-27T12:56", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-28T07:25", fim:"2026-07-28T17:16", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-29T05:42", fim:"2026-07-29T14:54", finalizada:true, editada:"Fim ajustado pelo controle de trafego", marcos:{ refeicao:true, repouso:true } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-30T05:48", fim:null, finalizada:false, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Edson Prado", codigo:"M-022", veiculo:"KLR-2F18", inicio:"2026-07-31T06:23", fim:"2026-07-31T15:23", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-01T06:18", fim:"2026-07-01T15:40", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-02T06:48", fim:null, finalizada:false, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-03T08:10", fim:"2026-07-03T17:09", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-04T07:25", fim:"2026-07-04T16:50", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-06T06:57", fim:"2026-07-06T16:52", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-07T06:04", fim:"2026-07-07T13:46", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-08T07:25", fim:"2026-07-08T16:46", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-10T07:40", fim:"2026-07-10T17:38", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-11T07:54", fim:"2026-07-11T16:29", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-13T07:09", fim:"2026-07-13T17:03", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-15T07:14", fim:"2026-07-15T16:31", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-16T07:00", fim:"2026-07-16T16:35", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-17T07:51", fim:"2026-07-17T16:39", finalizada:true, editada:"Jornada fechada pelo escritorio", marcos:{ refeicao:true, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-18T07:39", fim:"2026-07-18T17:13", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-21T07:10", fim:"2026-07-21T16:06", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-22T07:23", fim:null, finalizada:false, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-23T07:36", fim:"2026-07-23T16:25", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-24T08:58", fim:"2026-07-24T17:48", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-25T06:58", fim:"2026-07-25T14:32", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-27T06:56", fim:"2026-07-27T15:18", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-29T06:50", fim:"2026-07-29T15:48", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Rogério Tanaka", codigo:"M-007", veiculo:"ESC-0301", inicio:"2026-07-30T08:18", fim:"2026-07-30T17:27", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-01T09:42", fim:"2026-07-01T20:20", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-02T07:51", fim:"2026-07-02T15:28", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-03T06:15", fim:"2026-07-03T15:23", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-06T08:40", fim:"2026-07-06T17:47", finalizada:true, editada:"Fim ajustado pelo controle de trafego", marcos:{ refeicao:true, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-07T08:13", fim:"2026-07-07T16:39", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-09T05:41", fim:"2026-07-09T14:28", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-10T08:41", fim:"2026-07-10T18:27", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-11T08:31", fim:"2026-07-11T17:44", finalizada:true, editada:"Celular sem bateria no fim do turno", marcos:{ refeicao:true, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-13T06:28", fim:"2026-07-13T17:02", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-14T06:57", fim:"2026-07-14T16:14", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-16T06:42", fim:"2026-07-16T15:58", finalizada:true, editada:"Celular sem bateria no fim do turno", marcos:{ refeicao:true, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-17T07:26", fim:null, finalizada:false, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-20T08:20", fim:"2026-07-20T17:41", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-21T07:58", fim:null, finalizada:false, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-22T08:48", fim:null, finalizada:false, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-23T07:17", fim:"2026-07-23T16:02", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-24T06:39", fim:"2026-07-24T16:47", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-25T07:32", fim:null, finalizada:false, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-28T07:21", fim:"2026-07-28T16:48", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-29T09:14", fim:"2026-07-29T16:23", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Marcos Vilela", codigo:"M-031", veiculo:"PQR-8C12", inicio:"2026-07-31T07:27", fim:"2026-07-31T17:34", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-03T12:26", fim:"2026-07-03T20:12", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-04T12:20", fim:"2026-07-04T20:55", finalizada:true, editada:"Celular sem bateria no fim do turno", marcos:{ refeicao:false, repouso:true } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-06T14:43", fim:"2026-07-06T23:34", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-09T14:59", fim:"2026-07-10T00:24", finalizada:true, editada:"Celular sem bateria no fim do turno", marcos:{ refeicao:true, repouso:true } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-10T13:37", fim:"2026-07-10T22:04", finalizada:true, editada:"Celular sem bateria no fim do turno", marcos:{ refeicao:false, repouso:false } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-11T15:28", fim:"2026-07-12T00:52", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-13T13:43", fim:"2026-07-13T21:46", finalizada:true, editada:"Celular sem bateria no fim do turno", marcos:{ refeicao:true, repouso:true } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-14T13:32", fim:"2026-07-14T21:46", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-17T14:14", fim:null, finalizada:false, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-18T12:49", fim:"2026-07-18T21:30", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-20T11:51", fim:"2026-07-20T19:13", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-21T14:44", fim:null, finalizada:false, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-23T13:01", fim:"2026-07-23T21:44", finalizada:true, editada:null, marcos:{ refeicao:true, repouso:true } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-24T14:37", fim:"2026-07-24T21:34", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:true } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-25T11:02", fim:null, finalizada:false, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-27T15:10", fim:null, finalizada:false, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-28T13:57", fim:null, finalizada:false, editada:null, marcos:{ refeicao:true, repouso:false } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-29T17:55", fim:"2026-07-30T02:00", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-30T13:54", fim:"2026-07-30T21:50", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:false } },
    { motorista:"Ademir Costa", codigo:"M-019", veiculo:"BQT-9A07", inicio:"2026-07-31T11:53", fim:"2026-07-31T20:33", finalizada:true, editada:null, marcos:{ refeicao:false, repouso:false } }
    ]
  },

  // Bloco 2 · frota em movimento (zona = onde o veiculo ficou mais tempo no mes)
  // v3.5 · tipo por veiculo; MAQUINA tem km:null (sem odometro, medida por horimetro)
  veiculos: [
    { placa:"MET-4C22", modelo:"Scania R450",       tipo:"caminhao", km:7550, horas:305, ocioso:false, zona:"Campinas", pos:{lat:-22.925,lng:-47.080} },
    { placa:"KLR-2F18", modelo:"Volvo FH",          tipo:"caminhao", km:6340, horas:268, ocioso:false, zona:"Ribeirão Preto", pos:{lat:-21.187,lng:-47.820} },
    { placa:"BQT-9A07", modelo:"VW Constellation",  tipo:"caminhao", km:5590, horas:240, ocioso:false, zona:"Sorocaba", pos:{lat:-23.501,lng:-47.458} },
    { placa:"RDZ-1K55", modelo:"Mercedes Actros",   tipo:"caminhao", km:5310, horas:222, ocioso:false, zona:"São José dos Campos", pos:{lat:-23.213,lng:-45.891} },
    { placa:"HNP-7G31", modelo:"Iveco Tector",      tipo:"caminhao", km:4350, horas:190, ocioso:false, zona:"Jundiaí", pos:{lat:-23.166,lng:-46.904} },
    { placa:"TGV-3M09", modelo:"Ford Cargo",        tipo:"caminhao", km:3830, horas:171, ocioso:false, zona:"Santos", pos:{lat:-23.981,lng:-46.343} },
    { placa:"CWX-8B44", modelo:"DAF XF",            tipo:"caminhao", km:3400, horas:150, ocioso:false, zona:"Guarulhos", pos:{lat:-23.464,lng:-46.533} },
    { placa:"LMF-5D27", modelo:"Scania P320",       tipo:"caminhao", km:2990, horas:133, ocioso:false, zona:"Cajamar", pos:{lat:-23.356,lng:-46.866} },
    { placa:"PVE-6H12", modelo:"Volvo VM",          tipo:"caminhao", km:2520, horas:118, ocioso:false, zona:"Piracicaba", pos:{lat:-22.715,lng:-47.669} },
    { placa:"ZAB-4J88", modelo:"VW Delivery",       tipo:"caminhao", km:2160, horas:101, ocioso:false, zona:"Resende", pos:{lat:-22.449,lng:-44.456} },
    { placa:"ESC-0301", modelo:"Escavadeira CAT 320",     tipo:"maquina", km:null, horas:214, ocioso:false, zona:"São José dos Campos", pos:{lat:-23.245,lng:-45.912} },
    { placa:"RET-0302", modelo:"Retroescavadeira JCB 3CX", tipo:"maquina", km:null, horas:176, ocioso:false, zona:"Sorocaba", pos:{lat:-23.512,lng:-47.471} },
    { placa:"OKT-2C63", modelo:"Iveco Daily",       tipo:"van", km:1680, horas:82,  ocioso:false, zona:"Duque de Caxias", pos:{lat:-22.805,lng:-43.305} },
    { placa:"WSD-9E01", modelo:"Mercedes Accelo Basculante", tipo:"caminhao", op:true, km:1320, horas:64, ocioso:false, zona:"Betim", pos:{lat:-19.978,lng:-44.188} },
    { placa:"FRN-7A19", modelo:"Ford Transit",      tipo:"van", km:700,  horas:31,  ocioso:true,  zona:"Uberlândia", pos:{lat:-18.919,lng:-48.297} },
    { placa:"XUP-3B50", modelo:"Renault Master",    tipo:"van", km:490,  horas:23,  ocioso:true,  zona:"Campinas", pos:{lat:-22.895,lng:-47.070} },
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
    maquinas_fora_horas: 214,
    operacionais_fora: 1,
    operacionais_fora_horas: 31,
    operacionais_fora_tipos: ["basculante"]
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
      { placa:"MET-4C22", dias_rodados:26, mapa:[1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1] },
      { placa:"KLR-2F18", dias_rodados:25, mapa:[1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1] },
      { placa:"BQT-9A07", dias_rodados:25, mapa:[1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1] },
      { placa:"RDZ-1K55", dias_rodados:24, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0] },
      { placa:"HNP-7G31", dias_rodados:22, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0] },
      { placa:"TGV-3M09", dias_rodados:21, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0] },
      { placa:"CWX-8B44", dias_rodados:19, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0] },
      { placa:"LMF-5D27", dias_rodados:18, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0] },
      { placa:"PVE-6H12", dias_rodados:16, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0] },
      { placa:"ZAB-4J88", dias_rodados:14, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0] },
      { placa:"OKT-2C63", dias_rodados:12, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
      { placa:"WSD-9E01", dias_rodados:10, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
      { placa:"FRN-7A19", dias_rodados:7,  mapa:[1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0] },
      { placa:"XUP-3B50", dias_rodados:5,  mapa:[0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0] },
      // maquinas: o dia aceso vem do HORIMETRO (trabalhou = rodou), nao do odometro
      { placa:"ESC-0301", dias_rodados:20, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0] },
      { placa:"RET-0302", dias_rodados:16, mapa:[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0] },
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
