import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    { ignores: ['**/javascript', 'temp'] },
    {
        files: ['**/*.js'],
        languageOptions: { ecmaVersion: 'latest', sourceType: 'script' },
    },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
];
