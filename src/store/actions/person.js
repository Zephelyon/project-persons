import * as action_types from '../constants';
import axios from 'axios'
const URL_MOCK_API = "https://6077c67e1ed0ae0017d6b4aa.mockapi.io/api/persons"

export const setPerson = (person) => {
    return {
        type: action_types.SET_PERSON,
        person
    };

};

export const addPerson = (person) => {
    return async (dispatch, getState) => {

        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            };

            const body = {

                name: person.name,
                lastname: person.lastname,
                email: person.email,
                phone: person.phone,
                city: person.city,
                country: person.country,

            };

            const response = await axios.post(`${URL_MOCK_API}/persons`, body, config);
            console.log(response);
            dispatch(setPerson(response.data));

        } catch (error) {
            console.log(error);
        }

    };
}