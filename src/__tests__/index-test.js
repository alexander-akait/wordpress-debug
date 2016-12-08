import fs from 'fs';
import path from 'path';
import pify from 'pify';
import test from 'ava'; // eslint-disable-line node/no-unpublished-import
import wordpressDebug from '../index';

const fixturesDir = path.join(__dirname, 'fixtures');

test('should throw error if `wpConfigPath` option not passed', (t) => {
    t.throws(() => wordpressDebug(), 'Require `wpConfigPath` option');
});

test('should throw error if `wp-config.php` is empty', (t) => {
    t.throws(wordpressDebug(path.join(fixturesDir, 'wp-config-empty.php')), 'Empty contents of `wp-config.php`');
});

test.serial('should disable debug', async (t) => {
    const wpConfigPath = path.join(fixturesDir, 'wp-config.php');

    await wordpressDebug(wpConfigPath, false);

    const data = await pify(fs).readFile(wpConfigPath);
    const contents = data.toString();

    t.regex(contents, /define\('WP_DEBUG',\sfalse\);/);
    t.regex(contents, /define\('WP_DEBUG_DISPLAY',\sfalse\);/);
    t.regex(contents, /define\('WP_DEBUG_LOG',\sfalse\);/);
    t.regex(contents, /define\('SAVEQUERIES',\sfalse\);/);
    t.regex(contents, /define\('SCRIPT_DEBUG',\sfalse\);/);
    t.regex(contents, /define\('CONCATENATE_SCRIPTS',\strue\);/);
    t.regex(contents, /define\('COMPRESS_SCRIPTS',\strue\);/);
    t.regex(contents, /define\('COMPRESS_CSS',\strue\);/);
});

test.serial('should enable debug', async (t) => {
    const wpConfigPath = path.join(fixturesDir, 'wp-config.php');

    await wordpressDebug(wpConfigPath, true);

    const data = await pify(fs).readFile(wpConfigPath);
    const contents = data.toString();

    t.regex(contents, /define\('WP_DEBUG',\strue\);/);
    t.regex(contents, /define\('WP_DEBUG_DISPLAY',\strue\);/);
    t.regex(contents, /define\('WP_DEBUG_LOG',\strue\);/);
    t.regex(contents, /define\('SAVEQUERIES',\strue\);/);
    t.regex(contents, /define\('SCRIPT_DEBUG',\strue\);/);
    t.regex(contents, /define\('CONCATENATE_SCRIPTS',\sfalse\);/);
    t.regex(contents, /define\('COMPRESS_SCRIPTS',\sfalse\);/);
    t.regex(contents, /define\('COMPRESS_CSS',\sfalse\);/);
});
