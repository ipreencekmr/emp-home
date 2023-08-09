const { modules } = require("../package.json");
let shell = require("shelljs");

const listen = async () => {
    modules.forEach(modulePath => {
        const module = require(`../${modulePath}/package.json`);
        console.log(`listening module: ${module.name}`);
        shell.exec(`npm run start --prefix ${modulePath}`, {
            async: true 
        });
    });
    shell.exec("npm run start --open")
};

const serve = async () => {
    await listen();
};

serve().catch((err) => {
    console.log(err);
});
