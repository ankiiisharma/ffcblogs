-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "publishedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
