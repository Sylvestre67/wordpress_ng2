// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  api_host:   'http://localhost:15000/wp-json/wp/v2/',
  wp_host: 'http://localhost:15000/',
  google_api_key: 'AIzaSyBIW4WqTo3MAS_loMdhhwfCWGeVoc3IYO8',
  mchimp_api_key: 'apikey 402b770f577be5e101b64855bde917f0-us3'
};
