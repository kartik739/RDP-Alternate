const { exec } = require("child_process");

const Command = (command) => {
    return new Promise((resolve, reject) => {
        exec(`${command}`, (error, stdout, stderr) => {
            if (error || stderr) resolve("error");
            else resolve(stdout);
        });
    });
};

module.exports = {
    Command,
};
