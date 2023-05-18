import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    //порядок вызываемых лоадеров имеет значение

    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };


    const fileLoader = {
         test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        //woff2|woff - добавили сами расширения шрифтов если захотим работать
         use: [
                {
                    loader: 'file-loader',
            },
         ],
    };

    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                /*"css-loader",*/
                {
                    loader: "css-loader",
                    options: {
                       modules: {
                           //auto - автогенерация класса - обычные файлы будут обрабатываться как css
                           auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                           //назначение имен классов
                           //[path][name]__[local] - путь до компонента название класса и хэш
                           // [hash:base64:8] - оставляем хэш с 8 симовали
                           localIdentName: isDev
                               ? '[path][name]__[local]--[hash:base64:5]'
                               : '[hash:base64:8] '
                       },
                    }
                },
                "sass-loader",
            ],
        };

    //Если не используем typescript - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ]
}