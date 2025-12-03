const createOptions = (array: { name: string; _id: string }[]) => {
    const options = array?.map((item) => ({
        label: item.name,
        value: item._id,
    }));
    return options;
};

export default createOptions;
