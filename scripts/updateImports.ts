import { Project } from 'ts-morph';

const project = new Project({});

// файлы с исхдным кодом
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles(); // получаем все файлы

function isAbsolute(value: string) {
    const layers = [
        'app',
        'shared',
        'entities',
        'features',
        'widgets',
        'pages',
    ];
    return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations(); // получаем все импорты
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue(); // данные об импорте

        if (isAbsolute(value)) {
            // проверяем что это импорт с наших слоев
            importDeclaration.setModuleSpecifier(`@/${value}`); // переопределяем импрот
        }
    });
});

project.save();
