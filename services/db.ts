import { homedir } from 'os'
import { join } from 'path'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const dbFile = join(homedir(), 'db.json')
const dbAdapter = new JSONFile(dbFile)
const db: any = new Low(dbAdapter)

let initPromise = new Promise<undefined>(async function (resolve, reject) {
	await db.read()
	resolve(undefined)
})


export async function getDbData(): Promise<any> {
	await initPromise
	await db.read()
	return db.data
}