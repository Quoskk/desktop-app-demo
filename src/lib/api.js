import Promise from 'bluebird';
import fetch from 'isomorphic-fetch';
import { api } from '../config';

class ApiCaller {

  static getAvailableTokens() {
    return fetch(`${api.protocol}://${api.uri}:${api.port}${api.base}/tokens`).then(res => {
        return res.json();
    });
  }

  static getBalanceOfToken(contractAddress, walletAddress) {
    return fetch(`${api.protocol}://${api.uri}:${api.port}${api.base}/token/${contractAddress}/${walletAddress}`).then(res => {
        return res.json();
    });
  }
}

export default ApiCaller;
