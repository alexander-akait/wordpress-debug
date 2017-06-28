import fs from "fs";
import pify from "pify";

export default (wpConfigPath, debug = true) => {
    if (!wpConfigPath) {
        throw new Error("Require `wpConfigPath` option");
    }

    return pify(fs)
        .readFile(wpConfigPath)
        .then(data => {
            if (!data || (data && data.length === 0)) {
                throw new Error("Empty contents of `wp-config.php`");
            }

            let positive = null;
            let negative = null;

            if (debug) {
                positive = /(WP_DEBUG|WP_DEBUG_DISPLAY|WP_DEBUG_LOG|SAVEQUERIES|SCRIPT_DEBUG)/i;
                negative = /(CONCATENATE_SCRIPTS|COMPRESS_SCRIPTS|COMPRESS_CSS)/i;
            } else {
                positive = /(CONCATENATE_SCRIPTS|COMPRESS_SCRIPTS|COMPRESS_CSS)/i;
                negative = /(WP_DEBUG|WP_DEBUG_DISPLAY|WP_DEBUG_LOG|SAVEQUERIES|SCRIPT_DEBUG)/i;
            }

            const replaceRegExp = new RegExp(
                "\\((\\'|\")" +
                    "(WP_DEBUG|WP_DEBUG_DISPLAY|WP_DEBUG_LOG|SAVEQUERIES|" +
                    "SCRIPT_DEBUG|CONCATENATE_SCRIPTS|COMPRESS_SCRIPTS|COMPRESS_CSS)" +
                    "(\\'|\")(.*?),\\s(.*?)\\)",
                "gmi"
            );

            return data
                .toString()
                .replace(replaceRegExp, (text, unused, foundString) => {
                    positive.lastIndex = 0;
                    negative.lastIndex = 0;

                    if (positive.test(foundString)) {
                        return `('${foundString}', true)`;
                    } else if (negative.test(foundString)) {
                        return `('${foundString}', false)`;
                    }

                    return text;
                });
        })
        .then(result =>
            pify(fs).writeFile(wpConfigPath, result).then(() => result)
        );
};
