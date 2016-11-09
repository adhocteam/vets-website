const request = require('request');

export const testData = {
  folders: {
    data: [
      {
        attributes: {
          folderId: 123,
          name: 'test folder 123'
        }
      },
      {
        attributes: {
          folderId: 456,
          name: 'test folder 456'
        }
      },
      {
        attributes: {
          folderId: 789,
          name: 'test folder 789'
        }
      }
    ]
  },

  folderMessages: {
    data: [
      {
        attributes: {
          messageId: 123,
          body: 'testing 123',
          category: "MEDICATIONS",
          subject: "CARBAMAZEPINE",
          body: null,
          attachment: false,
          sentDate: "2016-11-07T16:05:15.000Z",
          senderId: 2,
          senderName: "DEFGHIJ, ABC",
          recipientId: 0,
          recipientName: "QRSTUV, KLMNOP",
          readReceipt: "READ"
        }
      },
      {
        attributes: {
          messageId: 456,
          body: 'testing 456',
          category: "MEDICATIONS",
          subject: "CARBAMAZEPINE",
          body: null,
          attachment: false,
          sentDate: "2016-11-07T16:05:15.000Z",
          senderId: 4,
          senderName: "DEFGHIJ, ABC",
          recipientId: 1,
          recipientName: "QRSTUV, KLMNOP",
          readReceipt: "READ"
        }
      },
      {
        attributes: {
          messageId: 789,
          body: 'testing 789',
          category: "MEDICATIONS",
          subject: "CARBAMAZEPINE",
          body: null,
          attachment: false,
          sentDate: "2016-11-07T16:05:15.000Z",
          senderId: 6,
          senderName: "DEFGHIJ, ABC",
          recipientId: 2,
          recipientName: "QRSTUV, KLMNOP",
          readReceipt: "READ"
        }
      }
    ],
    meta: {
      sort: {
        sentDate: 'DESC'
      },
      pagination: {
        currentPage: 1,
        perPage: 25,
        totalEntries: 3,
        totalPages: 1
      }
    }
  },

  recipients: {
    data: [
      {
        attributes: {
          name: 'Triage Team 1',
          triageTeamId: '0'
        }
      },
      {
        attributes: {
          name: 'Triage Team 2',
          triageTeamId: '1'
        }
      },
      {
        attributes: {
          name: 'Triage Team 3',
          triageTeamId: '2'
        }
      }
    ]
  }  
};

function initApplicationSubmitMock() {
  request({
    uri: `${E2eHelpers.apiUrl}/mock`,
    method: 'POST',
    json: {
      path: '/api/hca/v1/application',
      verb: 'post',
      value: {
        formSubmissionId: '123fake-submission-id-567',
        timeStamp: '2016-05-16'
      }
    }
  });
}

module.exports = {
  testData,
  initApplicationSubmitMock
};

