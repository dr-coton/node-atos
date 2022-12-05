import util from "node:util";
import childProcess from "node:child_process";

const exec = util.promisify(childProcess.exec);

/**
 *
 * @param {string} dSYMPath
 * @param {{
 *  object: string,
 *  frame: string,
 * }} report
 */
const symbolicate = async (dSYMPath, report) => {
  if (!dSYMPath) {
    throw new Error("dSYMPath is required");
  }

  if (!report) {
    throw new Error("report is required");
  }

  const { stdout, stderr } = await exec(
    `atosl -o ${dSYMPath} -l ${report.object} ${report.frame}`
  );

  if (stderr) {
    throw new Error(stderr);
  }

  return stdout;
};

export default symbolicate;
