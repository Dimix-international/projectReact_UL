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
            RANDOM: path.resolve(__dirname, 'src', 'sort.ts.ts'), // RANDOM - название файла
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
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined, // для быстрого ребилда во время разработки
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
