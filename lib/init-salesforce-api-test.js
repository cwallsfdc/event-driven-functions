const test = require('ava');
const cdcConnector = require('.');

test.beforeEach( t => {
  const context = t.context;
  context.salesforceUsername = 'mars@example.com';
  context.salesforcePassword = 'xxxxx';
});

test('Initialize Salesforce connection', t => {
  const context = t.context

  const subjectGenerator = cdcConnector.initSalesforceApi({
    SALESFORCE_USERNAME: context.salesforceUsername,
    SALESFORCE_PASSWORD: context.salesforcePassword
  })

  let yielded
  yielded = subjectGenerator.next()

  t.is(typeof yielded.value.fn[0].sobjects, 'object', 'is jsForce connection')
  t.is(typeof yielded.value.fn[1], 'function')
  t.deepEqual([context.salesforceUsername, context.salesforcePassword], yielded.value.args)

  yielded = subjectGenerator.next()

  t.is(typeof yielded.value.fn[0].sobjects, 'object', 'is jsForce connection')
  t.is(typeof yielded.value.fn[1], 'function')

  yielded = subjectGenerator.next({ username: 'user@example.org' })

  t.true(yielded.done, 'is done')
  t.is(typeof yielded.value.sobjects, 'object', 'is jsForce connection')
})

test('Use specific Force.com API version', t => {
  const context = t.context

  const subjectGenerator = cdcConnector.initSalesforceApi({
      SALESFORCE_USERNAME: context.salesforceUsername,
      SALESFORCE_PASSWORD: context.salesforcePassword
    },
    'XX.Y'
  )

  let yielded
  yielded = subjectGenerator.next()
  yielded = subjectGenerator.next()
  yielded = subjectGenerator.next({ username: 'user@example.org' })

  t.true(yielded.done, 'is done')
  t.is(yielded.value.version, 'XX.Y', 'uses the specified version')
})