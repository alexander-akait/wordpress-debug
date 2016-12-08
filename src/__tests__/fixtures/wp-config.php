<?php
// ** MySQL settings ** //
/** The name of the database for WordPress */
define('DB_NAME', 'db_name');

/** MySQL database username */
define('DB_USER', 'db_user');

/** MySQL database password */
define('DB_PASSWORD', 'db_password');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('AUTH_KEY',         'AUTH_KEY');
define('SECURE_AUTH_KEY',  'SECURE_AUTH_KEY');
define('LOGGED_IN_KEY',    'LOGGED_IN_KEY');
define('NONCE_KEY',        'NONCE_KEY');
define('AUTH_SALT',        'AUTH_SALT');
define('SECURE_AUTH_SALT', 'SECURE_AUTH_SALT');
define('LOGGED_IN_SALT',   'LOGGED_IN_SALT');
define('NONCE_SALT',       'NONCE_SALT');


$table_prefix = 'table_prefix_';

$WP_DEBUG = 'WP_DEBUG';

define('WP_DEBUG', true);
define('WP_DEBUG_DISPLAY', true);
define('WP_DEBUG_LOG', true);
define('SAVEQUERIES', true);
define('SCRIPT_DEBUG', true);
define('CONCATENATE_SCRIPTS', false);
define('COMPRESS_SCRIPTS', false);
define('COMPRESS_CSS', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
