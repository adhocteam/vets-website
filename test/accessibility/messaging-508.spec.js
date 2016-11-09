const E2eHelpers = require('../util/e2e-helpers');
const Timeouts = require('../util/timeouts.js');
const SMHelpers = require('../util/messaging-helpers');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    SMHelpers.initApplicationSubmitMock();

    // Ensure Inbox folder renders.
    client
      .url(`${E2eHelpers.baseUrl}/healthcare/messaging/folder/0`)
      .waitForElementVisible('body', Timeouts.normal)
      .axeCheck('.main');

    // Ensure Sent folder renders.
    client
      .url(`${E2eHelpers.baseUrl}/healthcare/messaging/folder/-1`)
      .waitForElementVisible('body', Timeouts.normal)
      .axeCheck('.main');

    // Ensure Drafts folder renders.
    client
      .url(`${E2eHelpers.baseUrl}/healthcare/messaging/folder/-2`)
      .waitForElementVisible('body', Timeouts.normal)
      .axeCheck('.main');

    // Ensure Deleted folder renders.
    client
      .url(`${E2eHelpers.baseUrl}/healthcare/messaging/folder/-3`)
      .waitForElementVisible('body', Timeouts.normal)
      .axeCheck('.main');
  }
);



