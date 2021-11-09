import React from 'react'


const initialState = {
  amount: 0,
  loader: false,
  userAddress: "",
  depositeAmount: "",
  rewardAmount: "",
  bnbBalance: "",
  walletBalance: "",
  error: false,
  success: false,
  claimSuccess: false,
  lpPerWsbVal: "0",
  wsbPerLpVal: "0",
  tokenBalance: "0",
  v2StakeBalance: "0",
  wsbTvl: "0",
  bnbTvl: "0",
  busdTvl: "0",
  oldVersionCheck: true,
  openDeposit: false,
  switchModal: false,
  migrationSuccessModal: false
};

const walletReducer = (state = initialState, action: any) => {
}
export default walletReducer;
