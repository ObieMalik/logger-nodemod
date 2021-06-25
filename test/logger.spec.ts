import {logger} from '../dist/index'
import * as fs from 'fs'

beforeAll( async () => {
    try {
        await fs.promises.writeFile( 'logs/all.log', '', 'utf-8' )
        await fs.promises.writeFile( 'logs/error.log', '', 'utf-8' )
    } catch ( err ) {
        console.error( err )
    }
} )

describe( 'logger.info', () => {
    logger.info( 'Test run log information using winston logger.' )

    it( 'should be able to log info to "all.log" file', async () => {
        const data = await fs.promises.readFile( 'logs/all.log', 'utf8' )

        expect( data ).toEqual(
            expect.stringContaining( 'Test run log information using winston logger.' ),
        )
    } )

    it( 'should NOT be able to log info to "error.log" file', async () => {
        const data = await fs.promises.readFile( 'logs/error.log', 'utf8' )

        expect( data ).toEqual(
            expect.not.stringContaining( 'Test run log information using winston logger.' ),
        )
    } )
} )
