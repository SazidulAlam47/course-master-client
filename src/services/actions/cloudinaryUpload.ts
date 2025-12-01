'use server';

export const uploadImageToCloudinary = async (
    imageFile: File
): Promise<string> => {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', process.env.UPLOAD_PRESET as string);

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
        {
            method: 'POST',
            body: formData,
            cache: 'no-store',
        }
    );

    const data = await res.json();
    return data.secure_url;
};
