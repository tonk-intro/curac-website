import Client from "ssh2-sftp-client";
import fs from "fs";

var secrets = JSON.parse(fs.readFileSync("./secrets.json", "utf8"));

const sourceDir = import.meta.dirname + "/dist/";
const targetDir = secrets.targetDir;

let sftp = new Client();

await sftp.connect({
  host: secrets.host,
  port: secrets.port,
  username: secrets.username,
  password: secrets.password,
});

const pages = fs.readdirSync(sourceDir);

for (const page of pages) {
  //   await sftp.delete(targetDir + page, true);
  await sftp.put(sourceDir + page, targetDir + page);
}

await sftp.end();
