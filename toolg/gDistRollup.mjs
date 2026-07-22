import path from 'path'
import rollupFiles from 'w-package-tools/src/rollupFiles.mjs'
import rollupWorker from 'w-package-tools/src/rollupWorker.mjs'


let fdSrc = './src'
let fdTar = './dist'

async function core() {

    await rollupFiles({ //rollupFiles預設會clean folder
        fns: 'WHighcharts.mjs',
        fdSrc,
        fdTar,
        nameDistType: 'kebabCase',
        globals: {
        },
        external: [
        ],
    })
        .catch((err) => {
            console.log(err)
        })

}
core()
    .catch((err) => {
        console.log(err)
    })
