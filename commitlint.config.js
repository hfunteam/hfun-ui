module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      //0为disable，1为warning，2为error
      //always|never
      //第三位该rule的值
      'type-enum': [2, 'always', [
        'feat', 'fix', 'perf', 'refactor', 'docs', 'style', 'test', 'build', 'revert', 'ci', 'chore', 'release', 'workflow'
      ]],
      'subject-full-stop': [0, 'never'],
      'subject-case': [0, 'never']
    }
};
