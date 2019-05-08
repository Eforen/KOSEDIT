import * as express from "express"
import * as path from "path"
import * as reload from "reload"
import * as watch from "watch"
//const express = require("express")
//const path = require("path")

let app = express()
let port = 3000
let router = express.Router();

router.use('/', express.static(path.join(__dirname, 'dist')));
router.get('/', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')))

app.use(router)

let reloadServer = reload(app);

watch.watchTree(__dirname + "/dist", async function (f, curr, prev) {
    // Fire server-side reload event
    (await reloadServer).reload();
});

app.listen(port, () => console.log(`Go to http://localhost:${port} to view.`))