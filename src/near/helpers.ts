import getConfig from "./config";
/*
  eclipseeer2.testnet -> eclipseeer2
  abc.eclipseeer2.near -> abc-eclipseeer2
  testnet.alice.example.eclipseeer2.testnet -> testnet-alice-example-eclipseeer2
  long-account-id -> long-account-id
 */
export const getAccountName = (account) => {
  const arr = account.split('.');
  const last = arr[arr.length - 1];

  if (last === 'testnet' || last === 'near') {
    arr.pop();
  }
  return arr.join('-');
}

export const getLinkdropUserAccountId = (accountId) =>
  `${getAccountName(accountId)}.${getConfig(process.env.NODE_ENV).contractName}`;;


export const isAccountExist = async (near, accountId) => {
  try {
    await near.connection.provider.query({
      request_type: 'view_account',
      finality: 'final',
      account_id: accountId,
    });
    return true;
  } catch (e) {
    return false;
  }
};

export const determineLinkdropAccountStatus = async (near, accountId) => {
  const linkdropUserAccountId = getLinkdropUserAccountId(accountId);
  const isLinkdropUser = await isAccountExist(near, linkdropUserAccountId);

  return isLinkdropUser;
};