export default function (moduleOptions) {
  console.log('just add alias module')
  this.extendBuild((config, { isDev, isClient }) => {
    config.resolve.alias['~aliasModule'] = resolve(__dirname)
  })
}
