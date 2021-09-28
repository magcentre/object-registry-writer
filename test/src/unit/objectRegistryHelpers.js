const { expect } = require('chai');
const { mergeAccounts } = require('../../../src/lib/accountHelpers');


describe('Check if merge accounts is deep merging the user old accounts with new accounts in same institution', () => {
  const oldAccounts = [{
    accounts: [
      {
        status: 'open',
        id: '5e8c1c722c3a2d1974752cb5',
        balances: {
          available: null,
          current: 65262,
          isoCurrencyCode: 'USD',
          limit: null,
        },
        accountId: 'x1vwZJMJG8umMzGJVg4wFrJVRLbznQCn4J98k',
        type: 'loan',
      },
    ],
    institutionId: 'institution1',
  }];

  const newAccountsNewInst = [{
    institutionId: 'institution2',
    accounts: [
      {
        status: 'open',
        id: '5e8c1ccc2c3a2d1974752ccf',
        accountId: 'x1vwZJMJG8umMzGJVg4wFrJVRLbznQCn4J98k',
        type: 'loan',
        balances: {
          available: null,
          current: 65262,
          isoCurrencyCode: 'USD',
          limit: null,
        },
      },
    ],
  }];

  const newAccountsExistInst = [{
    institutionId: 'institution1',
    accounts: [
      {
        status: 'open',
        id: '5e8c1ccc2c3a2d1974752ccf',
        accountId: 'x1vwZJMJG8umMzGJVg4wFrJVRLbznQCn4J98k',
        type: 'loan',
        balances: {
          available: null,
          current: 65262,
          isoCurrencyCode: 'USD',
          limit: null,
        },
      },
    ],
  }];

  it('should pass with shallow nested objects', () => {
    const actualResult = mergeAccounts([{ inst: 1, acc: ['a', 'b'] }], [{ inst: 1, acc: ['c'] }], 'inst');
    const expectedResult = [{ inst: 1, acc: ['a', 'b', 'c'] }];
    expect(actualResult).to.deep.equal(expectedResult);
  });

  it('add new accounts of new institution in the institution list', () => {
    const actualResult = mergeAccounts(oldAccounts, newAccountsNewInst, 'institutionId');
    const expectedResult = [{
      accounts: [
        {
          status: 'open',
          id: '5e8c1c722c3a2d1974752cb5',
          balances: {
            available: null,
            current: 65262,
            isoCurrencyCode: 'USD',
            limit: null,
          },
          accountId: 'x1vwZJMJG8umMzGJVg4wFrJVRLbznQCn4J98k',
          type: 'loan',
        },
      ],
      institutionId: 'institution1',
    },
    {
      institutionId: 'institution2',
      accounts: [
        {
          status: 'open',
          id: '5e8c1ccc2c3a2d1974752ccf',
          accountId: 'x1vwZJMJG8umMzGJVg4wFrJVRLbznQCn4J98k',
          type: 'loan',
          balances: {
            available: null,
            current: 65262,
            isoCurrencyCode: 'USD',
            limit: null,
          },
        },
      ],
    }];
    expect(actualResult).to.deep.equal(expectedResult);
  });

  it('add new accounts of existing institution in the account list', () => {
    const actualResult = mergeAccounts(oldAccounts, newAccountsExistInst, 'institutionId');
    const expectedResult = [{
      accounts: [
        {
          status: 'open',
          id: '5e8c1c722c3a2d1974752cb5',
          balances: {
            available: null,
            current: 65262,
            isoCurrencyCode: 'USD',
            limit: null,
          },
          accountId: 'x1vwZJMJG8umMzGJVg4wFrJVRLbznQCn4J98k',
          type: 'loan',
        },
        {
          status: 'open',
          id: '5e8c1ccc2c3a2d1974752ccf',
          accountId: 'x1vwZJMJG8umMzGJVg4wFrJVRLbznQCn4J98k',
          type: 'loan',
          balances: {
            available: null,
            current: 65262,
            isoCurrencyCode: 'USD',
            limit: null,
          },
        },
      ],
      institutionId: 'institution1',
    }];
    expect(actualResult).to.deep.equal(expectedResult);
  });

  it('should not create a new institution when institution exists', () => {
    const actualResult = mergeAccounts(oldAccounts, newAccountsExistInst, 'institutionId');
    const expectedResult = [
      {
        accounts: [
          {
            status: 'open',
            id: '5e8c1c722c3a2d1974752cb5',
            balances: {
              available: null,
              current: 65262,
              isoCurrencyCode: 'USD',
              limit: null,
            },
            accountId: 'x1vwZJMJG8umMzGJVg4wFrJVRLbznQCn4J98k',
            type: 'loan',
          },
        ],
        institutionId: 'institution1',
      },
      {
        institutionId: 'institution2',
        accounts: [
          {
            status: 'open',
            id: '5e8c1ccc2c3a2d1974752ccf',
            accountId: 'x1vwZJMJG8umMzGJVg4wFrJVRLbznQCn4J98k',
            type: 'loan',
            balances: {
              available: null,
              current: 65262,
              isoCurrencyCode: 'USD',
              limit: null,
            },
          },
        ],
      },
    ];
    expect(actualResult).to.deep.not.equal(expectedResult);
  });
});
