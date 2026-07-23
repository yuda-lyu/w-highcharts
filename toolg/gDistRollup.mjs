import path from 'path'
import rollupFiles from 'w-package-tools/src/rollupFiles.mjs'
import rollupWorker from 'w-package-tools/src/rollupWorker.mjs'


let fdSrc = './src'
let fdTar = './dist'

rollupFiles({ //rollupFiles預設會clean folder
    fns: 'WHighcharts.mjs',
    fdSrc,
    fdTar,
    nameDistType: 'kebabCase',
    globals: {
    },
    external: [
    ],
})
