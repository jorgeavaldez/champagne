-- CreateTable
CREATE TABLE "SocialAccount" (
    "id" TEXT NOT NULL,
    "providerType" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refreshToken" TEXT,
    "accessToken" TEXT,
    "accessTokenExpires" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "walletAccountId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "accountId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "linkdropAccountId" TEXT NOT NULL,

    PRIMARY KEY ("accountId")
);

-- CreateTable
CREATE TABLE "LinkdropAccount" (
    "publicKey" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "walletAccountId" TEXT NOT NULL,

    PRIMARY KEY ("accountId")
);

-- CreateTable
CREATE TABLE "WalletAccount" (
    "publicKey" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,

    PRIMARY KEY ("accountId")
);

-- CreateIndex
CREATE UNIQUE INDEX "SocialAccount.providerId_providerAccountId_unique" ON "SocialAccount"("providerId", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "LinkdropAccount.publicKey_unique" ON "LinkdropAccount"("publicKey");

-- CreateIndex
CREATE UNIQUE INDEX "LinkdropAccount_walletAccountId_unique" ON "LinkdropAccount"("walletAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "WalletAccount.publicKey_unique" ON "WalletAccount"("publicKey");

-- AddForeignKey
ALTER TABLE "SocialAccount" ADD FOREIGN KEY ("walletAccountId") REFERENCES "WalletAccount"("accountId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign" ADD FOREIGN KEY ("linkdropAccountId") REFERENCES "LinkdropAccount"("accountId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkdropAccount" ADD FOREIGN KEY ("walletAccountId") REFERENCES "WalletAccount"("accountId") ON DELETE CASCADE ON UPDATE CASCADE;
