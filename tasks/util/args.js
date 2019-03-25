import yargs from 'yargs';

const args = yargs

.option('production', {
    boolean: true,
    default: false,
    describe: 'min all scripts'
})

//控制是不是自动编译
.option('watch', {
    boolean: true,
    default: false,
    describe: 'watch all scripts'
})

//命令行执行的日志-输出要不要
.option('verbose', {
    boolean: true,
    default: false,
    describe: 'log'
})

//
.option('sourcemaps', {
    describe: 'force the creation resourcemaps'
})

//端口号
.option('port', {
    string: true,
    default: 8080,
    describe: 'server port'
})

