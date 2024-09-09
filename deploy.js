import Client from "ssh2-sftp-client";
import fs from "fs";

var secrets = JSON.parse(fs.readFileSync("./secrets.json", "utf8"));

const sourceDir = import.meta.dirname + "/dist/";
const targetDir = secrets.targetDir;

let sftp = new Client();

sftp
  .connect({
    host: secrets.host,
    port: secrets.port,
    username: secrets.username,
    password: secrets.password,
  })
  .then(() => {
    return sftp.delete(targetDir + "index.html", true);
  })
  .then(() => {
    return sftp.put(sourceDir + "index.html", targetDir + "index.html");
  })
  .then(() => {
    return sftp.end();
  })
  .catch((err) => {
    console.log(err, "caught error");
    return sftp.end();
  });
