import ImageKit from "@imagekit/nodejs"

const image_kit = new ImageKit({
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
})

export default image_kit