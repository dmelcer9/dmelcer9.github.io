---
title: Ethereum Connect Four
display:
  type: image
  image: "images/connectfour.png"
buttons:
 - class: btn-primary
   aclass: no-web3
   text: No extension found
   props: disabled
 - class: btn-primary
   aclass: with-web3
   link: "http://connect.melcer.dev"
   text: Play game
 - class: btn-outline-primary
   link: "https://github.com/dmelcer9/connect-four-dapp"
   text: View on GitHub
order: 2
afterbuttons: >
  <p></p>
  <div id="alert-box" class="no-web3">
      <div class="alert-arrow">
      </div>
      <div class="alert alert-warning">
          <strong>Note</strong> Requires MetaMask extension to interact with the application. 
          If you would like to go to the game anyways, click <a href="http://connect.melcer.dev">here</a>.
      </div>
  </div>
---


 Play Connect Four on the Ethereum blockchain! A smart contract autonomously manages the current participants of a game, ensures
the validity of moves made by a user, and awards of the winner of a game. Currently deployed
on Ropsten testnet.

