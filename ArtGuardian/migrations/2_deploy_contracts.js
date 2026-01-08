const ArtMarketplace = artifacts.require("ArtMarketplace");

module.exports = function(deployer) {
  const name = "ArtMarketplace"; // Replace with the desired name
  const symbol = "ARTM"; // Replace with the desired symbol
  deployer.deploy(ArtMarketplace, name, symbol);
};
