const changeDTO = (set, key, value) => {
    set((DTO) => {
        let newDTO = {...DTO};
        newDTO[key] = value;
        return newDTO;
    });
}
export {changeDTO}