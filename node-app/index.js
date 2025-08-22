const fs = require("fs");
const path = require("path");

// O caminho do arquivo de log dentro do container
const logFile = path.join("/logs", "app.log");

// A função que escreve a mensagem no arquivo
function writeLog(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] INFO: ${message}\n`;
  fs.appendFileSync(logFile, logMessage);
  console.log(logMessage.trim()); // Exibe no console do container também
}

// Gera um novo log a cada 2 segundos
setInterval(() => {
  const pedidoId = Math.floor(Math.random() * 1000000);
  writeLog(`Pedido ${pedidoId} criado por usuario: UsuarioTest`);
}, 2000);