import { Spinner } from '../ui/spinner';

const Loader = () => {
    return (
        <div className="min-h-[60dvh] flex items-center justify-center">
            <Spinner className="size-6" />
        </div>
    );
};

export default Loader;
