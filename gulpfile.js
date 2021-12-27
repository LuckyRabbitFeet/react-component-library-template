const gulp = require('gulp')
const babel = require('gulp-babel')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const concatCss = require('gulp-concat-css')

const paths = {
  dest: {
    lib: 'lib', // commonjs output path
    esm: 'esm', // ES module output path
  },
  styles: 'components/**/*.css', // style files input path
  scripts: 'components/**/*.{ts,tsx}', // component files input path
}

/**
 * common compile function
 * @param {string} babelEnv - babel env variable
 * @param {string} destDir - output dir
 */
function compileScripts(babelEnv, destDir) {
  const { scripts } = paths
  // set babel env variable
  process.env.BABEL_ENV = babelEnv
  return gulp
    .src(scripts)
    .pipe(babel()) // use gulp-babel processing
    .pipe(gulp.dest(destDir))
}

/**
 * compile cjs
 */
function compileCJS() {
  const { dest } = paths
  return compileScripts('cjs', dest.lib)
}

/**
 * compile esm
 */
function compileESM() {
  const { dest } = paths
  return compileScripts('esm', dest.esm)
}

/**
 * copy css to output dest
 */
function copyCss() {
  const plugins = [
    autoprefixer(),
    cssnano()
  ]

  return gulp
    .src(paths.styles)
    .pipe(postcss(plugins))
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm))
}

/**
 * concat all css files
 */
function concatAllCss() {
  const { styles } = paths
  const plugins = [
    autoprefixer(),
    cssnano()
  ]

  return gulp
    .src(styles)
    .pipe(concatCss('global.min.css'))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('lib'))
}

// series execution of compiled tasks (cjs, esm) to avoiding the env variable effects
const buildScripts = gulp.series(compileCJS, compileESM)

// overall execution of tasks
const build = gulp.parallel(buildScripts, copyCss, concatAllCss)

exports.build = build

exports.default = build
