import React from "react";
import { shallow } from "enzyme";
import Form from ".";

describe("Form component", () => {
    let props;
    let sut;

    beforeEach(() => {
        props = {
            onChange: jest.fn(),
        };

        sut = shallow(<Form {...props} />);
    });

    describe("when edit form", () => {
        it("should change value input", () => {
            let input = sut.find('input[name="value"]').at(0);

            input.simulate("change", {
                target: {
                    value: "123",
                    name: "value",
                },
            });

            sut.update();

            input = sut.find('input[name="value"]').at(0);

            const props = input.props();
            expect(props.value).toBe("123");
        });
        it("should change comment input", () => {
            const expectedResult = "comment value";
            let input = sut.find('textarea[name="comment"]').at(0);

            input.simulate("change", {
                target: {
                    value: expectedResult,
                    name: "comment",
                },
            });

            sut.update();

            input = sut.find('textarea[name="comment"]').at(0);

            const { value } = input.props();
            expect(value).toBe(expectedResult);
        });
    });
});
