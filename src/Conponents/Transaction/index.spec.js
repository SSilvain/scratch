import React from "react";
import {shallow} from "enzyme";
import Transaction from ".";

describe("Transaction component", () =>{
    it("should show transaction", ()=>{
        const props = {
                value: "22",
                comment: "hell commnt",
                date: "10.10.21"
        }
        const sut = shallow(<Transaction {...props}/>);
        expect(sut).toMatchSnapshot();
    })
})