const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://academico3.rj.senac.br:8080/",
    secure: false,
    logLevel: "debug",
  },
];

module.exports = PROXY_CONFIG;
