import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        /*  entry: {
            //много entry (файлов)
            RANDOM: path.resolve(__dirname, 'src', 'index.ts.ts'), // RANDOM - название файла
          }, //__dirname - папка в которой в данные момент находимся, далее участки пути */
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js', // [name] - шаблон, contenthash - для генерации id
            path: paths.build,
            clean: true, // чистка предыдущих файлов
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined, // помогает например с поиском ошибки в коде
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
