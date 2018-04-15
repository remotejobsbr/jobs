// White box test to verify the suffix pattern into directories

import { lstatSync, readdirSync } from 'fs'
import { join } from 'path'
import { capitalize } from 'lodash'

const componentsPath = './src/components'
const ignoreDirectories = ['__tests__', 'shared']

const isDirectory = name => lstatSync(join(componentsPath, name)).isDirectory()
const isFile = (path, name) => lstatSync(join(path, name)).isFile()

const isValidDirectoryName = name =>
  !ignoreDirectories.find(dirName => dirName === name)

const readDirectory = path => readdirSync(path).map(name => name)

const getDirectories = path =>
  readDirectory(path)
    .filter(isDirectory)
    .filter(isValidDirectoryName)

const getFiles = path => readDirectory(path).filter(name => isFile(path, name))

describe('Components White Box Tests', () => {
  describe('The component directories and suffix patterns', () => {
    it('Should have the same suffix name as the directory name', () => {
      const directories = getDirectories(componentsPath)

      /**
       * It works in one directory level inside each
       * directory of 'components'
       */
      directories.map(dirName => {
        const suffix = `${capitalize(dirName)}.js`
        const suffixRegex = new RegExp(`${suffix}$`)
        const files = getFiles(`${componentsPath}/${dirName}`)

        files.forEach(fileName => {
          expect(fileName).toMatch(suffixRegex)
        })
      })
    })
  })
})
