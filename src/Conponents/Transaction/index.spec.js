import React from "react";
import {shallow} from "enzyme";
import Transaction from ".";

describe("Transaction component", () =>{
    let sut;
    let props;
    beforeEach(()=>{
        props = {
            value: "22",
            comment: "hell commnt",
            date: "10.10.21"
        }
        sut = shallow(<Transaction {...props}/>);
    })
    it("should show transaction", ()=>{
        expect(sut).toMatchSnapshot();
    })
    it("should show two zeros after amount", ()=>{
        expect(sut.find("Value").text()).toBe("22.00")
    })
})