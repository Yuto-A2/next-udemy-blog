import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
const prisma = new PrismaClient();
async function main() {
    await prisma.post.deleteMany()
    await prisma.user.deleteMany()

    const hashedPassword = await bcrypt.hash('passowrd123', 12)

    const dummyImages = [
        'https://picsum.photos/seed/post1/600/400',
        'https://picsum.photos/seed/post2/600/400'
    ]

    const user = await prisma.user.create({
        data: {
            email: 'test@example.com',
            name: 'Test User',
            password: hashedPassword,
            posts: {
                create: [{
                    title: 'はじめてのブログ投稿です',
                    content: 'これは一つ目のブログ投稿です',
                    topImage: dummyImages[1],
                    published: true
                }, {
                    title: '2番目の投稿',
                    content: 'これは二つ目のブログ投稿です',
                    topImage: dummyImages[1],
                    published: true
                }
                ]
            }
        }
    })
    console.log({ user })
}
main().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})