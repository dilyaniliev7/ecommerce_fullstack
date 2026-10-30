

export const getFilePreview = async (file:Blob):Promise<string>=>{
    return new Promise<string>(resolve => {
            const fileReader = new FileReader()

            fileReader.onloadend = () => {
                resolve(fileReader.result as string)
            }
            fileReader.readAsDataURL(file)
            })

}