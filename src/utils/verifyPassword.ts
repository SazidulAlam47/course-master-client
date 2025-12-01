import { compare } from 'bcryptjs';

const verifyPassword = async (
    plainPassword: string,
    hashedPassword: string
) => {
    return await compare(plainPassword, hashedPassword);
};

export default verifyPassword;
