import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            /* "css-loader", */
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // auto - автогенерация класса - обычные файлы будут обрабатываться как css
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // назначение имен классов
                        // [path][name]__[local] - путь до компонента название класса и хэш
                        // [hash:base64:8] - оставляем хэш с 8 симовали
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8] ',
                    },
                },
            },
            'sass-loader',
        ],
    };
}
