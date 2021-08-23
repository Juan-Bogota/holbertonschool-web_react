import { Map, fromJS } from "immutable";
import { getListCourses } from "./courseSelector";

describe("Course selectors tests", function () {
    it("verify that the selector is working correctly", function () {
        const state = {
            courses: fromJS([
                {
                    id: 1,
                    name: "Angular",
                    isSelected: false,
                    credit: 60,
                },
                {
                    id: 2,
                    name: "Vuejs",
                    isSelected: false,
                    credit: 15,
                },
                {
                    id: 3,
                    name: "JavaScript",
                    isSelected: false,
                    credit: 34,
                },
            ]),
        };

        const expectedResult = [
            {
                id: 1,
                name: "Angular",
                isSelected: false,
                credit: 60,
            },
            {
                id: 2,
                name: "Vuejs",
                isSelected: false,
                credit: 15,
            },
            {
                id: 3,
                name: "JavaScript",
                isSelected: false,
                credit: 34,
            },
        ];

        const selected = getListCourses(state);

        expect(selected.toJS()).toEqual(expectedResult);
    });
});