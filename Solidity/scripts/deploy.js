const hre = require("hardhat");

async function main() {
  const RegistrationUser = await hre.ethers.getContractFactory(
    "RegistrationUser"
  );
  const registrationUser = await RegistrationUser.deploy();

  await registrationUser.deployed();

  console.log("RegistrationUser deployed: ", registrationUser.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
