export type TDecodedUser = {
    id: string;
    name: string;
    email: string;
    image?: string;
    role: 'admin' | 'student';
    hasPassword: boolean;
    needPasswordChange: boolean;
};
