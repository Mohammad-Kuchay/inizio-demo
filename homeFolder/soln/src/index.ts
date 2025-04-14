import "reflect-metadata";
import { Bootstrap } from "./bootstrap";

(async () => {
    const app = await Bootstrap.startup();
    return app;
})().catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
});
