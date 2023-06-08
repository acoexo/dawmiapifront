const {src, dest, watch} =require("gulp");
const sass=require("gulp-sass")(require("sass"));
const plumber=require("gulp-plumber");

function css(done){
    src("frontend/src/scss/**/*.scss")
    .pipe(plumber())
    .pipe (sass())
    .pipe (dest("frontend/build/css"))
    done()
}
function tareas(done){
    watch ("frontend/src/scss/**/*.scss", css);
    done();
}

exports.css=css;
exports.tareas=tareas;

