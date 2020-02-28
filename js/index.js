"use strict";
const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");

// Create an Azure Resource Group
const resourceGroup = new azure.core.ResourceGroup("DevlinresourceGroup");

// Create an Azure resource (Storage Account)
const account = new azure.storage.Account("devlinstorage", {
  // The location for the storage account will be derived automatically from the resource group.
  resourceGroupName: resourceGroup.name,
  accountTier: "Standard",
  accountReplicationType: "LRS"
});

// Export the connection string for the storage account
exports.connectionString = account.primaryConnectionString;
