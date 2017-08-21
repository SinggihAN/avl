const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .js('resources/assets/js/ntrade.js', 'public/js')
   .js('resources/assets/js/sourcing.js', 'public/js')
   .js('resources/assets/js/table.js', 'public/js')
   .js('resources/assets/js/vue.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.scripts([
   'resources/assets/js/propeller.js',
   'resources/assets/js/toastr.js',
], 'public/js/all.js');

mix.styles([
   'resources/assets/css/propeller.css',
   'resources/assets/css/toastr.css',
   'resources/assets/css/style.css',
], 'public/css/all.css');

mix.styles([
	'node_modules/datatables.net-bs/css/dataTables.bootstrap.css',
	'node_modules/datatables.net-responsive-bs/css/responsive.bootstrap.css',
	'node_modules/datatables.net-select-dt/css/select.dataTables.css',
	'node_modules/propellerkit-datatables/css/pmd-datatable.css'
	], 'public/css/dataTables.css');
