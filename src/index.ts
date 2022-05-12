#!/usr/bin/env node

import shell from "child_process";
import { platform } from "process";

if (platform === "win32") {
  throw new Error("The script is not support on window");
}
shell.exec("lsof -i -P -n | grep LISTEN", (__, stdout) => {
  console.log(stdout);
});
