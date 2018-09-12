<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
if (file_exists(dirname(__FILE__).'/local.php')) {
	// Local DB Settings
	define( 'DB_NAME', 'local' );
	define( 'DB_USER', 'root' );
	define( 'DB_PASSWORD', 'root' );
	define( 'DB_HOST', 'localhost' );
} else {
	// Live DB Settings
	define( 'DB_NAME', 'gfgdfgdgdfgd' );
	define( 'DB_USER', 'root' );
	define( 'DB_PASSWORD', 'root' );
	define( 'DB_HOST', 'localhost' );
}

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'LsMiiG99ErAgD2pGEINJRK7kNHurl0fMCbUZugsgxBo2BydcjNeDw+ooWmMY/xaqOLrqSrC9WrqhodvTYybUUg==');
define('SECURE_AUTH_KEY',  'WSs2EeqcPO7n/9CH4SKTbAdpxaDOf5eAQYcKh/zCfdfvKTnDiu2qEa3insZ465MdhpfUq96crG9uaY+c3XW9ag==');
define('LOGGED_IN_KEY',    'BC3mkFLPHibUApCryuv38kXmgdRzbo/Wc7hadxyxw/zHuSFGPhly7O5z74YGJCiODaPvyfgjB14lWITacr0jVw==');
define('NONCE_KEY',        'M2o7e9O8rmSascLXNmk2HP72fexyBg1t+5FJJ15UwRwtmgzgmRCeB5KFziDHYlWBLTgDGS44l+q4/rkQMFwnlw==');
define('AUTH_SALT',        'aoYR2kYL7/v/NZ+/fvV5erNIE4eiHks+kfSzdlJbifFjLutnv8/7hhnupvVSbFCHG4fMXIFVh6WDSqIwiJMAVg==');
define('SECURE_AUTH_SALT', 'wQJ1ffWAwHZqHdw7mNq2Zdtr0vX5CkESjd162miM/X0oP5YjRuQ2Q+uR++KSLWfgpbES+0dzztsL1tQ0QcWpgg==');
define('LOGGED_IN_SALT',   'GiRfv3VWrCVLIkdNozSIe+ChO3OCiUEb0DtHqSD8u5p/nACTIj6uIjaO8IJTsK5PReSgO2CH0/+aMzF06Misyg==');
define('NONCE_SALT',       '1iYjV9KXhbBcv0tJTgsQOU7aXklNTRh02Xt6T4UHeYKJVNwII95IsWgoOJz/ti7nkg0mpsW0fA7CPcT1OQgQqA==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
