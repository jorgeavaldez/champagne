/*
  Warnings:

  - A unique constraint covering the columns `[providerId,providerType,walletAccountId]` on the table `SocialAccount` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "SocialAccount.providerId_providerAccountId_unique";

-- AlterTable
ALTER TABLE "SocialAccount" ADD COLUMN     "oauthToken" TEXT,
ADD COLUMN     "oauthTokenSecret" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "SocialAccount.providerId_providerType_walletAccountId_unique" ON "SocialAccount"("providerId", "providerType", "walletAccountId");
