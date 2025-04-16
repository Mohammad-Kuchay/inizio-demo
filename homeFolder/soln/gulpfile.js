const { src, dest, series } = require("gulp");
const ts = require("gulp-typescript");
const env = require("gulp-env");
const del = require("del");
const nodemon = require("gulp-nodemon");
const eslint = require("gulp-eslint-new");

const SCHEMA_FILES = ["src/**/*.avsc"];
const JSON_FILES = ["src/*.json", "src/**/*.json"];
const PROTO_FILES = ["src/**/*.proto", "!./**/*.ts"];

// pull in the project TypeScript config
const tsProject = ts.createProject("tsconfig.json");
const esLintProject = ts.createProject("eslint.tsconfig.json");

function clean() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return del(["dist"]);
}

function build(cb) {
    const tsResult = tsProject.src().pipe(tsProject());
    tsResult.js.pipe(dest("dist"));
    cb();
}

function assets(cb) {
    src(JSON_FILES).pipe(dest("dist"));
    cb();
}

function schema(cb) {
    src(SCHEMA_FILES).pipe(dest("dist"));
    cb();
}

function proto(cb) {
    src(PROTO_FILES).pipe(dest("dist"));
    cb();
}

function watchFiles() {
    env({
        file: ".env",
        type: "ini"
    });

    nodemon({
        watch: ["src"],
        ext: "ts",
        ignore: ["src/**/*.spec.ts"],
        exec: "ts-node ./src/index.ts"
    });
}

function esLint() {
    return esLintProject
        .src()
        .pipe(eslint({ fix: true }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

exports.clean = clean;
exports.build = series(esLint, build, proto, schema);
exports.assets = assets;
exports.watch = series(esLint, build, proto, watchFiles, assets);
exports.rebuild = series(clean, esLint, build, proto, schema);
exports.buildjs = series(clean, build);
exports.default = series(esLint, clean, build, proto, assets, watchFiles);
