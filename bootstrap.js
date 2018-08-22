module.exports = {
  prompt: [
    {
      type: 'confirm',
      name: 'tips',
      message: 'Are sure use this vue-template?',
      default: true,
    },
  ],
  completeMessage: 'To get started:\n\n cd <%=destPath%>\n  npm install\n  npm start\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack',
  filter: {},
  ignore: [
  ]
};