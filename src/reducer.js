export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    content: action.content,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map((s)=>{
                if(s.id !== action.id) return s;
                return {
                    ...s,
                    completed: !s.completed
                }
            });

        default:
            return state;
    }
}