
const initialState = {
        connected: false,
};

export default (state = initialState, action) => {
        switch (action.type) {
                case 'XXXXXX':
                        return action.payload;
                default:
                        return state;
        };
};
