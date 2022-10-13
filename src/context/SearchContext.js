import { useReducer } from "react";
import { createContext } from "react";
//create initial state
const initialState = {
	city: undefined,
	dates: [],
	options: {
		adult: undefined,
		children: undefined,
		room: undefined,
	},
};

// create context with initial state
export const SearchContext = createContext(initialState);

//reducer for managing state
const SearchReducer = (state, action) => {
	switch (action.type) {
		case "NEW_SEARCH": {
			return action.payload;
		}
		case "RESET_SEARCH": {
			return state;
		}
		default:
			return state;
	}
};
//context provider to wrap our app for cross-wide access in all app
export const SearchContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SearchReducer, initialState);
	return (
		//define all values returned from context and dispatch action
		<SearchContextProvider
			value={{
				city: state.city,
				dates: state.dates,
				options: state.options,
				dispatch,
			}}
		>
			{children}
		</SearchContextProvider>
	);
};
// {children} = wrapped components
